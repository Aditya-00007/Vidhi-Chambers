import Header from "../components/Header";
import FooterCTA from "../sections/FooterCTA";
import ClientsHero from "../sections/ClientsHero";
import WhoWeServe from "../sections/WhoWeServe";
import ClientExperiences from "../sections/ClientExperiences";
import TrustMetrics from "../sections/TrustMetrics";
const ClientsPage = () => {
  return (
    <>
      <Header />
      <ClientsHero />
      <WhoWeServe />
      <ClientExperiences />
      <TrustMetrics />
      <FooterCTA />
    </>
  );
};

export default ClientsPage;
