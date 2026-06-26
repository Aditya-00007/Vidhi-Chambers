const AboutusHero = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FCFCFC] py-20 md:py-24 lg:py-28"
    >
      <div className="absolute -right-24 top-0 text-[25rem] text-[#304669]/5 font-bold">
        ⚖
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4 text-sm tracking-[5px] uppercase text-[#D4AF37] font-semibold">
            About Vidhi Chambers
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#304669] sm:text-5xl md:text-7xl">
            Trusted Legal Counsel
            <span className="block text-[#D4AF37]">Since 2011</span>
          </h1>

          <p className="mx-auto max-w-4xl text-lg md:text-xl leading-9 text-slate-600">
            Delivering strategic legal solutions with integrity, expertise, and
            unwavering commitment to justice.
          </p>

          <p className="mx-auto mt-8 max-w-4xl text-base md:text-lg leading-8 text-slate-500">
            Vidhi Chambers is a distinguished law firm providing comprehensive
            legal representation and advisory services to individuals,
            businesses, and institutions. With over 15 years of experience, our
            team combines legal expertise, strategic thinking, and
            client-focused advocacy to achieve effective outcomes across a broad
            spectrum of legal matters.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <a
              href="/contact#contact"
              className="rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#0F172A] transition hover:brightness-95"
            >
              Schedule Consultation
            </a>

            <a
              href="/practice-areas"
              className="rounded-xl border-2 border-[#304669] px-8 py-4 font-semibold text-[#304669] transition hover:bg-[#304669] hover:text-white"
            >
              Explore Practice Areas
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-[#D4AF37] text-center">
            <h3 className="text-4xl font-bold text-[#304669]">15+</h3>
            <p className="mt-2 text-slate-600">Years Experience</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-[#D4AF37] text-center">
            <h3 className="text-4xl font-bold text-[#304669]">20+</h3>
            <p className="mt-2 text-slate-600">Legal Professionals</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-[#D4AF37] text-center">
            <h3 className="text-4xl font-bold text-[#304669]">1000+</h3>
            <p className="mt-2 text-slate-600">Cases Handled</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-[#D4AF37] text-center">
            <h3 className="text-4xl font-bold text-[#304669]">500+</h3>
            <p className="mt-2 text-slate-600">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutusHero;
