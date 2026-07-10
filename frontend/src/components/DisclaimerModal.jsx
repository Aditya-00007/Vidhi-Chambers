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
          max-h-[90vh] md:max-h-[85vh]
          flex flex-col
        "
      >
        {/* Header */}

        <div
          className="
            text-black  
            px-6 py-5 md:px-8 md:py-6
            flex items-center gap-4
            border-b border-slate-100
          "
        >
          <div
            className="
            text-black
              w-12 h-12 md:w-14 md:h-14
              rounded-2xl
              flex items-center justify-center
            "
          >
            <ShieldAlert size={28} className="text-[#D4AF37]" />
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-black font-sans">Disclaimer</h2>

            <p className="text-slate-500 text-xs md:text-sm mt-0.5">
              Important Notice Before Proceeding
            </p>
          </div>
        </div>

        {/* Content */}

        <div className="px-6 pb-6 md:px-8 md:pb-8 overflow-y-auto flex-1">
          <div className="space-y-4 text-slate-600 leading-normal md:leading-8 text-sm md:text-base pt-6">
            <p>
              Lawyers and law offices are not allowed to solicit clients or
              advertise, according to the{" "}
              <strong>Bar Council of India Guidelines.</strong>
            </p>

            <div className="border-l-4 border-[#D4AF37] bg-[#FCFAF5] px-4 py-4 md:px-5 md:py-5 rounded-r-lg">
              <p className="text-slate-700 font-medium">
                By clicking <strong>"I Agree"</strong>, you acknowledge and
                confirm that:
              </p>

              <ul className="mt-3 list-disc pl-5 space-y-2 md:space-y-3 marker:text-[#D4AF37]">
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

          <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3 md:gap-4">
            <button
              onClick={handleExit}
              className="px-5 py-2.5 md:px-6 md:py-3 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 transition cursor-pointer text-sm md:text-base font-medium"
            >
              Exit Website
            </button>

            <button
              onClick={handleAccept}
              className="px-6 py-2.5 md:px-8 md:py-3 rounded-xl bg-[#D4AF37] text-[#0F172A] font-semibold hover:brightness-95 transition cursor-pointer text-sm md:text-base"
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
