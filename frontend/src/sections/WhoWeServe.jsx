import {
  User,
  Building2,
  Users,
  Landmark,
  Globe,
  Briefcase,
} from "lucide-react";

const clientTypes = [
  {
    icon: User,
    title: "Individuals",
    description:
      "Legal guidance and representation for personal legal matters and disputes.",
  },
  {
    icon: Users,
    title: "Families",
    description:
      "Support in matrimonial, inheritance, guardianship, and family-related matters.",
  },
  {
    icon: Briefcase,
    title: "Business Owners",
    description:
      "Practical legal solutions for entrepreneurs, startups, and growing enterprises.",
  },
  {
    icon: Building2,
    title: "Corporates",
    description:
      "Comprehensive legal advisory and compliance support for businesses and organizations.",
  },
  {
    icon: Globe,
    title: "NRI Clients",
    description:
      "Assistance with property, documentation, family matters, and cross-border legal concerns.",
  },
  {
    icon: Landmark,
    title: "Institutions",
    description:
      "Professional legal support for educational, commercial, and other institutions.",
  },
];

const WhoWeServe = () => {
  return (
    <section className="py-24 bg-[#FCFCFC]">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Who We Serve
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#304669]">
            Supporting Diverse
            <span className="block">Client Needs</span>
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Our experience spans a wide range of legal matters, allowing us to
            provide strategic legal guidance to individuals, families,
            businesses, institutions, and clients across different sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {clientTypes.map((client) => {
            const Icon = client.icon;

            return (
              <div
                key={client.title}
                className="
              bg-[#FAF9F6]
              rounded-3xl
              p-8
              border
              border-[#D4AF37]/10
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
              duration-300
            "
              >
                <div
                  className="
                w-14
                h-14
                rounded-2xl
                bg-[#D4AF37]/10
                flex
                items-center
                justify-center
              "
                >
                  <Icon size={26} className="text-[#D4AF37]" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-[#304669]">
                  {client.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {client.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
