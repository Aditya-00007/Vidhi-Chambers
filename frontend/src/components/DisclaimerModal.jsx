import { useEffect, useState } from "react";
import { ShieldAlert } from "lucide-react";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(
    () => !localStorage.getItem("vidhi-disclaimer-accepted"),
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleAccept = () => {
    localStorage.setItem("vidhi-disclaimer-accepted", "true");

    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleExit = () => {
    window.location.href = "https://google.com";
  };

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        bg-black/70 backdrop-blur-sm
        flex items-center justify-center
        p-4
      "
    >
      <div
        className="
          bg-white
          w-full
          max-w-4xl
          rounded-3xl
          shadow-2xl
          overflow-hidden
        "
      >
        {/* Header */}

        <div
          className="
            text-black  
            px-8 py-6
            flex items-center gap-4
          "
        >
          <div
            className="
            text-black
              w-14 h-14
              rounded-2xl
              flex items-center justify-center
            "
          >
            <ShieldAlert size={28} className="text-[#D4AF37]" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-black">Disclaimer</h2>

            <p className="text-slate-800 text-sm mt-1">
              Important Notice Before Proceeding
            </p>
          </div>
        </div>

        {/* Content */}

        <div className="p-2 md:p-4">
          <div className="space-y-4 text-slate-600 leading-8">
            <p>
              Lawyers and law offices are not allowed to solicit clients or
              advertise, according to the{" "}
              <strong>Bar Council of India Guidelines.</strong>
            </p>

            <div className="border-l-4 border-[#D4AF37] bg-[#FCFAF5] px-5 py-5 rounded-r-lg">
              <p className="text-slate-700 leading-8">
                By clicking <strong>"I Agree"</strong>, you acknowledge and
                confirm that:
              </p>

              <ul className="mt-4 list-disc pl-6 space-y-3 marker:text-[#D4AF37]">
                <li>
                  You are independently looking for information about{" "}
                  <strong>Vidhi Chambers (VC)</strong>.
                </li>

                <li>
                  No advertisements, personal communications, solicitations,
                  invitations, or other forms of inducement of any kind have
                  been made by or on behalf of{" "}
                  <strong>Vidhi Chambers (VC)</strong> or any of its members to
                  solicit work through this website.
                </li>
              </ul>
            </div>
          </div>

          {/* Buttons */}

          <div className="mt-6 flex flex-col sm:flex-row justify-end gap-4">
            <button
              onClick={handleExit}
              className="px-6 py-3 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 transition cursor-pointer"
            >
              Exit Website
            </button>

            <button
              onClick={handleAccept}
              className="px-8 py-3 rounded-xl bg-[#D4AF37] text-[#0F172A] font-semibold hover:brightness-95 transition cursor-pointer"
            >
              I Agree
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
