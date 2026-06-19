import CountUpModule from "react-countup";
import { useInView } from "react-intersection-observer";

const StatCard = ({ stat }) => {
  const CountUp = CountUpModule.default;
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="
        flex
        flex-col
        items-center
        justify-center
        p-8
        border
        border-white/10
        backdrop-blur-sm
      "
    >
      <h3
        className="
          text-5xl
          lg:text-6xl
          font-bold
          text-blue-950
          mb-4
        "
      >
        {inView && <CountUp start={0} end={stat.value} duration={2} />}
        {stat.suffix}
      </h3>

      <p
        className="
          text-lg
          font-semibold
          text-white
          text-center
        "
      >
        {stat.label}
      </p>
    </div>
  );
};

export default StatCard;
