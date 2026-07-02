import HomePage from "./pages/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutUSPage from "./pages/AboutUsPage";
import OurTeamPage from "./pages/OurTeamPage";
import PracticeAreasPage from "./pages/PracticeAreasPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import ArticlesPage from "./pages/ArticlesPage";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminRoute from "./components/AdminRoute";
import AdminLayout from "./pages/admin/AdminLayout";
import Inquiries from "./pages/admin/Inquiries";
import Articles from "./pages/admin/Articles";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUSPage />} />
      <Route path="/team" element={<OurTeamPage />} />
      <Route path="/practice-areas" element={<PracticeAreasPage />} />
      <Route path="/articles" element={<ArticlesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      {/* admin routes */}
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route index element={<Navigate to="/admin/inquiries" replace />} />
        <Route path="/admin/inquiries" element={<Inquiries />} />
        <Route path="/admin/articles" element={<Articles />} />
      </Route>
    </Routes>
  );
}

export default App;
