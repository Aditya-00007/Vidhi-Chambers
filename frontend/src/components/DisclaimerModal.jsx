import { useEffect, useState } from "react";
import { ShieldAlert } from "lucide-react";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("vidhi-disclaimer-accepted");

    if (!accepted) {
      setIsOpen(true);

      // Prevent scrolling
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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

        <div className="p-8 md:p-10">
          <div
            className="
              text-slate-600
              leading-8
              space-y-5
            "
          >
            <p>
              In compliance with the rules of the Bar Council of India, this
              website of Vidhi Chambers ( the “Firm” ) is meant solely for
              information about the Firm, its practice areas, advocates and
              solicitors and not for the purpose of advertising, soliciting work
              or inducement of any sort by the Firm or any of its members.
            </p>

            <p>
              By clicking <strong>"I Agree"</strong>, you confirm that you have
              read, understood, and accepted the above disclaimer and wish to
              proceed.
            </p>
          </div>
          {/* Buttons */}

          <div
            className="
              mt-10
              flex flex-col sm:flex-row
              justify-end
              gap-4
            "
          >
            <button
              onClick={handleExit}
              className="
                px-6 py-3
                rounded-xl
                border
                border-slate-300
                text-slate-600
                hover:bg-slate-100
                cursor-pointer
                transition
              "
            >
              Exit Website
            </button>

            <button
              onClick={handleAccept}
              className="
              cursor-pointer
                px-8 py-3
                rounded-xl
                bg-[#D4AF37]
                text-[#0F172A]
                font-semibold
                hover:brightness-95
                transition
              "
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
