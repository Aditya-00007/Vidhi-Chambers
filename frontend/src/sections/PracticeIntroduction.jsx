import { Scale, Briefcase, Building2 } from "lucide-react";

const PracticeIntroduction = () => {
  return (
    <section className="py-24 bg-[#FCFCFC]">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
              Legal Services
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#304669] leading-tight">
              Comprehensive Legal
              <span className="block">Expertise Under One Roof</span>
            </h2>

            <div className="w-24 h-1 bg-[#D4AF37] rounded-full mt-8" />

            <p className="mt-8 text-slate-600 leading-9 text-lg">
              Legal matters often require specialized expertise. Whether you are
              facing a dispute, seeking legal advice, protecting your business
              interests, or planning for future opportunities, our team provides
              practical guidance tailored to your circumstances.
            </p>

            <p className="mt-6 text-slate-600 leading-9 text-lg">
              Our practice areas cover a wide range of legal disciplines,
              enabling us to serve individuals, families, businesses, and
              institutions with confidence and professionalism.
            </p>
          </div>

          {/* Right Highlights */}
          <div className="space-y-6">
            <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-[#D4AF37]/10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center">
                  <Scale size={24} className="text-[#D4AF37]" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#304669]">
                    Litigation & Dispute Resolution
                  </h3>

                  <p className="mt-2 text-slate-600 leading-7">
                    Representation and strategic guidance for disputes, claims,
                    and legal proceedings.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-[#D4AF37]/10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center">
                  <Building2 size={24} className="text-[#D4AF37]" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#304669]">
                    Corporate & Advisory Services
                  </h3>

                  <p className="mt-2 text-slate-600 leading-7">
                    Supporting businesses with compliance, transactions,
                    contracts, and legal strategy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-[#D4AF37]/10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center">
                  <Briefcase size={24} className="text-[#D4AF37]" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#304669]">
                    Personalized Legal Solutions
                  </h3>

                  <p className="mt-2 text-slate-600 leading-7">
                    Every legal matter is unique. Our approach focuses on
                    practical solutions aligned with each client's objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeIntroduction;
