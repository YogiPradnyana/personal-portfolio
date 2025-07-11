// src/components/Hero.jsx
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profilePhoto from "/assets/images/Yogi.jpg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

function Hero() {
  // const socialLinks = [
  //   {
  //     name: "github",
  //     href: "https://github.com/your-username",
  //     icon: <FaGithub />,
  //   },
  //   {
  //     name: "linkedin",
  //     href: "https://linkedin.com/in/your-profile",
  //     icon: <FaLinkedin />,
  //   },
  //   {
  //     name: "instagram",
  //     href: "https://instagram.com/your-profile",
  //     icon: <FaInstagram />,
  //   },
  // ];
  const [text] = useTypewriter({
    words: ["UI/UX Designer", "Frontend Developer", "Web Enthusiast"], // Kata-kata yang akan diketik
    loop: {}, // Loop tak terbatas
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section
      id="home"
      className="flex items-center pt-24 px-8 sm:px-10 lg:px-32 xl:px-40 min-h-screen bg-linear-to-l from-[#C7EFDD] to-[#F7FDFA]"
    >
      <div className="flex flex-col-reverse pb-16 lg:pb-0 items-center flex-1 justify-between gap-12 lg:flex-row">
        {/* ===== Kolom Kiri: Teks & CTA ===== */}
        <div className="flex-1 text-center lg:text-left">
          <h3 className="text-neu/60 font-semibold text-base sm:text-lg">
            Hello There👋
          </h3>
          <h1 className="mt-2 sm:mt-3 text-4xl font-semibold text-pr sm:text-5xl xl:text-6xl">
            Yogi Pradnyana
          </h1>
          <p className="mt-3 sm:mt-6 text-lg font-semibold sm:text-xl">
            I'm a {text}
            <Cursor cursorStyle="|" />
          </p>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base text-neu/60 max-w-md lg:max-w-lg">
            I transform complex ideas into functional, beautiful, and
            user-friendly digital experiences. I believe great design is the
            bridge between technology and people.
          </p>

          {/* Ikon Sosial Media */}
          {/* <div className="mt-8 flex justify-center gap-4 lg:justify-start">
            {socialLinks.map((social) => (
              <div className="rounded-full border-pr border shadow-sm p-3 flex items-center justify-center">
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-pr transition-colors hover:text-pr"
                >
                  {React.cloneElement(social.icon, { size: 20 })}
                </a>
              </div>
            ))}
          </div> */}

          {/* Tombol CTA */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#contact"
              download
              className="cursor-pointer shadow-md flex px-6 py-3 gap-2 items-center justify-center font-medium bg-pr rounded-full text-white whitespace-nowrap hover:scale-103 transition-transform"
            >
              <FiDownload size={24} />
              Download CV
            </a>
          </div>
        </div>

        {/* ===== Kolom Kanan: Foto & Bentuk Abstrak ===== */}
        <div className="group relative flex flex-1 items-center justify-center lg:mt-0 mt-12">
          <div className="absolute h-72 w-72 rounded-4xl bg-[#408E91] shadow-lg transition-transform duration-300 ease-in-out transform -rotate-6 group-hover:rotate-6 sm:h-80 sm:w-80 lg:h-96 lg:w-96 xl:h-110 xl:w-110"></div>

          {/* LAPISAN 2: Foto Profil di Depan */}
          {/* Diberi 'relative' agar berada di atas card. Diberi border untuk efek bingkai. */}
          <div className="relative h-72 w-72 flex-shrink-0 overflow-hidden  rounded-4xl shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96 xl:h-110 xl:w-110 ">
            <img
              className="h-full w-full object-cover"
              src={profilePhoto}
              alt="Foto Profil Yogi Pradhyana"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
