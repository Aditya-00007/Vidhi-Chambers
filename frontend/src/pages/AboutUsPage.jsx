import React from "react";
import Header from "../components/Header";
import AboutusHero from "../components/AboutusHero";
import FounderMessage from "../components/FounderMessage";
import CoreValues from "../sections/CoreValues";
import FooterCTA from "../sections/FooterCTA";

const AboutUSPage = () => {
  return (
    <>
      <Header />
      <AboutusHero />
      <FounderMessage />
      <CoreValues />
      <FooterCTA />
    </>
  );
};

export default AboutUSPage;
