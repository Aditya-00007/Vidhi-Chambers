import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import PracticeAreas from "../sections/PracticeAreas";
import AboutSection from "../sections/AboutSection";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";
import StatsSection from "../sections/StatsSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <ContactForm />
      <PracticeAreas />
      <AboutSection />
      <WhyChooseUsSection />
      <StatsSection />
    </>
  );
};

export default HomePage;
