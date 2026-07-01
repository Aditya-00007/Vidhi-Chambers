import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutUSPage from "./pages/AboutUsPage";
import OurTeamPage from "./pages/OurTeamPage";
import PracticeAreasPage from "./pages/PracticeAreasPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import ArticlesPage from "./pages/ArticlesPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUSPage />} />
      <Route path="/team" element={<OurTeamPage />} />
      <Route path="/practice-areas" element={<PracticeAreasPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
