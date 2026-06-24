import {
  GraduationCap,
  HeartPulse,
  Scale,
  Users,
  Leaf,
  HandHeart,
} from "lucide-react";

const impactAreas = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Supporting initiatives that promote access to education, awareness, and learning opportunities.",
  },

  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Encouraging programmes focused on health awareness, wellness, and community healthcare support.",
  },

  {
    icon: Scale,
    title: "Human Rights",
    description:
      "Promoting awareness and understanding of legal rights, equality, and social justice.",
  },

  {
    icon: Users,
    title: "Women Empowerment",
    description:
      "Supporting efforts that encourage inclusion, opportunity, and empowerment for women.",
  },

  {
    icon: Leaf,
    title: "Environment",
    description:
      "Contributing to initiatives that encourage sustainability and environmental awareness.",
  },

  {
    icon: HandHeart,
    title: "Community Welfare",
    description:
      "Engaging in outreach programmes that support underprivileged communities and social development.",
  },
];

const CSRImpactAreas = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span
            className="
              uppercase
              tracking-[5px]
              text-[#B89B5E]
              text-sm
              font-medium
            "
          >
            Areas Of Impact
          </span>

          <h2
            className="
              mt-5
              font-cormorant
              text-5xl
              font-semibold
              text-[#1F3657]
            "
          >
            Making A Difference
          </h2>

          <p
            className="
              mt-6
              text-slate-600
              leading-8
            "
          >
            Our social responsibility initiatives focus on creating meaningful
            impact through education, healthcare, awareness, empowerment, and
            community development.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {impactAreas.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className="
                  bg-[#FCFCFC]
                  border
                  border-slate-200
                  rounded-3xl
                  p-8
                  hover:shadow-lg
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-[#B89B5E]/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon size={28} className="text-[#B89B5E]" />
                </div>

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-semibold
                    text-[#1F3657]
                  "
                >
                  {area.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-slate-600
                    leading-7
                  "
                >
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CSRImpactAreas;
