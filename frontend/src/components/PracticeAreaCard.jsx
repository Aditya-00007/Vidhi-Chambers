import { ArrowRight } from "lucide-react";

const PracticeAreaCard = ({ area, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-3xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-(--accent)"
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
        <h3 className="text-xl font-semibold mb-4">{area.title}</h3>

        <div className="inline-flex items-center gap-2 font-medium text-(--accent)">
          <span>Learn More</span>

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaCard;
