import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/newlogo.png";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const { data } = await axios.post("/api/admin/login", form);

      localStorage.setItem("token", data.token);

      navigate("/admin/inquiries", { replace: true });
    } catch (err) {
      setError(
        err.response?.data?.message || "Unable to login. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F8F8F6] px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
        {/* Logo */}

        <div className="mb-8 flex flex-col items-center">
          <img src={logo} alt="Vidhi Chambers" className="mb-4 h-16 w-auto" />

          <h1 className="font-cormorant text-3xl font-bold text-[#304669]">
            Admin Portal
          </h1>

          <p className="mt-2 text-center text-sm text-slate-500">
            Authorized personnel only
          </p>
        </div>

        {/* Error */}

        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 transition focus:border-[#B89B5E] focus:outline-none focus:ring-2 focus:ring-[#B89B5E]/30"
            />
          </div>

          {/* Password */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 transition focus:border-[#B89B5E] focus:outline-none focus:ring-2 focus:ring-[#B89B5E]/30"
            />
          </div>

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#304669] py-3 font-semibold text-white transition hover:bg-[#243652] disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="mt-8 border-t border-slate-200 pt-4 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Vidhi Chambers
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
