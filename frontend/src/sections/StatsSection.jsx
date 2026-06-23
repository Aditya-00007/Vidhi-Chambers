import StatCard from "../components/StatCard";
import bgImg from "../assets/OIP-M.png";

const StatsSection = () => {
  const statsData = [
    {
      id: 1,
      value: 3,
      suffix: "",
      label: "Offices",
    },
    {
      id: 2,
      value: 4500,
      suffix: "+",
      label: "Clients Served",
    },
    {
      id: 3,
      value: 17,
      suffix: "+",
      label: "Years in Business",
    },
    {
      id: 4,
      value: 12,
      suffix: "",
      label: "Retainerships",
    },
  ];
  return (
    <section className="py-24 ">
      <div className="max-w-350 mx-auto px-6">
        <div className="grid lg:grid-cols-[40%_60%] gap-16 items-center">
          {/* Left Content */}
          <div>
            <span
              className="
                uppercase
                tracking-[3px]
                text-cyan-800
                font-medium
              "
            >
              Our Legacy
            </span>

            <h2
              className="
                text-4xl
                lg:text-5xl
                font-bold
                text-black
                mt-4
                mb-6
              "
            >
              Experience Makes Difference
            </h2>

            <p
              className="
                text-blue-950
                leading-8
                text-lg
              "
            >
              For years, Vidhi Chambers has provided trusted legal counsel
              across diverse practice areas, serving individuals, businesses,
              and institutions with dedication, integrity, and strategic legal
              expertise.
            </p>
          </div>

          {/* Right Side */}
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
            "
          >
            {/* Background Image */}
            <img
              src={bgImg}
              alt="Vidhi Chambers"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
              "
            />

            {/* Dark Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-white/25
              "
            />

            {/* Stats Grid */}
            <div
              className="
                relative
                z-10
                grid
                grid-cols-2
              "
            >
              {statsData.map((stat) => (
                <StatCard key={stat.id} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
