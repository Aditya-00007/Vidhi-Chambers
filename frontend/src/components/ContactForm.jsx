import React, { useState } from "react";
import courts from "../data/courts";

const ContactForm = ({ backgroundImage }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Add API call here

    alert(
      "Thank you for contacting Vidhi Chambers. We will get back to you shortly.",
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      courts: "",
      message: "",
    });
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
        py-13 px-6 relative overflow-hidden
        ${!backgroundImage ? " bg-[#f6f6f5ed]" : ""}
      `}
    >
      <div className="w-full  lg:px-16 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="bg-white/50 backdrop-blur-xs  rounded-3xl p-8 shadow-lg my-4 inset-0 relative z-10 py-6 tracking-[2.4px]">
          <p className="text-blue-900 uppercase  text-sm font-bold  mb-8">
            Contact Us
          </p>

          <h2 className="text-4xl text-blue-950 md:text-5xl font-bold mb-6">
            Let's Discuss Your Legal Requirements
          </h2>

          <p className="text-black/80 text-lg leading-relaxed mb-8">
            Whether you need legal representation, strategic advice, or
            assistance with a specific matter, our team is ready to assist you.
          </p>

          <div className="space-y-4 text-[#000000]">
            <p>
              <strong>Email:</strong>Vidhichambers@yahoo.co.in
            </p>
            <p>
              <strong>Office:</strong> House No. 132, MDC Sector 6, Panchkula -
              134108, Near Community Center, Chandigarh
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-row justify-center gap-4">
              <div>
                <label className="block mb-1 text-[#0F172A] font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:border-[#D4AF37]"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-1 text-[#0F172A] font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:border-[#D4AF37]"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-row justify-center gap-4">
              <div className="w-1/2">
                <label className="block mb-1 text-[#0F172A] font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:border-[#D4AF37]"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="w-1/2">
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
                  py-1
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
                className="w-full border border-gray-300 rounded-lg px-4 py-1 focus:outline-none focus:border-[#D4AF37]"
                placeholder="Tell us about your legal matter..."
              />
            </div>

            <button
              type="submit"
              className="
                cursor-pointer
                w-full
                bg-[#0F172A]
                text-[#FAF9F6]
                py-1
                rounded-lg
                font-semibold
                hover:bg-[#1E293B]
                transition
              "
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
