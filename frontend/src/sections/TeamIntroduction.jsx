import logo from "../assets/logo.png";
const TeamIntroduction = () => {
  return (
    <section className="py-24 flex flex-row gap-3 bg-white">
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
      <div className="relative w-fit mx-auto mr-8">
        {/* Gold Background Block */}
        <div className="absolute top-6 left-4 w-full h-full bg-amber-200 rounded-3xl" />

        {/* Image */}
        <div className="relative z-10 overflow-hidden rounded-3xl border border-gray-200 bg-amber-200">
          <img
            src={logo}
            alt="Our Team"
            className="w-full max-w-md object-cover"
          />
        </div>

        {/* Experience Badge */}
        <div className="absolute -bottom-6 -left-6 z-20 bg-amber-200 text-blue-950 px-6 py-4 rounded-2xl shadow-lg">
          <div className="text-3xl font-bold">{15}</div>

          <div className="text-sm">Years Experience</div>
        </div>
      </div>
    </section>
  );
};

export default TeamIntroduction;
