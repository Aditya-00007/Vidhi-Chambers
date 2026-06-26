import { useNavigate } from "react-router-dom";
import PracticeAreaCard from "../components/PracticeAreaCard";
import practiceAreas from "../data/practiceAreas";

const PracticeAreas = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10">
      <div className="max-w-350 mx-auto px-6">
        <h2 className="text-8xl font-bold text-center mb-10">Practice Areas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-8">
          {practiceAreas.map((area) => (
            <PracticeAreaCard
              key={area.id}
              area={area}
              onClick={() => navigate(`/practice-areas/${area.slug}`)}
            />
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
