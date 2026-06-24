import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need an appointment before visiting?",
    answer:
      "While walk-in visits may be accommodated based on availability, we recommend scheduling an appointment in advance to ensure dedicated consultation time with our legal team.",
  },
  {
    question: "How soon can I expect a response to my inquiry?",
    answer:
      "Our team strives to respond to inquiries as promptly as possible, typically within one business day.",
  },
  {
    question: "Can consultations be conducted online?",
    answer:
      "Yes. Depending on the nature of the matter, consultations may be conducted through phone calls or virtual meetings.",
  },
  {
    question: "What information should I provide in my inquiry?",
    answer:
      "Providing a brief description of your legal matter, relevant dates, and any specific concerns helps us understand your requirements and respond effectively.",
  },
  {
    question: "Do you handle matters outside Chandigarh and Panchkula?",
    answer:
      "Yes. Depending on the nature of the matter, we assist clients across various jurisdictions and coordinate with relevant legal professionals when required.",
  },
  {
    question: "Will my information remain confidential?",
    answer:
      "Absolutely. All communications and information shared with our firm are handled with the utmost confidentiality and professional discretion.",
  },
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FCFCFC]">
      {" "}
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#304669]">
            Common Questions
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Find answers to some of the most commonly asked questions about
            consultations, appointments, and legal assistance.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
            bg-[#FAF9F6]
            rounded-2xl
            border
            border-[#D4AF37]/10
            overflow-hidden
          "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="
              w-full
              px-6
              py-5
              flex
              items-center
              justify-between
              text-left
            "
              >
                <span
                  className="
                text-lg
                font-semibold
                text-[#304669]
              "
                >
                  {faq.question}
                </span>

                <ChevronDown
                  className={`
                text-[#D4AF37]
                transition-transform
                ${openIndex === index ? "rotate-180" : ""}
              `}
                />
              </button>

              <div
                className={`
              transition-all duration-300
              overflow-hidden
              ${openIndex === index ? "max-h-60" : "max-h-0"}
            `}
              >
                <p
                  className="
                px-6
                pb-6
                text-slate-600
                leading-8
              "
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
