import { ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

const AboutSection = () => {
  const aboutData = {
    title: "About Us",

    founder: {
      name: "Adv. Shivam Sharma",
      designation: "Founder & Managing Partner",
      experience: "15+",
      image: logo,
    },

    description:
      "Vidhi Chambers is a trusted law firm known for its strategic advocacy, client-focused approach, and broad legal expertise. Led by experienced professionals, the firm provides comprehensive legal solutions across civil, criminal, matrimonial, property, corporate, and arbitration matters. Every case is approached with thorough research, practical insight, and a commitment to achieving effective outcomes for clients.",
  };
  return (
    <section className="py-24">
      <div className="max-w-350 mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative w-fit mx-auto">
            {/* Gold Background Block */}
            <div className="absolute top-6 left-6 w-full h-full bg-[#FCFCFC] rounded-3xl" />

            {/* Image */}
            <div className="relative z-10 overflow-hidden rounded-3xl border border-gray-200 bg-amber-200">
              <img
                src={aboutData.founder.image}
                alt={aboutData.founder.name}
                className="w-full max-w-md object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-amber-200 text-blue-950 px-6 py-4 rounded-2xl shadow-lg">
              <div className="text-3xl font-bold">
                {aboutData.founder.experience}
              </div>

              <div className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="text-blue-800 font-semibold uppercase tracking-[3px]">
              {aboutData.title}
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
              Trusted Legal Guidance With Proven Expertise
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              {aboutData.description}
            </p>

            <div className="mt-8">
              <button
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-xl
                  bg-amber-200
                  text-blue-950
                  font-medium
                  transition-all
                  duration-300
                  hover:gap-4
                "
              >
                <a href="/about">More About Us</a>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
