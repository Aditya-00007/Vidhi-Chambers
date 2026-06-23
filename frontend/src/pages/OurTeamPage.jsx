import React from "react";
import Header from "../components/Header";
import FooterCTA from "../sections/FooterCTA";
import TeamHero from "../sections/TeamHero";
import TeamIntroduction from "../sections/TeamIntroduction";
import TeamSection from "../sections/TeamSection";

const OurTeamPage = () => {
  return (
    <>
      <Header />
      <TeamHero />
      <TeamIntroduction />
      <TeamSection />
      <FooterCTA />
    </>
  );
};

export default OurTeamPage;
