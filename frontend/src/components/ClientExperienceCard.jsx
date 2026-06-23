import { ArrowRight } from "lucide-react";

const ClientExperienceCard = ({ experience, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        bg-white
        rounded-3xl
        p-8
        shadow-lg
        cursor-pointer
        hover:-translate-y-2
        hover:shadow-xl
        transition-all
        duration-300
        group
      "
    >
      <span
        className="
          text-xs
          uppercase
          tracking-[2px]
          text-[#D4AF37]
          font-semibold
        "
      >
        {experience.category}
      </span>

      <h3
        className="
          mt-4
          text-2xl
          font-bold
          text-[#304669]
        "
      >
        {experience.title}
      </h3>

      <p
        className="
          mt-4
          text-slate-600
          leading-7
        "
      >
        {experience.shortDescription}
      </p>

      <div
        className="
          mt-6
          inline-flex
          items-center
          px-4
          py-2
          rounded-full
          bg-[#FAF9F6]
          text-[#304669]
          font-medium
        "
      >
        {experience.matterCount} Matters Assisted
      </div>

      <div
        className="
          mt-8
          flex
          items-center
          gap-2
          text-[#D4AF37]
          font-medium
        "
      >
        View Experience
        <ArrowRight
          size={16}
          className="
            group-hover:translate-x-1
            transition
          "
        />
      </div>
    </div>
  );
};

export default ClientExperienceCard;
