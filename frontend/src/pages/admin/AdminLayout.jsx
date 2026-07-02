import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Mail, FileText, LogOut } from "lucide-react";
import logo from "../../assets/newlogo.png";

const AdminLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-[#F8F8F6]">
      {/* Sidebar */}

      <aside className="w-64 border-r border-slate-200 bg-white">
        <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5">
          <img src={logo} alt="Vidhi Chambers" className="h-11 w-auto" />

          <div>
            <h1 className="font-cormorant text-xl font-bold text-[#304669]">
              Vidhi Chambers
            </h1>

            <p className="text-xs text-slate-500">Admin Panel</p>
          </div>
        </div>

        <nav className="mt-6 flex flex-col px-3">
          <NavLink
            to="/admin/inquiries"
            className={({ isActive }) =>
              `mb-2 flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-[#304669] text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            <Mail size={18} />
            Inquiries
          </NavLink>

          <NavLink
            to="/admin/articles"
            className={({ isActive }) =>
              `mb-2 flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-[#304669] text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`
            }
          >
            <FileText size={18} />
            Articles
          </NavLink>
        </nav>

        <button
          onClick={logout}
          className="absolute bottom-6 left-3 right-3 flex items-center gap-3 rounded-lg px-4 py-3 text-red-600 transition hover:bg-red-50"
        >
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* Content */}

      <main className="flex-1">
        <header className="flex h-18 items-center border-b border-slate-200 bg-white px-8">
          <h2 className="text-lg font-semibold text-[#304669]">Admin Panel</h2>
        </header>

        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
