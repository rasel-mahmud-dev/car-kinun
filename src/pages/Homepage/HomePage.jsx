import React from "react";
import WhyChooseSection from "./WhyChooseSection.jsx";
import "./homePage.scss";
import HeroSection from "./HeroSection.jsx";
import PopularCars from "./PopularCars.jsx";
import FAQs from "./FAQs";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <PopularCars />
      <WhyChooseSection />
      <FAQs />
    </div>
  );
};

export default HomePage;