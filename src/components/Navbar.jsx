import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

// Data untuk link navigasi agar mudah diubah
const navLinks = [
  { name: "Home", href: "#home" },
  // { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact", isButton: true },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hasScrolled, setHasScrolled] = useState(false);

  // MENGGABUNGKAN SEMUA LOGIKA KE DALAM SATU useEffect
  useEffect(() => {
    // 1. Logika untuk menentukan apakah shadow harus ditampilkan
    // Shadow muncul jika section aktif BUKAN lagi 'home'
    setHasScrolled(activeSection !== "home");

    // 2. Logika untuk mengunci scroll saat menu mobile terbuka
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // 3. Logika Intersection Observer untuk mendeteksi section aktif
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -90% 0px", // Disesuaikan agar lebih akurat di tengah
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

    // Fungsi cleanup
    return () => {
      document.body.style.overflow = "unset"; // Pastikan scroll kembali normal
      sections.forEach((sec) => {
        if (sec) observer.unobserve(sec);
      });
    };
  }, [isMenuOpen, activeSection]);
  return (
    <nav className="fixed top-5 left-0 right-0 z-50">
      <div className="mx-5 lg:mx-24 xl:mx-28 ">
        <div
          className={`flex items-center justify-between rounded-2xl transition-shadow duration-300 bg-white px-5 lg:px-8 py-4 ${
            hasScrolled ? "shadow-navbar-shadow" : "bg-transparent"
          }`}
        >
          {/* Bagian Kiri: Logo / Nama */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-lg font-semibold transition-colors">
              <span className="text-pr">Yogi</span>pradnyana
            </a>
          </div>

          <div className="hidden lg:block">
            <ul className="flex items-center space-x-10 xl:space-x-15">
              {navLinks
                .filter((link) => !link.isButton)
                .map((link) => (
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
              <RxHamburgerMenu size={24} className="hover:text-pr" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute -top-5 w-full origin-top transform bg-white transition-transform duration-300 ease-in-out lg:hidden 
                   ${isMenuOpen ? "scale-y-100" : "scale-y-0"}`}
      >
        <button
          className="absolute top-5 right-5"
          type="button"
          onClick={() => setIsMenuOpen(false)}
        >
          <IoMdClose size={24} className="hover:text-pr" />
        </button>
        <div className="flex items-center justify-center min-h-screen">
          <div className="space-y-2 px-4 pt-2 pb-4">
            {navLinks
              .filter((link) => !link.isButton)
              .map((link) => (
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
              onClick={() => setIsMenuOpen(false)}
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
