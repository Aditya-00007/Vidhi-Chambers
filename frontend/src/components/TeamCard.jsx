import { ArrowRight } from "lucide-react";

const TeamCard = ({ member, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-lg
        cursor-pointer
        hover:-translate-y-2
        transition-all
        duration-300
        group
      "
    >
      {/* Photo */}

      <div className="h-55 overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="
            w-full
            h-full
            object-cover
            group-hover:scale-105
            transition-transform
            duration-500
          "
        />
      </div>

      {/* Content */}

      <div className="p-2">
        <h3 className="mt-0 text-xl font-bold text-[#304669]">{member.name}</h3>

        <p className="text-slate-700 mt-1">{member.designation}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {member.expertise.slice(0, 2).map((item) => (
            <span
              key={item}
              className="
                text-xs
                font-sans
                px-3
                py-1
                rounded-full
                bg-[#FAF9F6]
                text-[#182d4d]
              "
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 text-[#D4AF37] font-medium">
          View Profile
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
