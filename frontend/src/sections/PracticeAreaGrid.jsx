import { useState } from "react";
import PracticeAreaCard from "../components/PracticeAreaCard";
import PracticeAreaModal from "./PracticeAreaModal";

const PracticeAreaGrid = ({ practiceAreas }) => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [search, setSearch] = useState("");

  const filteredAreas = practiceAreas.filter((area) =>
    area.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section id="practice-grid" className="py-24 bg-[#FAF9F6]">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Practice Areas
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#304669]">
            Explore Our Legal Expertise
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Browse our areas of practice and discover how our legal
            professionals can assist you.
          </p>
        </div>

        {/* Search */}

        <div className="max-w-2xl mx-auto mt-12">
          <input
            type="text"
            placeholder="Search legal issue, service, or practice area..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
          w-full
          px-6
          py-4
          rounded-2xl
          border
          border-slate-200
          focus:outline-none
          focus:border-[#D4AF37]
        "
          />
        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              onClick={() => setSelectedArea(area)}
              className="cursor-pointer"
            >
              <PracticeAreaCard area={area} />
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {selectedArea && (
        <PracticeAreaModal
          area={selectedArea}
          onClose={() => setSelectedArea(null)}
        />
      )}
    </section>
  );
};

export default PracticeAreaGrid;
