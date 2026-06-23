import { X, Scale, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PracticeAreaModal = ({ area, onClose }) => {
  if (!area) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="
bg-white
rounded-3xl
overflow-hidden
w-full
max-w-6xl
max-h-[90vh]
overflow-y-auto
shadow-2xl
"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}{" "}
        <button
          onClick={onClose}
          className="
         absolute
         top-5
         right-5
         z-20
         bg-white
         rounded-full
         p-2
         shadow-md
       "
        >
          {" "}
          <X size={20} />{" "}
        </button>
        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <div className="relative bg-[#FAF9F6]">
            <img
              src={area.image}
              alt={area.title}
              className="
            w-full
            h-full
            object-cover
            min-h-[500px]
          "
            />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10">
            <span
              className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            bg-[#D4AF37]/10
            text-[#D4AF37]
            text-sm
            font-medium
          "
            >
              <Scale size={16} />
              {area.category}
            </span>

            <h2
              className="
            mt-5
            text-4xl
            font-bold
            text-[#304669]
          "
            >
              {area.title}
            </h2>

            <div
              className="
            w-20
            h-1
            bg-[#D4AF37]
            rounded-full
            mt-4
          "
            />

            {/* Overview */}
            <div className="mt-8">
              <h3
                className="
              text-xl
              font-semibold
              text-[#304669]
            "
              >
                Overview
              </h3>

              <p
                className="
              mt-4
              text-slate-600
              leading-8
            "
              >
                {area.overview}
              </p>
            </div>

            {/* Services */}
            <div className="mt-10">
              <h3
                className="
              text-xl
              font-semibold
              text-[#304669]
            "
              >
                Services Covered
              </h3>

              <div className="mt-5 space-y-3">
                {area.services?.map((service) => (
                  <div
                    key={service}
                    className="
                  flex
                  items-center
                  gap-3
                "
                  >
                    <div
                      className="
                    w-2
                    h-2
                    rounded-full
                    bg-[#D4AF37]
                  "
                    />

                    <span className="text-slate-600">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who We Assist */}
            <div className="mt-10">
              <h3
                className="
              text-xl
              font-semibold
              text-[#304669]
            "
              >
                Who We Assist
              </h3>

              <div
                className="
              flex
              flex-wrap
              gap-3
              mt-5
            "
              >
                {area.whoWeAssist?.map((item) => (
                  <span
                    key={item}
                    className="
                  px-4
                  py-2
                  rounded-full
                  bg-[#FAF9F6]
                  text-[#304669]
                  text-sm
                "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="
              inline-flex
              items-center
              gap-2
              bg-[#304669]
              text-white
              px-6
              py-3
              rounded-xl
              font-medium
              hover:bg-[#24364f]
              transition
            "
              >
                Contact Firm
                <ArrowRight size={18} />
              </Link>

              <button
                onClick={onClose}
                className="
              border
              border-[#304669]
              text-[#304669]
              px-6
              py-3
              rounded-xl
              font-medium
              hover:bg-[#304669]
              hover:text-white
              transition
            "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaModal;
