import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-lg transition-all duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <div className="flex items-center space-x-3">
          <span className="inline-block bg-gradient-to-tr from-[#A86523] to-[#FFF0DC] rounded-full p-2 animate-spin-slow">
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="16" fill="#A86523" />
              <text
                x="16"
                y="22"
                textAnchor="middle"
                fontSize="16"
                fill="#FFF0DC"
                fontWeight="bold"
              >
                S
              </text>
            </svg>
          </span>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-[#A86523] to-[#543A14] bg-clip-text text-transparent tracking-wide animate-gradient-x">
            Sparsh Designer
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
          {["Home", "About", "Collections", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative px-3 py-1 transition hover:text-[#A86523] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#A86523] hover:after:w-full after:transition-all after:duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#book"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-[#A86523] to-[#543A14] text-white font-semibold shadow hover:scale-105 transition-transform duration-300 animate-bounce"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-[#A86523] hover:bg-[#FFF0DC] focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenu && (
        <div className="md:hidden bg-white/95 shadow-lg px-8 py-4 animate-fade-in-down">
          <nav className="flex flex-col space-y-4 text-lg font-medium">
            {["Home", "About", "Collections", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#A86523] transition"
                onClick={() => setMobileMenu(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#book"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#A86523] to-[#543A14] text-white font-semibold shadow hover:scale-105 transition"
              onClick={() => setMobileMenu(false)}
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
