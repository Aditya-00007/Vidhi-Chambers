import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/newlogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: "About Us",
      dropdown: [
        {
          label: "About us",
          path: "/about#about",
        },
        {
          label: "CSR",
          path: "/about#csr",
        },
        {
          label: "Core Values",
          path: "/about#values",
        },
      ],
    },
    { label: "Our Team", href: "/team" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Our Clients", href: "/clients" },
    {
      label: "Contact Us",
      dropdown: [
        {
          label: "Write To Us",
          path: "/contact#contact",
        },
        {
          label: "Office Location",
          path: "/contact#office-location",
        },
        {
          label: "Internship",
          path: "/contact#internship",
        },
        {
          label: "FAQ's",
          path: "/contact#faq",
        },
      ],
    },
  ];

  return (
    <header className=" w-full sticky top-0 z-50 bg-[#f6f6f5] border-b border-[#D4AF37]/20 shadow-lg">
      <div className="w-full  lg:px-16">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Vidhi Chambers"
              className="h-15 w-auto  contrast-120 brightness-90"
            />
            <div className="flex flex-col items-center text-black font-bold font-serif text-xl">
              <p>Vidhi</p>
              <p>Chambers</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative group">
                  <button
                    className="
            text-[#5b5f68]
            font-medium
            hover:text-[#C19A57]
            transition-all
          "
                  >
                    {item.label}
                  </button>

                  {/* Dropdown */}
                  <div
                    className="
            absolute
            top-full
            left-0
            mt-3
            w-56
            bg-white
            rounded-lg
            shadow-xl
            border
            border-slate-200
            opacity-0
            invisible
            group-hover:opacity-100
            group-hover:visible
            transition-all
            duration-200
            z-50
          "
                  >
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.path}
                        className="
                block
                px-5
                py-3
                text-slate-700
                hover:bg-slate-50
                hover:text-[#B89B5E]
                transition
              "
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="
          text-[#5b5f68]
          font-medium
          transition-all
          duration-300
          hover:text-[#C19A57]
          relative
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-px
          after:w-0
          after:bg-[#B89B5E]
          after:transition-all
          after:duration-300
          hover:after:w-full
        "
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="/contact#contact"
              className="
                px-5 py-2.5
                rounded-md
                bg-[#D4AF37]
                text-[#0F172A]
                font-semibold
                hover:bg-[#e0bd52]
                transition
              "
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#FAF9F6]"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#1E293B] border-t border-[#D4AF37]/20">
          <nav className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="
                  px-6 py-3
                  text-[#FAF9F6]
                  hover:text-[#D4AF37]
                  hover:bg-[#0F172A]
                  transition
                "
              >
                {item.label}
              </a>
            ))}

            <div className="px-6 pt-4">
              <a
                href="#contact"
                className="
                  block
                  text-center
                  bg-[#D4AF37]
                  text-[#0F172A]
                  py-3
                  rounded-md
                  font-semibold
                "
              >
                Get In Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
