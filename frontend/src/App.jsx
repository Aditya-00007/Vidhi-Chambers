import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutUSPage from "./pages/AboutUsPage";
import OurTeamPage from "./pages/OurTeamPage";
import PracticeAreasPage from "./pages/PracticeAreasPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import CSRPage from "./pages/CSRPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUSPage />} />
        <Route path="/team" element={<OurTeamPage />} />
        <Route path="/practice-areas" element={<PracticeAreasPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/csr" element={<CSRPage />} />
      </Routes>
    </>
  );
}

export default App;
