import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutUSPage from "./pages/AboutUsPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUSPage />} />
      </Routes>
    </>
  );
}

export default App;
