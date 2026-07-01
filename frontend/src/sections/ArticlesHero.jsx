const ArticlesHero = () => {
  return (
    <section
      id="articles"
      className="relative overflow-hidden bg-[#FCFCFC] py-20 md:py-24 lg:py-28"
    >
      {/* Background Element */}
      <div className="absolute -right-24 top-0 text-[25rem] text-[#304669]/5 font-bold">
        📖
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <p className="mb-4 text-sm tracking-[5px] uppercase text-[#D4AF37] font-semibold">
            Articles & Insights
          </p>

          {/* Heading */}
          <h1 className="mb-6 font-cormorant text-4xl font-semibold leading-tight text-[#304669] sm:text-5xl md:text-7xl">
            Legal Knowledge
            <span className="block text-[#D4AF37]">
              & Professional Insights
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-4xl text-lg md:text-xl leading-9 text-slate-600">
            Explore articles, legal insights, and practical guidance from our
            professionals to better understand legal developments and important
            issues affecting individuals, businesses, and institutions.
          </p>

          {/* Secondary Description */}
          <p className="mx-auto mt-8 max-w-4xl text-base md:text-lg leading-8 text-slate-500">
            Our articles are written to simplify legal concepts, share
            professional perspectives, and keep readers informed about emerging
            legal trends, regulatory developments, and best practices across
            various areas of law.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#articles-grid"
              className="rounded-xl bg-[#D4AF37] px-8 py-4 font-semibold text-[#0F172A] transition hover:brightness-95"
            >
              Explore Articles
            </a>

            <a
              href="/contact#contact-form"
              className="rounded-xl border-2 border-[#304669] px-8 py-4 font-semibold text-[#304669] transition hover:bg-[#304669] hover:text-white"
            >
              Contact Our Team
            </a>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="rounded-2xl border-t-4 border-[#D4AF37] bg-white p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-[#304669]">Legal</h3>
            <p className="mt-2 text-slate-600">Insights</p>
          </div>

          <div className="rounded-2xl border-t-4 border-[#D4AF37] bg-white p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-[#304669]">Case</h3>
            <p className="mt-2 text-slate-600">Analysis</p>
          </div>

          <div className="rounded-2xl border-t-4 border-[#D4AF37] bg-white p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-[#304669]">Legal</h3>
            <p className="mt-2 text-slate-600">Updates</p>
          </div>

          <div className="rounded-2xl border-t-4 border-[#D4AF37] bg-white p-6 text-center shadow-lg">
            <h3 className="text-4xl font-bold text-[#304669]">Expert</h3>
            <p className="mt-2 text-slate-600">Perspectives</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticlesHero;
