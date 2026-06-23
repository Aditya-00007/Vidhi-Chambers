import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 XXXXX XXXXX",
    description: "Speak directly with our team regarding your legal matter.",
    link: "tel:+91XXXXXXXXXX",
    linkText: "Call Now",
  },

  {
    icon: Mail,
    title: "Email Us",
    value: "[info@vidhichambers.com](mailto:info@vidhichambers.com)",
    description: "Send us your inquiry and we'll get back to you promptly.",
    link: "mailto:info@vidhichambers.com",
    linkText: "Send Email",
  },

  {
    icon: MapPin,
    title: "Visit Our Office",
    value: "Nashik, Maharashtra",
    description:
      "Schedule a consultation and meet with our legal professionals.",
    link: "#office-location",
    linkText: "View Location",
  },
];

const ContactInfoCards = () => {
  return (
    <section className="py-20 bg-white">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
              bg-[#FAF9F6]
              rounded-3xl
              p-8
              border
              border-[#D4AF37]/10
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
              duration-300
            "
              >
                {/* Icon */}

                <div
                  className="
                w-16 h-16
                rounded-2xl
                bg-[#D4AF37]/10
                flex
                items-center
                justify-center
              "
                >
                  <Icon size={30} className="text-[#D4AF37]" />
                </div>

                {/* Content */}

                <h3
                  className="
                mt-6
                text-2xl
                font-bold
                text-[#304669]
              "
                >
                  {item.title}
                </h3>

                <p
                  className="
                mt-3
                text-lg
                font-medium
                text-[#304669]
              "
                >
                  {item.value}
                </p>

                <p
                  className="
                mt-4
                text-slate-600
                leading-7
              "
                >
                  {item.description}
                </p>

                {/* Link */}

                <a
                  href={item.link}
                  className="
                mt-6
                inline-flex
                items-center
                gap-2
                text-[#D4AF37]
                font-medium
                group
              "
                >
                  {item.linkText}

                  <ArrowUpRight
                    size={18}
                    className="
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  transition
                "
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
