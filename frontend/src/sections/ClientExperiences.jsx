import { useState } from "react";
import ClientExperienceCard from "../components/ClientExperienceCard";
import ClientExperienceModal from "../components/ClientExperienceModal";
import clientExpeiances from "../data/clientExperiences";

const ClientExperiences = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <section id="success-stories" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Client Experiences
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#304669]">
            Matters We've Helped Resolve
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Over the years, we have assisted clients across a wide range of
            legal matters, delivering practical guidance and strategic legal
            representation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {clientExpeiances.map((item) => (
            <ClientExperienceCard
              key={item.id}
              experience={item}
              onClick={() => setSelectedCase(item)}
            />
          ))}
        </div>
      </div>

      {selectedCase && (
        <ClientExperienceModal
          experience={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </section>
  );
};

export default ClientExperiences;
