import React from "react";
import Header from "../components/Header";
import FooterCTA from "../sections/FooterCTA";
import ContactHero from "../sections/ContactHero";
import ContactInfoCards from "../sections/ContactInfoCards";
import ContactForm from "../components/ContactForm";
import OfficeLocation from "../components/OfficeLocation";
import ContactFAQ from "../sections/ContactFAQ";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import InternshipSection from "../sections/InternshipSection";

const ContactPage = () => {
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
