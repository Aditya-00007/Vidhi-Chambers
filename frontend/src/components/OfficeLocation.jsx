import { MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react";
import { siteInfo } from "../data/siteInfo";

const OfficeLocation = () => {
  return (
    <section id="office-location" className="py-24 bg-[#FCFCFC]">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[4px] text-[#D4AF37] font-semibold">
            Visit Our Office
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#304669]">
            Office Location
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            We welcome clients by appointment for consultations and legal
            assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          {/* Office Information */}

          <div
            className="
          bg-white
          rounded-3xl
          p-8
          shadow-lg
        "
          >
            <div className="space-y-8">
              <div className="flex gap-4">
                <div
                  className="
                w-14 h-14
                rounded-2xl
                bg-[#D4AF37]/10
                flex
                items-center
                justify-center
                shrink-0
              "
                >
                  <MapPin className="text-[#D4AF37]" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#304669] text-lg">
                    Office Address
                  </h3>

                  <p className="mt-2 text-slate-600 leading-7">
                    {siteInfo.address}
                  </p>
                  <a
                    href="https://maps.google.com/?q=House No. 132 MDC Sector 6 Panchkula"
                    className="text-[#cbac00] inline-flex
                items-center
                gap-1 p-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions{" "}
                    <ArrowRight
                      size={19}
                      className=" mt-1
                  group-hover:translate-x-2
                  transition
                "
                    />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="
                w-14 h-14
                rounded-2xl
                bg-[#D4AF37]/10
                flex
                items-center
                justify-center
                shrink-0
              "
                >
                  <Clock className="text-[#D4AF37]" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#304669] text-lg">
                    Office Hours
                  </h3>

                  <p className="mt-2 text-slate-600">Monday – Saturday</p>

                  <p className="text-slate-600">9:00 AM – 6:00 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="
                w-14 h-14
                rounded-2xl
                bg-[#D4AF37]/10
                flex
                items-center
                justify-center
                shrink-0
              "
                >
                  <Phone className="text-[#D4AF37]" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#304669] text-lg">
                    Phone
                  </h3>

                  <a
                    className="mt-2 inline-block text-slate-600 hover:text-[#D4AF37]"
                    href={siteInfo.phoneHref}
                  >
                    {siteInfo.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div
                  className="
                w-14 h-14
                rounded-2xl
                bg-[#D4AF37]/10
                flex
                items-center
                justify-center
                shrink-0
              "
                >
                  <Mail className="text-[#D4AF37]" size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#304669] text-lg">
                    Email
                  </h3>

                  <a
                    className="mt-2 inline-block text-slate-600 hover:text-[#D4AF37]"
                    href={`mailto:${siteInfo.email}`}
                  >
                    {siteInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}

          <div
            className="
          overflow-hidden
          rounded-3xl
          shadow-lg
          border
          border-slate-200
        "
          >
            <iframe
              title="Vidhi Chambers Location"
              src="https://maps.google.com/maps?q=House%20No.%20132%20MDC%20Sector%206%20Panchkula&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="min-h-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;
