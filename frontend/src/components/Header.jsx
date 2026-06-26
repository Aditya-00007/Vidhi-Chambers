import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/newlogo.png";

const navItems = [
  {
    label: "About Us",
    dropdown: [
      { label: "About Us", path: "/about#about" },
      { label: "CSR", path: "/about#csr" },
      { label: "Core Values", path: "/about#values" },
    ],
  },
  { label: "Our Team", href: "/team" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Clients", href: "/clients" },
  {
    label: "Contact Us",
    dropdown: [
      { label: "Write to Us", path: "/contact#contact" },
      { label: "Office Location", path: "/contact#office-location" },
      { label: "Internship", path: "/contact#internship" },
      { label: "FAQs", path: "/contact#faq" },
    ],
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#D4AF37]/20 bg-[#FAF9F6]/95 shadow-sm backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex min-h-18 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3" onClick={closeMenu}>
            <img
              src={logo}
              alt="Vidhi Chambers"
              className="h-13 w-auto contrast-120 brightness-90 sm:h-15"
            />
            <div className="flex flex-col items-center font-cormorant text-lg font-bold leading-5 text-[#0F172A] sm:text-xl">
              <span>Vidhi</span>
              <span>Chambers</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-1 font-medium text-slate-600 transition-colors hover:text-[#D4AF37]"
                  >
                    {item.label}
                    <ChevronDown size={15} aria-hidden="true" />
                  </button>

                  <div className="invisible absolute left-0 top-full z-50 mt-3 w-56 rounded-xl border border-slate-200 bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block px-5 py-3 text-slate-700 transition hover:bg-slate-50 hover:text-[#D4AF37]"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `relative font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-[#D4AF37] after:transition-all ${
                      isActive
                        ? "text-[#304669] after:w-full"
                        : "text-slate-600 after:w-0 hover:text-[#D4AF37] hover:after:w-full"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <Link
            to="/contact#contact"
            className="hidden rounded-lg bg-[#D4AF37] px-5 py-2.5 font-semibold text-[#0F172A] transition hover:brightness-95 lg:block"
          >
            Get in Touch
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="rounded-lg p-2 text-[#304669] lg:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-[#D4AF37]/20 bg-[#0F172A] lg:hidden">
          <nav className="flex flex-col py-4" aria-label="Mobile navigation">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileDropdown((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                    className="flex w-full items-center justify-between px-6 py-3 text-left text-[#FAF9F6] transition hover:bg-white/5 hover:text-[#D4AF37]"
                    aria-expanded={openMobileDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      size={17}
                      className={`transition-transform ${
                        openMobileDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMobileDropdown === item.label && (
                    <div className="bg-black/15 py-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.path}
                          onClick={closeMenu}
                          className="block px-10 py-2.5 text-sm text-slate-300 transition hover:text-[#D4AF37]"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `px-6 py-3 transition hover:bg-white/5 hover:text-[#D4AF37] ${
                      isActive ? "text-[#D4AF37]" : "text-[#FAF9F6]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}

            <div className="px-6 pt-4">
              <Link
                to="/contact#contact"
                onClick={closeMenu}
                className="block rounded-lg bg-[#D4AF37] py-3 text-center font-semibold text-[#0F172A]"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
