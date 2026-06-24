import { ArrowDown } from "lucide-react";

const CSRHero = () => {
  const scrollToContent = () => {
    document
      .getElementById("csr-commitment")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-white py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          {/* Label */}
          <span
            className="
              uppercase
              tracking-[6px]
              text-[#B89B5E]
              text-sm
              font-medium
            "
          >
            Corporate Social Responsibility
          </span>

          {/* Heading */}
          <h1
            className="
              mt-6
              font-cormorant
              text-5xl
              md:text-6xl
              font-semibold
              text-[#1F3657]
              leading-tight
            "
          >
            Giving Back To Society,
            <span className="block">Creating Meaningful Impact</span>
          </h1>

          {/* Divider */}
          <div
            className="
              w-24
              h-0.5
              bg-[#B89B5E]
              mx-auto
              mt-8
            "
          />

          {/* Description */}
          <p
            className="
              max-w-5xl
              mx-auto
              mt-10
              text-lg
              leading-9
              text-slate-600
            "
          >
            At Vidhi Chambers, we believe legal professionals have a
            responsibility beyond the courtroom. Through various community
            welfare and social outreach initiatives, we strive to contribute
            positively towards education, healthcare, awareness, and the overall
            development of society.
          </p>

          {/* CTA */}
          <button
            onClick={scrollToContent}
            className="
              mt-12
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              border
              border-[#1F3657]
              text-[#1F3657]
              font-medium
              hover:bg-[#1F3657]
              hover:text-white
              transition-all
              duration-300
            "
          >
            Learn More
            <ArrowDown size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CSRHero;
