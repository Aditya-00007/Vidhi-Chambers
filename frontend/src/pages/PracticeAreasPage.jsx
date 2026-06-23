import React from "react";
import Header from "../components/Header";
import FooterCTA from "../sections/FooterCTA";
import PracticeAreasHero from "../sections/PracticeAreasHero";
import PracticeIntroduction from "../sections/PracticeIntroduction";
import PracticeAreaGrid from "../sections/PracticeAreaGrid";
import practiceAreas from "../data/practiceAreas";
const PracticeAreasPage = () => {
  return (
    <>
      <Header />
      <PracticeAreasHero />
      <PracticeIntroduction />
      <PracticeAreaGrid practiceAreas={practiceAreas} />
      <FooterCTA />
    </>
  );
};

export default PracticeAreasPage;
