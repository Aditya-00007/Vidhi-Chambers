import logo from "../assets/banner.jpeg";

const TeamIntroduction = () => {
  return (
    <section className="flex flex-col gap-10 bg-white py-16 md:py-20 lg:flex-row lg:items-center lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Our People
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#304669] leading-tight">
            The Professionals
            <span className="block">Behind Our Practice</span>
          </h2>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-8 rounded-full" />

          <p className="mt-8 text-lg text-slate-600 leading-9">
            At Vidhi Chambers, our strength lies in the collective expertise,
            dedication, and integrity of our legal professionals. Our team
            brings together experienced advocates, consultants, and advisors who
            are committed to delivering practical legal solutions and
            exceptional client service.
          </p>

          <p className="mt-6 text-lg text-slate-600 leading-9">
            With diverse experience across multiple practice areas, we work
            collaboratively to understand each client's unique challenges and
            provide strategic guidance tailored to their specific needs. Every
            matter entrusted to us is approached with professionalism,
            diligence, and a commitment to achieving meaningful results.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative mx-auto mt-12 lg:mt-0 px-6 sm:px-8 lg:mr-8 lg:px-0">
        <div className="relative w-fit mx-auto">
          {/* Gold Background Block */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#D4AF37]/20 rounded-3xl" />

          {/* Image */}
          <div className="relative z-10 overflow-hidden rounded-3xl border border-slate-200 bg-[#FAF9F6] shadow-md">
            <img
              src={logo}
              alt="Our Team"
              className="w-64 sm:w-80 md:w-96 lg:w-[420px] max-w-full aspect-[4/3] lg:aspect-auto object-cover"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 z-20 bg-[#D4AF37] text-[#0F172A] px-5 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-lg border border-[#D4AF37]/20">
            <div className="text-2xl sm:text-3xl font-bold">20+</div>
            <div className="text-xs sm:text-sm font-semibold">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntroduction;
