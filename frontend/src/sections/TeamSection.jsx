import { useState } from "react";
import TeamCard from "../components/TeamCard";
import founderImg from "../assets/lawyer.webp";
import member2 from "../assets/lawyer.webp";
import TeamMemberModal from "../components/TeamMemberModal";

const TeamSection = () => {
  const [active, setActive] = useState("All");
  const [selectedMember, setSelectedMember] = useState(null);

  const categories = [
    "All",
    "Leadership",
    "Senior Advocates",
    "Associates",
    "Consultants",
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Adv. Naveen Bharadwaj",
      designation: "Founder & Managing Counsel",
      category: "Leadership",
      image: founderImg,
      experience: "15+ Years",
      education: "LL.B., LL.M.",
      expertise: ["Civil Litigation", "Corporate Advisory", "Arbitration"],
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      email: "[founder@vidhichambers.com](mailto:founder@vidhichambers.com)",
    },

    {
      id: 2,
      name: "Adv. Member Name",
      designation: "Senior Advocate",
      category: "Senior Advocates",
      image: member2,
      experience: "10+ Years",
      expertise: ["Family Law", "Property Matters"],
      education: "LL.B., LL.M.",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      email: "member@vidhichambers.com",
    },
    {
      id: 5,
      name: "Adv. Member Name",
      designation: "Senior Advocate",
      category: "Senior Advocates",
      image: member2,
      experience: "10+ Years",
      education: "LL.B., LL.M.",
      expertise: ["Family Law", "Property Matters"],
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      email: "member@vidhichambers.com",
    },
    {
      id: 3,
      name: "Adv. Member Name",
      designation: "Senior Advocate",
      category: "Senior Advocates",
      image: member2,
      experience: "10+ Years",
      education: "LL.B., LL.M.",
      expertise: ["Family Law", "Property Matters"],
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      email: "member@vidhichambers.com",
    },
    {
      id: 4,
      name: "Adv. Member Name",
      designation: "Senior Advocate",
      category: "Senior Advocates",
      education: "LL.B., LL.M.",
      image: member2,
      experience: "10+ Years",
      expertise: ["Family Law", "Property Matters"],
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      email: "member@vidhichambers.com",
    },
  ];

  const filteredMembers =
    active === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.category === active);

  return (
    <section id="team-grid" className="py-24 bg-[#FCFCFC]">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
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

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-14">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
            px-6 py-3 rounded-full text-sm font-medium transition-all

            ${
              active === item
                ? "bg-[#304669] text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:border-[#D4AF37]"
            }
          `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">
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
