import Header from "../components/Header";
import FooterCTA from "../sections/FooterCTA";
import PracticeAreasHero from "../sections/PracticeAreasHero";
import PracticeIntroduction from "../sections/PracticeIntroduction";
import PracticeAreaGrid from "../sections/PracticeAreaGrid";
import practiceAreas from "../data/practiceAreas";
import WhoWeServe from "../sections/WhoWeServe";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PracticeAreasPage = () => {
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
      <PracticeAreasHero />
      <PracticeIntroduction />
      <PracticeAreaGrid practiceAreas={practiceAreas} />
      <WhoWeServe />
      <FooterCTA />
    </>
  );
};

export default PracticeAreasPage;
