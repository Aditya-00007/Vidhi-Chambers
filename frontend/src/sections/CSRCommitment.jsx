import CsrImg from "../assets/CSR.webp";

const CSRCommitment = () => {
  return (
    <section id="csr-commitment" className="py-24 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Side */}

          <div className="lg:col-span-4">
            <img
              src={CsrImg}
              alt="CSR"
              className="object-contain h-1/4 w-auto mx-auto mb-5 filter brightness-106 contrast-100"
            />
            <span
              className="
                uppercase
                tracking-[5px]
                text-[#B89B5E]
                text-sm
                font-medium
              "
            >
              Our Commitment
            </span>

            <h2
              className="
                mt-6
                font-cormorant
                text-5xl
                font-semibold
                text-[#1F3657]
                leading-tight
              "
            >
              Contributing
              <br />
              Beyond The
              <br />
              Courtroom
            </h2>
          </div>

          {/* Divider */}

          <div className="hidden lg:block lg:col-span-1">
            <div className="w-px h-full bg-slate-200 mx-auto" />
          </div>

          {/* Right Side */}

          <div className="lg:col-span-7">
            <div className="space-y-8 text-slate-600 leading-9 text-lg">
              <p>
                We believe that our professionals should contribute in their own
                manner to the upliftment of society and help improve the quality
                of education and healthcare through various community
                development programmes supported by the Firm.
              </p>

              <p>
                We lend support to individuals and philanthropic organisations
                working towards reducing poverty, illiteracy, and disease, while
                promoting awareness of education, healthcare, human rights, and
                environmental issues.
              </p>

              <p>
                Our professionals and staff voluntarily contribute their time,
                skills, and resources in support of community welfare
                initiatives, social outreach programmes, and activities focused
                on education, healthcare, women empowerment, and broader social
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRCommitment;
