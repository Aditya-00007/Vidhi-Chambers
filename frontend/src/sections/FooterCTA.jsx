import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteInfo } from "../data/siteInfo";

const FooterCTA = () => {
  return (
    <footer className="relative mt-20 md:mt-28 lg:mt-32">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-[#304669] rounded-3xl px-8 md:px-16 py-14 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="uppercase tracking-[4px] text-[#D4AF37] text-sm font-medium">
                Get In Touch
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready To Discuss
                <span className="block text-[#D4AF37]">Your Legal Matter?</span>
              </h2>

              <p className="mt-6 text-slate-300 leading-8">
                Whether you require legal representation, strategic advice, or
                professional consultation, our experienced team is ready to
                assist you.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-[#D4AF37] text-[#0F172A] px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
              >
                Contact Firm
              </Link>

              <a
                href={siteInfo.phoneHref}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#304669] transition duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#0F172A] pt-40 pb-8 -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-white">Vidhi Chambers</h3>

              <p className="text-[#D4AF37] mt-2">Advocates & Consultants</p>

              <p className="text-slate-400 mt-6 leading-7">
                Providing trusted legal counsel and strategic representation
                since 2011.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-5">
                Quick Links
              </h4>

              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-[#D4AF37]">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to="/about"
                    className="text-slate-400 hover:text-[#D4AF37]"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/practice-areas"
                    className="text-slate-400 hover:text-[#D4AF37]"
                  >
                    Practice Areas
                  </Link>
                </li>

                <li>
                  <Link
                  to="/team"
                    className="text-slate-400 hover:text-[#D4AF37]"
                  >
                    Our People
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-slate-400 hover:text-[#D4AF37]"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-5">Contact</h4>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaPhoneSquareAlt size={18} className="text-[#D4AF37]" />
                  <a
                    href={siteInfo.phoneHref}
                    className="text-slate-400 hover:text-[#D4AF37]"
                  >
                    {siteInfo.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MdEmail size={18} className="text-[#D4AF37]" />
                  <a
                    href={`mailto:${siteInfo.email}`}
                    className="text-slate-400 hover:text-[#D4AF37]"
                  >
                    {siteInfo.email}
                  </a>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 mt-4 text-[#D4AF37] hover:gap-3 transition-all"
                >
                  View Contact Details
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-5">
                Follow Us
              </h4>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0F172A] transition"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0F172A] transition"
                >
                  <FaSquareInstagram size={20} />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-[#0F172A] transition"
                >
                  <FaFacebookSquare size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D4AF37]/20 mt-12 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © 2026 Vidhi Chambers Advocates & Consultants. All Rights
                Reserved.
              </p>

              <p className="text-slate-500 text-sm">
                Integrity • Excellence • Justice
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
