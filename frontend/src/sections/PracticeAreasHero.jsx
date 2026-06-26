import { Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PracticeAreasHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFC] py-20 md:py-24 lg:py-28">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#304669]/5 rounded-full blur-3xl" />

      <div className="absolute right-10 top-10 text-[18rem] font-bold text-[#304669]/5 select-none">
        ⚖
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#D4AF37]/20">
            <Scale size={16} className="text-[#D4AF37]" />

            <span className="uppercase tracking-[3px] text-xs font-semibold text-[#D4AF37]">
              Practice Areas
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-4xl font-bold leading-tight text-[#304669] sm:text-5xl md:text-7xl">
            Legal Expertise Across
            <span className="block text-[#D4AF37]">Diverse Practice Areas</span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl text-slate-600 leading-9 max-w-5xl mx-auto">
            From litigation and dispute resolution to advisory and consultancy
            services, Vidhi Chambers provides comprehensive legal support
            tailored to the needs of individuals, businesses, and institutions.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#practice-grid"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0F172A] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
            >
              Explore Practice Areas
              <ArrowRight size={18} />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#304669] text-[#304669] px-8 py-4 rounded-xl font-semibold hover:bg-[#304669] hover:text-white transition-all duration-300"
            >
              Contact Firm
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border-t-4 border-[#D4AF37]">
            <h3 className="text-4xl font-bold text-[#304669]">20+</h3>
            <p className="mt-2 text-slate-600">Practice Areas</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border-t-4 border-[#D4AF37]">
            <h3 className="text-4xl font-bold text-[#304669]">15+</h3>
            <p className="mt-2 text-slate-600">Years Experience</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border-t-4 border-[#D4AF37]">
            <h3 className="text-4xl font-bold text-[#304669]">1000+</h3>
            <p className="mt-2 text-slate-600">Cases Handled</p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border-t-4 border-[#D4AF37]">
            <h3 className="text-4xl font-bold text-[#304669]">Since</h3>
            <p className="mt-2 text-slate-600">2011</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasHero;
