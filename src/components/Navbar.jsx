import React, { useEffect, useState } from "react";

// Data untuk link navigasi agar mudah diubah
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Portofolio", href: "#portfolio" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    const sections = navLinks.map((link) => document.querySelector(link.href));

    sections.forEach((sec) => {
      if (sec) observer.observe(sec);
    });

    return () => {
      sections.forEach((sec) => {
        if (sec) observer.unobserve(sec);
      });
    };
  }, []);

  // Efek untuk mengunci scroll di body tetap berguna
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function untuk memastikan overflow kembali normal saat komponen di-unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);
  return (
    <nav className="fixed top-5 left-0 right-0 z-50">
      <div className="mx-5 lg:mx-24 xl:mx-28 font-se">
        <div className="flex items-center justify-between rounded-2xl bg-white px-5 lg:px-8 py-4">
          {/* Bagian Kiri: Logo / Nama */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-lg font-semibold transition-colors">
              <span className="text-pr">Yogi</span>pradnyana
            </a>
          </div>

          <div className="hidden lg:block">
            <ul className="flex items-center space-x-10 xl:space-x-15">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`transition-colors font-medium hover:text-pr ${
                      activeSection === link.href.substring(1)
                        ? "text-pr"
                        : "text-neu"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="cursor-pointer flex px-4.5 py-2.5 gap-2 items-center justify-center font-medium bg-pr rounded-full text-white whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
          <div className="-mr-2 flex lg:hidden ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute -top-5 w-full font-se origin-top transform bg-white transition-transform duration-300 ease-in-out lg:hidden 
                   ${isMenuOpen ? "scale-y-100" : "scale-y-0"}`}
      >
        <button
          className="absolute top-5 right-5"
          type="button"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              d="M5 5L15 15"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div className="flex items-center justify-center min-h-screen">
          <div className="space-y-2 px-4 pt-2 pb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-center font-medium hover:font-pr px-3 py-3 ${
                  activeSection === link.href.substring(1)
                    ? "text-pr"
                    : "text-neu"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="cursor-pointer flex px-4.5 py-2.5 gap-2 items-center justify-center font-medium bg-pr rounded-full text-white whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
