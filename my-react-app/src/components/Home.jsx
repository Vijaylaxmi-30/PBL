import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import img1 from "../assets/health1.jpg";
import img2 from "../assets/health2.jpg";
import img3 from "../assets/health3.jpg";

const images = [img1, img2, img3];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <h2 className={styles.logo}>HealthCare</h2>
        <ul className={styles.navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login" className={styles.loginButton}>Login</Link></li>
        </ul>
      </nav>
      <div className={styles.contentWrapper}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>PRIORITIZE YOUR HEALTH</h1>
          <p className={styles.description}>We make your health our top priority. Get access to expert medical advice, fitness tips, and wellness programs.</p>
          <div className={styles.buttons}>
            <button className={styles.getStartedButton}>Get Started</button>
          </div>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <img src={images[currentImage]} alt="Health representation" className={styles.animatedImage} />
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
          </div>
          <div className={styles.footerLinks}>
            <ul className={styles.links}>
              <li><a href="#">Home</a></li>
              <li><a href="#">Risk Calculator</a></li>
              <li><a href="#">Health Insights</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className={styles.footerContact}>
            <p>Email Support: <a href="mailto:healthify@ascvdrisk.com">healthify@ascvdrisk.com</a></p>
            <p>Helpline: +1 234 567 890</p>
            <div className={styles.socialIcons}>
              <span>Follow Us</span>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;