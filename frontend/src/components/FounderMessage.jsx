import founderImg from "../assets/logo.png";

const FounderMessage = () => {
  return (
    <section className="bg-[#FAF9F6] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Founder Image */}
          <div className="relative">
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#D4AF37]/20 rounded-3xl" />

            <img
              src={founderImg}
              alt="Founder"
              className="relative z-10 rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
              Founder Message
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#304669] mt-4 leading-tight">
              A Commitment To Justice,
              <span className="block">Integrity & Excellence</span>
            </h2>

            <div className="w-24 h-1 bg-[#D4AF37] mt-6 mb-8 rounded-full" />

            <p className="text-lg text-slate-600 leading-9 italic">
              "At Vidhi Chambers, we believe legal counsel is not merely about
              resolving disputes—it is about protecting rights, creating
              opportunities, and empowering clients to make informed decisions
              with confidence."
            </p>

            <p className="mt-8 text-slate-600 leading-8">
              Since our establishment in 2011, our mission has remained
              unwavering: to provide reliable legal representation grounded in
              trust, professionalism, and a deep commitment to achieving
              meaningful outcomes.
            </p>

            <p className="mt-6 text-slate-600 leading-8">
              Every matter entrusted to us is approached with diligence,
              strategic insight, and complete dedication. We value the
              confidence our clients place in us and strive to build lasting
              relationships through transparency, responsiveness, and
              exceptional legal service.
            </p>

            <div className="mt-10">
              <h4 className="text-2xl font-bold text-[#304669]">
                Adv. Naveen S. Bhardwaj
              </h4>

              <p className="text-[#D4AF37] font-medium">
                Founder & Managing Counsel
              </p>

              <p className="text-slate-500 mt-2">
                15+ Years of Legal Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
