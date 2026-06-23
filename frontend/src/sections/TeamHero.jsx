import { Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TeamHero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#FAF9F6] via-[#F8F5EF] to-[#F3EEE3] py-28">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#304669]/5 rounded-full blur-3xl" />

      <div className="absolute right-10 top-10 text-[18rem] font-bold text-[#304669]/5 select-none">
        ⚖
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-[#D4AF37]/20">
            <Users size={16} className="text-[#D4AF37]" />

            <span className="uppercase tracking-[3px] text-xs font-semibold text-[#D4AF37]">
              Our People
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl md:text-7xl font-bold text-[#304669] leading-tight">
            Meet The Legal Professionals
            <span className="block text-[#D4AF37]">Behind Vidhi Chambers</span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl text-slate-600 leading-9 max-w-4xl mx-auto">
            Our team brings together experienced advocates, legal consultants,
            and advisors dedicated to providing strategic legal guidance and
            effective representation. With diverse expertise and a shared
            commitment to excellence, we work collaboratively to achieve the
            best outcomes for our clients.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0F172A] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Our Team
              <ArrowRight size={18} />
            </Link>

            <a
              href="#team-grid"
              className="inline-flex items-center gap-2 border-2 border-[#304669] text-[#304669] px-8 py-4 rounded-xl font-semibold hover:bg-[#304669] hover:text-white transition-all duration-300"
            >
              Explore Team
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border-t-4 border-[#D4AF37]">
            <h3 className="text-4xl font-bold text-[#304669]">20+</h3>
            <p className="mt-2 text-slate-600">Legal Professionals</p>
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

export default TeamHero;
