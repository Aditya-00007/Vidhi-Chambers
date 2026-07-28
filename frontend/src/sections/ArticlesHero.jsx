const ArticlesHero = () => {
  return (
    <section
      id="articles"
      className="relative overflow-hidden bg-[#FCFCFC] py-20 md:py-24 lg:py-28"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#304669]/5 rounded-full blur-3xl" />

      {/* Background Element */}
      <img
        src="/balence.svg"
        alt=""
        aria-hidden="true"
        className="
    absolute
    -right-24
    top-0
    w-100
    h-100
    opacity-5
    pointer-events-none
    select-none
    object-contain
    z-0
  "
      />

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
      </div>
    </section>
  );
};

export default ArticlesHero;
