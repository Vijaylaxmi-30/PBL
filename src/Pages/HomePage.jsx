import React, { useState, useEffect } from 'react';
import { Heart, ChevronDown, Activity, Stethoscope } from 'lucide-react';
import styles from '../styles/HomePage.module.css';

// Actual health-related placeholder images
const carouselContent = [
  {
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
    title: "Your Heart, Your Health",
    subtitle: "Comprehensive Cardiovascular Risk Assessment",
    description: "Personalized insights to protect and improve your heart health",
    buttonText: "Start Your Assessment"
  },
  {
    image: 'https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg',
    title: "Advanced Risk Prediction",
    subtitle: "Data-Driven Health Strategies",
    description: "Leverage cutting-edge technology to understand your cardiovascular risk",
    buttonText: "Explore Insights"
  },
  {
    image: 'https://images.pexels.com/photos/4226766/pexels-photo-4226766.jpeg',
    title: "Proactive Wellness Journey",
    subtitle: "Transform Your Cardiovascular Health",
    description: "Actionable recommendations tailored to your unique health profile",
    buttonText: "Begin Your Journey"
  }
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <a href="/" className={styles.logo}>
          <Heart className={styles.logoIcon} size={24} />
          <span>HealthCare</span>
        </a>
        <div className={styles.navLinks}>
          <a href="/" className={`${styles.navLink} ${styles.active}`}>Home</a>
          <a href="/calculator" className={styles.navLink}>Risk Calculator</a>
          <a href="/dashboard" className={styles.navLink}>Dashboard</a>
          <a href="/diet-exercise" className={styles.navLink}>Diet & Exercise</a>
          <button className={styles.signInButton}>Sign In</button>
        </div>
      </div>
    </nav>
  );
};

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % carouselContent.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles.carousel}>
      {carouselContent.map((item, index) => (
        <div 
          key={index}
          className={`${styles.carouselSlide} ${
            index === currentIndex ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div 
            className={styles.carouselImage}
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className={styles.carouselOverlay} />
        </div>
      ))}

      <div className={styles.carouselContent}>
        <div className={styles.carouselText}>
          <h2 className={styles.subtitle}>
            {carouselContent[currentIndex].subtitle}
          </h2>
          <h1 className={styles.title}>
            {carouselContent[currentIndex].title}
          </h1>
          <p className={styles.description}>
            {carouselContent[currentIndex].description}
          </p>
          <button className={styles.carouselButton}>
            {carouselContent[currentIndex].buttonText}
          </button>
        </div>
      </div>

      <div className={styles.carouselDots}>
        {carouselContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`${styles.dot} ${
              index === currentIndex ? styles.dotActive : styles.dotInactive
            }`}
          />
        ))}
      </div>

      <button 
        onClick={handleScrollDown}
        className={styles.scrollDown}
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </div>
  );
};

const FeatureHighlights = () => {
  const features = [
    {
      icon: <Activity className="w-12 h-12 text-red-500" />,
      title: "Comprehensive Risk Assessment",
      description: "Detailed analysis of your cardiovascular health factors"
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-blue-500" />,
      title: "Personalized Insights",
      description: "Tailored recommendations based on your unique health profile"
    },
    {
      icon: <Heart className="w-12 h-12 text-green-500" />,
      title: "Proactive Health Management",
      description: "Empower yourself with actionable health strategies"
    }
  ];

  return (
    <section className={styles.features}>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <FeatureHighlights />
      
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>
          Take Charge of Your Heart Health
        </h2>
        <p className={styles.ctaDescription}>
          Begin your journey to better cardiovascular wellness with our advanced risk assessment tool.
        </p>
        <button className={styles.ctaButton}>
          Get Started
        </button>
      </section>
    </div>
  );
};

export default HomePage;