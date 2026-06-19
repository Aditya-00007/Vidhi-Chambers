import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About Us", href: "#about" },
    { label: "Our People", href: "#people" },
    { label: "Practice Areas", href: "#practice-areas" },
    { label: "Our Clients", href: "#clients" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-[#e7e7e3] border-b border-[#D4AF37]/20 shadow-lg">
      <div className="w-full  lg:px-16">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="/src/assets/logo.png"
              alt="Vidhi Chambers"
              className="h-15 w-auto border border-amber-850 contrast-80 brightness-220"
            />
            <div className="flex flex-col items-center text-black font-bold font-serif text-xl">
              <p>Vidhi</p>
              <p>Chambers</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
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
                  after:bg-[#D4AF37]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
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
