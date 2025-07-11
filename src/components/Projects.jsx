// src/components/Portfolio.jsx
import React, { useState } from "react";
import { FaEye, FaGithub, FaLocationArrow, FaRegEye } from "react-icons/fa";
import { FiExternalLink, FiInfo } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
// 1. Definisikan data proyek di sini agar mudah dikelola
const projects = [
  {
    title: "Balinara - Digital Tourism",
    image: "/assets/images/project-6.webp",
    github: "https://github.com/YogiPradnyana/balinara",
    live: "#",
    category: "Website",
  },
  {
    title: "Calculator App",
    image: "/assets/images/project-5.webp",
    github: "https://github.com/YogiPradnyana/calculator-v2",
    live: "https://calculator-v2-navy.vercel.app/",
    category: "Website",
  },
  {
    title: "Eventia PNB",
    image: "/assets/images/project-3.webp",
    github: "https://github.com/YogiPradnyana/eventia-pnb",
    live: "#",
    category: "Website",
  },
  {
    title: "KHASS E-Ticketing",
    image: "/images/project-2.webp",
    github: "#",
    live: "#",
    category: "Website",
  },
  {
    title: "KNA Landing Page",
    image: "/images/project-1.webp",
    github: "#",
    live: "#",
    category: "Website",
  },
  {
    title: "Another Cool Project",
    image: "/images/project-4.webp",
    github: "#",
    live: "#",
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section
      id="projects"
      className="py-24 px-8 sm:px-10 lg:px-32 xl:px-40 scroll-mt-12 bg-white"
    >
      <div className="container mx-auto px-4">
        {/* Judul Section */}
        <h2 className="text-4xl font-bold text-center mb-4">My Projects</h2>
        <p className="mt-3 sm:mt-5 text-center text-sm mx-auto mb-12 sm:text-base text-neu/60 max-w-md lg:max-w-lg">
          Each project below marks a key step in my journey of mastering
          frontend development and transforming ideas into code.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, visibleCount).map((project) => (
            <div
              key={project.title}
              className="flex flex-col overflow-hidden transition-all duration-300"
            >
              {/* Gambar Proyek */}
              {/* 1. Tambahkan kelas 'group' di sini untuk memulai efek hover */}
              <div className="group relative h-56 w-full border-2 border-neu/10 overflow-hidden rounded-3xl">
                {/* Badge "Website" kita naikkan layernya agar tetap di atas overlay */}
                <div className="absolute top-3 right-3 flex h-fit w-fit items-center gap-2 rounded-full bg-neu px-2.5 py-1 text-xs font-medium text-white md:text-sm">
                  {project.category || "Website"}
                </div>

                <img
                  src={project.image} // Ganti dengan project.image jika sudah ada
                  alt={project.title}
                  className="h-full w-full object-cover object-center"
                />

                {/* 2. Tambahkan div untuk Overlay & Tombol Ikon */}
                <div className="absolute inset-0 flex items-center gap-3 z-20 justify-center bg-neu/50 transition-all duration-500 ease-in-out transform -translate-y-60 group-hover:translate-y-0">
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black
                 shadow-lg transition-all duration-300 delay-100 transform scale-75 opacity-0
                 group-hover:scale-100 group-hover:opacity-100"
                      aria-label="Live Preview"
                    >
                      <FaEye size={22} />
                    </a>
                  )}
                  <a
                    href={project.github} // Pastikan ada link github di data proyekmu
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black
                            transition-all duration-300 transform scale-75 opacity-0
                             group-hover:scale-100 group-hover:opacity-100"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>

              {/* Konten Kartu */}
              <div className="flex flex-1 px-3 py-2">
                <h3 className="font-semibold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < projects.length && (
          <div className="mt-10 text-center">
            <button
              onClick={handleSeeMore}
              className="rounded-full cursor-pointer bg-pr px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-103"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
