import { useState } from 'react';
import './App.css'
import React from "react";

const collections = [
  {
    title: "Bridal Blouses",
    desc: "Intricate hand embroidery and custom fits for your big day.",
    color: "from-[#FFF0DC] to-[#FFF0DC]", // removed pink
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#A86523" />
        <text x="20" y="28" textAnchor="middle" fontSize="20" fill="#FFF0DC" fontWeight="bold">B</text>
      </svg>
    ),
  },
  {
    title: "Designer Sarees",
    desc: "Exclusive sarees with modern and traditional fusion.",
    color: "from-[#FFF0DC] to-[#FFF0DC]", // removed pink
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#A86523" />
        <text x="20" y="28" textAnchor="middle" fontSize="20" fill="#FFF0DC" fontWeight="bold">S</text>
      </svg>
    ),
  },
  {
    title: "Custom Embroidery",
    desc: "Personalized embroidery for every occasion.",
    color: "from-[#FFF0DC] to-[#A86523]", // removed pink
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="20" fill="#A86523" />
        <text x="20" y="28" textAnchor="middle" fontSize="20" fill="#FFF0DC" fontWeight="bold">E</text>
      </svg>
    ),
  },
];

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    
    <div className="font-serif bg-[#FDF7F4] text-[#131010]">
      
      {/* Navbar */}
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

      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-[#FDF7F4] text-center px-4 relative overflow-hidden"
      >
        {/* Glowing Background Effect */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[700px] h-[700px] bg-gradient-to-br from-[#FFF0DC]/60 to-[#A86523]/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-gradient-to-r from-[#A86523] to-[#543A14] bg-clip-text drop-shadow-md animate-fade-in-up">
            Bridal Blouse & Hand Embroidery Specialist
          </h1>

          <p className="mt-4 text-[#543A14] text-base sm:text-lg md:text-xl max-w-xl mx-auto animate-fade-in-up delay-150">
            We craft luxury couture that makes your moments truly unforgettable.
          </p>

          <div className="mt-8 animate-fade-in-up delay-300">
            <button className="px-6 py-3 bg-gradient-to-r from-[#A86523] to-[#543A14] text-white rounded-full font-medium shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-2xl">
              Book Your Appointment
            </button>
          </div>
        </div>

        {/* Smooth Scroll Icon */}
        <div className="absolute bottom-10 text-[#A86523] animate-bounce">
          <svg width="24" height="24" fill="currentColor" className="mx-auto">
            <path d="M12 16l-6-6h12l-6 6z" />
          </svg>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-20 bg-[#FFF0DC] px-6">
        <h3 className="text-3xl font-semibold text-center mb-12 text-[#131010] animate-fade-in-down">
          Our Collections
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden bg-gradient-to-br ${item.color} shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 group animate-fade-in-up`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="h-56 flex flex-col items-center justify-center text-[#A86523] text-xl font-medium">
                <div className="mb-4 animate-bounce">{item.icon}</div>
                <span className="text-2xl font-bold">{item.title}</span>
              </div>
              <div className="p-6 text-base text-[#543A14] group-hover:text-[#A86523] transition-colors duration-300">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 px-6 bg-[#FDF7F4] relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 w-80 h-80 bg-gradient-to-br from-[#FFF0DC]/30 to-[#A86523]/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-3xl font-semibold mb-6 animate-fade-in-down">
            About Us
          </h3>
          <p className="text-[#543A14] text-lg leading-relaxed animate-fade-in-up">
            <span className="font-bold text-[#A86523]">Sparsh Designer</span> is
            a premium bridal and embroidery boutique dedicated to fine
            craftsmanship and bespoke designs. With years of experience in
            bridal couture, we bring elegance, tradition, and creativity to
            every stitch — making your moments unforgettable.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#131010] text-[#FDF7F4] py-10 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up">
          <div>
            <h4 className="font-bold mb-2 text-[#FFF0DC]">Sparsh Designer</h4>
            <p className="text-sm">
              Bridal Boutique • Hand Embroidery Specialist • Erode
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-[#FFF0DC]">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li>
                <a href="#home" className="hover:text-[#A86523] transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#collections"
                  className="hover:text-[#A86523] transition"
                >
                  Collections
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#A86523] transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#A86523] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-[#FFF0DC]">Contact</h4>
            <p className="text-sm">Email: sparshdesigner@gmail.com</p>
            <p className="text-sm">Phone: +91 98765 43210</p>
            <p className="text-sm">Instagram: @sparsh_designer</p>
          </div>
        </div>
        <p className="text-center text-xs mt-8">
          &copy; 2025 Sparsh Designer. All rights reserved.
        </p>
      </footer>

      {/* Custom Animations */}
      <style>
        {`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 0.8s forwards;
        }
        .animate-fade-in-up.delay-150 {
          animation-delay: 0.15s;
        }
        .animate-fade-in-down {
          opacity: 0;
          transform: translateY(-40px);
          animation: fadeInDown 0.8s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-fade-in-down {
          opacity: 0;
          transform: translateY(-40px);
          animation: fadeInDown 0.8s forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 0.8s forwards;
        }
        .animate-fade-in-up[style] {
          animation-delay: inherit;
        }
        `}
      </style>
    </div>
  );
};

export default App;
