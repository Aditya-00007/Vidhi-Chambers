import Header from "../components/Header";
import FooterCTA from "../sections/FooterCTA";
import ArticlesHero from "../sections/ArticlesHero";
import ArticlesGrid from "../sections/ArticlesGrid";

const ArticlesPage = () => {
  return (
    <>
      <Header />
      <ArticlesHero />
      <ArticlesGrid />
      <FooterCTA />
    </>
  );
};

export default ArticlesPage;
