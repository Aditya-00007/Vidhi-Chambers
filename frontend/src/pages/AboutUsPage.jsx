import Header from "../components/Header";
import AboutusHero from "../sections/AboutusHero";
import FounderMessage from "../components/FounderMessage";
import CoreValues from "../sections/CoreValues";
import FooterCTA from "../sections/FooterCTA";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CSRCommitment from "../sections/CSRCommitment";

const AboutUSPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);
  return (
    <>
      <Header />
      <AboutusHero />
      <FounderMessage />
      <CSRCommitment />
      <CoreValues />
      <FooterCTA />
    </>
  );
};

export default AboutUSPage;
