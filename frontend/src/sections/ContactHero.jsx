import { Phone, Mail, ArrowRight } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF9F6] via-[#F8F5EF] to-[#F3EEE3] py-24">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#304669]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Label */}
          <div
            className="
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          bg-white
          border
          border-[#D4AF37]/20
          shadow-sm
        "
          >
            <span
              className="
            uppercase
            tracking-[3px]
            text-xs
            font-semibold
            text-[#D4AF37]
          "
            >
              Contact Us
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
          mt-8
          text-5xl
          md:text-7xl
          font-bold
          text-[#304669]
          leading-tight
        "
          >
            Get In Touch With
            <span className="block text-[#D4AF37]">Our Legal Team</span>
          </h1>

          {/* Description */}
          <p
            className="
          mt-8
          text-lg
          md:text-xl
          text-slate-600
          leading-9
          max-w-3xl
          mx-auto
        "
          >
            Whether you require legal advice, representation, or consultation,
            our experienced team is ready to assist you with professionalism,
            integrity, and commitment.
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+91XXXXXXXXXX"
              className="
            inline-flex
            items-center
            gap-2
            bg-[#D4AF37]
            text-[#0F172A]
            px-8
            py-4
            rounded-xl
            font-semibold
            hover:scale-105
            transition-all
            duration-300
          "
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="mailto:info@vidhichambers.com"
              className="
            inline-flex
            items-center
            gap-2
            border-2
            border-[#304669]
            text-[#304669]
            px-8
            py-4
            rounded-xl
            font-semibold
            hover:bg-[#304669]
            hover:text-white
            transition-all
            duration-300
          "
            >
              <Mail size={18} />
              Email Us
            </a>
          </div>

          {/* Trust Statement */}
          <div
            className="
          mt-12
          inline-flex
          items-center
          gap-3
          text-slate-500
          text-sm
        "
          >
            <span>Confidential Consultations</span>

            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />

            <span>Prompt Responses</span>

            <span className="w-1 h-1 rounded-full bg-[#D4AF37]" />

            <span>Professional Guidance</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
