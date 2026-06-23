import { useNavigate } from "react-router-dom";
import PracticeAreaCard from "../components/PracticeAreaCard";
import crl from "../assets/CRIMINAL-LITIGATION-1.png";
import cvl from "../assets/civil-law.png";
import mat from "../assets/MATRIMONIAL-LITIGATION.png";
import nri from "../assets/NRI_LEGAL_SERVICES.png";
import corp from "../assets/CORPORATE.png";
import intl from "../assets/INTELLECTUAL-PROPERTY-RIGHTS.png";
import res from "../assets/REAL-ESTATE.png";
import arbt from "../assets/ARBITRATION_AND_MEDIATION.png";
import PracticeAreaModal from "../sections/PracticeAreaModal";
import practiceAreas from "../data/practiceAreas";

const PracticeAreas = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10">
      <div className="max-w-350 mx-auto px-6">
        <h2 className="text-8xl font-bold text-center mb-10">Practice Areas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              onClick={() => navigate(`/practice-areas/${area.slug}`)}
            >
              <PracticeAreaCard
                key={area.id}
                area={area}
                onClick={() => navigate(`/practice-areas/${area.slug}`)}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/practice-areas")}
            className="font-medium text-primary hover:underline"
          >
            View All Practice Areas →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
