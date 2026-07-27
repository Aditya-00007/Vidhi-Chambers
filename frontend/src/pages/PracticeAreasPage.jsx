import Header from "../components/Header";
import FooterCTA from "../sections/FooterCTA";
import PracticeAreasHero from "../sections/PracticeAreasHero";
import PracticeIntroduction from "../sections/PracticeIntroduction";
import PracticeAreaGrid from "../sections/PracticeAreaGrid";
import practiceAreas from "../data/practiceAreas";
import WhoWeServe from "../sections/WhoWeServe";
const PracticeAreasPage = () => {
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
