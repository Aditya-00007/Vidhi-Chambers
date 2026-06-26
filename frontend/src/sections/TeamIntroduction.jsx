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

      <div className="relative mx-auto mt-4 w-fit px-6 lg:mr-8 lg:mt-0 lg:px-0">
        {/* Gold Background Block */}
        <div className="absolute top-6 left-4 w-full h-full bg-amber-200 rounded-3xl" />

        {/* Image */}
        <div className="relative z-10 overflow-hidden rounded-3xl border border-gray-200 bg-amber-200">
          <img
            src={logo}
            alt="Our Team"
            className="w-70 sm:w-85 md:w-95 lg:w-full max-w-md object-cover"
          />
        </div>

        {/* Experience Badge */}
        <div className="absolute bottom-4 left-4 sm:-bottom-6 sm:-left-6 z-20 bg-amber-200 text-blue-950 px-5 py-3 sm:px-6 sm:py-4 rounded-2xl shadow-lg">
          <div className="text-3xl font-bold">15</div>

          <div className="text-sm">Years Experience</div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntroduction;
