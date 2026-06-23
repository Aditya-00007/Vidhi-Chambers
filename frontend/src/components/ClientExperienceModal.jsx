import { X, Quote, Star, ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

const ClientExperienceModal = ({ experience, onClose }) => {
  if (!experience) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/60 backdrop-blur-sm
        p-4
      "
      onClick={onClose}
    >
      <div
        className="
          bg-white
          rounded-3xl
          w-full
          max-w-4xl
          max-h-[90vh]
          overflow-y-auto
          shadow-2xl
          relative
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}

        <button
          onClick={onClose}
          className="
            absolute
            top-5
            right-5
            z-10
            p-2
            rounded-full
            bg-slate-100
            hover:bg-slate-200
          "
        >
          <X size={20} />
        </button>

        <div className="p-8 md:p-10">
          {/* Category */}

          <span
            className="
              inline-block
              px-4 py-2
              rounded-full
              bg-[#D4AF37]/10
              text-[#D4AF37]
              text-sm
              font-medium
            "
          >
            {experience.category}
          </span>

          {/* Title */}

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              text-[#304669]
            "
          >
            {experience.title}
          </h2>

          <div
            className="
              w-24 h-1
              bg-[#D4AF37]
              rounded-full
              mt-4
            "
          />

          {/* Overview */}

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-[#304669]">Overview</h3>

            <p className="mt-4 text-slate-600 leading-8">
              {experience.overview}
            </p>
          </div>

          {/* Challenge */}

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-[#304669]">Challenge</h3>

            <p className="mt-4 text-slate-600 leading-8">
              {experience.challenge}
            </p>
          </div>

          {/* Approach */}

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-[#304669]">
              How We Assisted
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              {experience.approach}
            </p>
          </div>

          {/* Testimonial */}

          <div
            className="
              mt-12
              bg-[#FAF9F6]
              rounded-3xl
              p-8
            "
          >
            <Quote size={32} className="text-[#D4AF37]" />

            <div className="flex gap-1 mt-4">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={18} fill="#D4AF37" color="#D4AF37" />
              ))}
            </div>

            <p
              className="
                mt-5
                text-lg
                italic
                text-slate-700
                leading-8
              "
            >
              "{experience.testimonial?.text}"
            </p>

            <p
              className="
                mt-4
                font-medium
                text-[#304669]
              "
            >
              {experience.testimonial?.client}
            </p>
          </div>

          {/* Outcome */}

          <div
            className="
              mt-10
              p-6
              rounded-2xl
              bg-green-50
              border-l-4
              border-green-500
            "
          >
            <h3 className="font-semibold text-[#304669]">Outcome</h3>

            <p className="mt-3 text-slate-600 leading-8">
              {experience.outcome}
            </p>
          </div>

          {/* CTA */}

          <div className="mt-12">
            <div
              className="
                bg-[#304669]
                rounded-3xl
                p-8
                text-center
              "
            >
              <h3
                className="
                  text-2xl
                  font-bold
                  text-white
                "
              >
                Facing A Similar Legal Matter?
              </h3>

              <p
                className="
                  mt-4
                  text-slate-300
                  max-w-2xl
                  mx-auto
                "
              >
                Speak with our legal professionals to understand your options
                and receive guidance tailored to your situation.
              </p>

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-6
                  bg-[#D4AF37]
                  text-[#0F172A]
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                "
              >
                Contact Firm
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientExperienceModal;
