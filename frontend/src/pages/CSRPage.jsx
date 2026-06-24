import React from "react";
import Header from "../components/Header";
import FooterCTA from "../sections/FooterCTA";
import CSRHero from "../sections/CSRHero";
import CSRCommitment from "../sections/CSRCommitment";
import CSRImpactAreas from "../sections/CSRImpactAreas";

const CSRPage = () => {
  return (
    <>
      <Header />
      <CSRHero />
      <CSRCommitment />
      <CSRImpactAreas />
      <FooterCTA />
    </>
  );
};

export default CSRPage;
