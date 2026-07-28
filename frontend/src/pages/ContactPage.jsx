import Header from "../components/Header";
import FooterCTA from "../sections/FooterCTA";
import ContactHero from "../sections/ContactHero";
import ContactInfoCards from "../sections/ContactInfoCards";
import ContactForm from "../components/ContactForm";
import OfficeLocation from "../components/OfficeLocation";
import ContactFAQ from "../sections/ContactFAQ";
import InternshipSection from "../sections/InternshipSection";

const ContactPage = () => {
  return (
    <>
      <Header />
      <ContactHero />
      <ContactForm />
      <InternshipSection />
      <ContactInfoCards />
      <OfficeLocation />
      <ContactFAQ />
      <FooterCTA />
    </>
  );
};

export default ContactPage;
