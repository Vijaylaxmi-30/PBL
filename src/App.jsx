import React from 'react';
import HomePage from './Pages/HomePage';

function App() {
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

  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;