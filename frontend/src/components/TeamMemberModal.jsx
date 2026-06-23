import { X, Mail, Briefcase, GraduationCap } from "lucide-react";

const TeamMemberModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}{" "}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition"
        >
          {" "}
          <X size={20} />{" "}
        </button>
        <div className="grid lg:grid-cols-2">
          {/* Left Image */}
          <div className="bg-[#FAF9F6]">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover min-h-[450px]"
            />
          </div>

          {/* Right Content */}
          <div className="p-8 lg:p-10">
            <span className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium">
              {member.category}
            </span>

            <h2 className="mt-5 text-4xl font-bold text-[#304669]">
              {member.name}
            </h2>

            <p className="text-lg text-slate-500 mt-2">{member.designation}</p>

            {/* Experience */}
            <div className="mt-8 flex items-center gap-3">
              <Briefcase size={18} className="text-[#D4AF37]" />

              <span className="font-medium text-[#304669]">
                {member.experience}
              </span>
            </div>

            {/* Practice Areas */}
            <div className="mt-8">
              <h3 className="font-semibold text-[#304669] text-lg">
                Practice Areas
              </h3>

              <div className="flex flex-wrap gap-3 mt-4">
                {member.expertise?.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-[#FAF9F6] text-[#304669] text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            {member.education && (
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap size={18} className="text-[#D4AF37]" />

                  <h3 className="font-semibold text-[#304669] text-lg">
                    Education
                  </h3>
                </div>

                <p className="text-slate-600">{member.education}</p>
              </div>
            )}

            {/* Biography */}
            <div className="mt-8">
              <h3 className="font-semibold text-[#304669] text-lg">
                Professional Profile
              </h3>

              <p className="mt-3 text-slate-600 leading-8">{member.bio}</p>
            </div>

            {/* Contact */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${member.email}`}
                className="inline-flex items-center gap-2 bg-[#304669] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#24364f] transition"
              >
                <Mail size={18} />
                Email
              </a>

              <button
                onClick={onClose}
                className="border border-[#304669] text-[#304669] px-6 py-3 rounded-xl font-medium hover:bg-[#304669] hover:text-white transition"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;
