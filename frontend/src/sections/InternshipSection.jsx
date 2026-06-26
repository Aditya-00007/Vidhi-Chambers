import { BriefcaseBusiness } from "lucide-react";

const InternshipSection = () => {
  return (
    <section id="internship" className="py-20 bg-[#FCFCFC]">
      <div className="max-w-5xl mx-auto px-6">
        <div
          className="
            bg-white
            border
            border-slate-200
            rounded-3xl
            p-10 md:p-14
          "
        >
          <div className="text-center">
            <div
              className="
                w-16 h-16
                mx-auto
                rounded-2xl
                bg-[#B89B5E]/10
                flex
                items-center
                justify-center
              "
            >
              <BriefcaseBusiness size={30} className="text-[#B89B5E]" />
            </div>

            <span
              className="
                block
                mt-6
                uppercase
                tracking-[5px]
                text-[#B89B5E]
                text-sm
                font-medium
              "
            >
              Internship Opportunities
            </span>

            <h2
              className="
                mt-4
                font-cormorant
                text-5xl
                font-semibold
                text-[#1F3657]
              "
            >
              Begin Your Legal Journey
            </h2>

            <p
              className="
                mt-6
                max-w-5xl
                mx-auto
                text-slate-600
                leading-8
              "
            >
              We offer internships to students studying at law schools to get
              first-hand experience of what it is like to work in a Law Firm and
              what it is like to be a Corporate Lawyer. As an intern, you will
              find yourself assigned as a team member on transactions and
              involved in practice area initiatives. You will be expected to
              work hard and will be relied upon as a valuable member of the
              team. Many of our interns have progressed to become trainees and
              associates/assistants of our firm. We try to expose you as much as
              possible to the working practices of the firm during your
              internship. We aim to ensure you have a high-level of individual
              attention and good quality work. There are a limited number of
              internship positions available at Vidhi Chambers. Our preference
              is for students who are in the final year of their LLB or LLM (or
              who are finishing their penultimate year of study).
            </p>

            <p
              className="
                pt-5
                max-w-4xl
                text-[#5a77a3]
                leading-8
              "
            >
              HOW TO APPLY FOR INTERNSHIP?
            </p>

            <p
              className="
                mt-1
              text-[#12305a]
                font-normal
              "
            >
              Email your cv at{" "}
              <i>
                <b>Vidhichambers@yahoo.co.in</b>
              </i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
