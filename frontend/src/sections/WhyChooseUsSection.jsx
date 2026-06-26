import WhyChooseUsCard from "../components/WhyChooseUsCard";
import cf from "../assets/client.png";
import trst from "../assets/trust.png";
import tm from "../assets/team.png";
import uni from "../assets/university.png";

const WhyChooseUsSection = () => {
  const whyChooseUsData = [
    {
      id: 1,
      title: "Client-First Legal Practice",
      description:
        "We're driven by a deep commitment to securing the best outcomes for our clients.",
      image: cf,
    },
    {
      id: 2,
      title: "Decades of Trusted Advocacy",
      description:
        "A legacy of excellence built through strategic representation and legal expertise.",
      image: trst,
    },
    {
      id: 3,
      title: "Trusted by Leading Institutions",
      description:
        "Providing legal counsel and representation across diverse sectors and organizations.",
      image: uni,
    },
    {
      id: 4,
      title: "Unmatched Legal Team",
      description:
        "Experienced professionals working collaboratively to deliver effective legal solutions.",
      image: tm,
    },
  ];

  const trustBadges = [
    "Client Focused",
    "Research Driven",
    "Strategic Advocacy",
    "Ethical Practice",
    "Trusted Representation",
    "Multi-Practice Expertise",
  ];

  return (
    <section className="py-24">
      <div className="max-w-350 mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-(--accent) uppercase tracking-[3px] font-medium">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Why Choose Vidhi Chambers?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {whyChooseUsData.map((item) => (
            <WhyChooseUsCard key={item.id} item={item} />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="
                px-4
                py-2
                rounded-full
                border
                border-gray-200
                bg-blue-300
                text-sm
                font-medium
                text-amber-50
              "
            >
              ✓ {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
