import { ArrowRight } from "lucide-react";

const PracticeAreaCard = ({ area, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group h-full w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-xl"
    >
      {/* Image */}
      <div className="flex items-center justify-center h-28 bg-gray-50">
        <img
          src={area.image}
          alt={area.title}
          className="h-28 w-28 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="mb-4 text-xl font-semibold text-[#304669]">{area.title}</h3>

        <div className="inline-flex items-center gap-2 font-medium text-[#B08B18]">
          <span>Learn More</span>

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </button>
  );
};

export default PracticeAreaCard;
