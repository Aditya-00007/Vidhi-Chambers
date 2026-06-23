import { Users, Scale, Briefcase, ShieldCheck } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: "5000+",
    label: "Clients Assisted",
    description:
      "Individuals, families, businesses, and institutions served over the years.",
  },
  {
    icon: Scale,
    value: "1000+",
    label: "Matters Handled",
    description:
      "Experience across litigation, advisory, corporate, and dispute resolution matters.",
  },
  {
    icon: Briefcase,
    value: "15+",
    label: "Years of Experience",
    description:
      "Providing trusted legal counsel and professional representation since 2011.",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Commitment to Confidentiality",
    description:
      "Every client matter is handled with discretion, integrity, and professionalism.",
  },
];

const TrustMetrics = () => {
  return (
    <section className="py-24 bg-white">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Why Clients Trust Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#304669]">
            Built On Trust,
            <span className="block">Strengthened By Experience</span>
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Our commitment to professionalism, integrity, and client-focused
            advocacy has enabled us to build lasting relationships with clients
            across diverse legal matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {metrics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
              bg-[#FAF9F6]
              rounded-3xl
              p-8
              text-center
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
                w-16 h-16
                mx-auto
                rounded-2xl
                bg-[#D4AF37]/10
                flex items-center justify-center
              "
                >
                  <Icon size={30} className="text-[#D4AF37]" />
                </div>

                <h3
                  className="
                mt-6
                text-4xl
                font-bold
                text-[#304669]
              "
                >
                  {item.value}
                </h3>

                <h4
                  className="
                mt-3
                text-lg
                font-semibold
                text-[#304669]
              "
                >
                  {item.label}
                </h4>

                <p
                  className="
                mt-4
                text-slate-600
                leading-7
              "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
