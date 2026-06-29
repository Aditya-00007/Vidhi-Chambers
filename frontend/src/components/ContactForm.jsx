import { useState } from "react";
import courts from "../data/courts";
import { siteInfo } from "../data/siteInfo";

const ContactForm = ({ backgroundImage }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    courts: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      alert(data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        courts: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const sectionStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <section
      id="contact"
      style={sectionStyle}
      className={`
        relative overflow-hidden px-5 py-16 sm:px-6 md:py-20
        ${!backgroundImage ? " bg-[#FAF9F6]" : ""}
      `}
    >
      <div className="mx-auto grid w-full max-w-7xl items-start gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Left Content */}
        <div className="relative z-10 my-4 rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-sm sm:p-8">
          <p className="mb-5 text-sm font-bold uppercase tracking-[3px] text-[#D4AF37]">
            Contact Us
          </p>

          <h2 className="mb-6 py-3 text-3xl font-bold text-[#304669] sm:text-4xl md:text-5xl">
            Let's Discuss Your Legal Requirements
          </h2>

          <p className="text-black/80 text-lg leading-relaxed mb-8 py-2">
            Whether you need legal representation, strategic advice, or
            assistance with a specific matter, our team is ready to assist you.
          </p>

          <div className="space-y-4 text-[#000000]">
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
            </p>
            <p>
              <strong>Office:</strong> {siteInfo.address}
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg sm:p-7">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="w-full">
                <label className="block mb-1 text-[#0F172A] font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div className="w-full">
                <label className="block mb-1 text-[#0F172A] font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="w-full">
                <label className="block mb-1 text-[#0F172A] font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="w-full">
                <label className="block mb-1 text-[#0F172A] font-medium">
                  Court
                </label>

                <select
                  name="courts"
                  value={formData.courts}
                  onChange={handleChange}
                  className="
                  w-full
                  border
                  border-gray-300
                  rounded-lg
                  px-4
                  py-3
                  focus:outline-none
                  focus:border-[#D4AF37]
                "
                >
                  <option value="">Select Court</option>

                  {courts.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block mb-1 text-[#0F172A] font-medium">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#D4AF37] focus:outline-none"
                placeholder="Tell us about your legal matter..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
    w-full
    bg-[#0F172A]
    text-[#FAF9F6]
    py-3
    rounded-lg
    font-semibold
    transition
    cursor-pointer
    hover:bg-[#1E293B]
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
            >
              {loading ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
