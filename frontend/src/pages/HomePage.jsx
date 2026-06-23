import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import AboutSection from "../sections/AboutSection";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";
import StatsSection from "../sections/StatsSection";
import FooterCTA from "../sections/FooterCTA";
import bgImage from "../assets/OIP-M.png";
import PracticeAreaGrid from "../sections/PracticeAreaGrid";
import practiceAreas from "../data/practiceAreas";

const HomePage = () => {
  return (
    <>
      <Header />
      <ContactForm backgroundImage={bgImage} />
      <PracticeAreaGrid practiceAreas={practiceAreas} />
      <AboutSection />
      <WhyChooseUsSection />
      <StatsSection />
      <FooterCTA />
    </>
  );
};

export default HomePage;
