const CoreValues = () => {
  const values = [
    {
      number: "01",
      title: "Integrity",
      description:
        "We uphold the highest ethical standards, ensuring honesty, fairness, and accountability in every matter we undertake.",
    },
    {
      number: "02",
      title: "Client-Centric Approach",
      description:
        "Every client receives personalized attention, practical guidance, and legal solutions tailored to their unique needs.",
    },
    {
      number: "03",
      title: "Excellence",
      description:
        "We pursue excellence through continuous learning, meticulous preparation, and unwavering commitment to quality.",
    },
    {
      number: "04",
      title: "Confidentiality",
      description:
        "Trust is built through discretion. We safeguard client information with the utmost professionalism and care.",
    },
  ];

  return (
    <section className="py-24 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Our Core Values
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#304669]">
            Principles That Define
            <span className="block">Our Practice</span>
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            At Vidhi Chambers, our values shape every client interaction, legal
            strategy, and professional commitment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div
              key={value.number}
              className="bg-white rounded-3xl p-8 shadow-lg border-l-4 border-[#D4AF37] hover:-translate-y-2 transition-all duration-300"
            >
              <span className="text-5xl font-bold text-[#D4AF37]/30">
                {value.number}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-[#304669]">
                {value.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-8">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
