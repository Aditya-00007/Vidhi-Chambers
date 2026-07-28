import { useState } from "react";
import TeamCard from "../components/TeamCard";

import TeamMemberModal from "../components/TeamMemberModal";
import teamMembers from "../data/teamMembers";

const TeamSection = () => {
  const [active, setActive] = useState("All");
  const [selectedMember, setSelectedMember] = useState(null);

  const categories = ["All"];

  const filteredMembers =
    active === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.category === active);

  return (
    <section id="team-grid" className="py-24 bg-[#FCFCFC]">
      {" "}
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Our Team
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#304669]">
            Meet Our Legal Professionals
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Our advocates and consultants bring together diverse experience and
            legal expertise to provide trusted representation and strategic
            guidance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16 mt-16 mx-18">
          {filteredMembers.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              onClick={() => setSelectedMember(member)}
            />
          ))}
        </div>
      </div>
      {/* Modal */}
      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
};

export default TeamSection;
