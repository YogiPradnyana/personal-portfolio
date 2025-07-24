// src/components/Portfolio.jsx
import React, { useEffect, useState } from "react";
import { FaEye, FaGithub, FaLocationArrow, FaRegEye } from "react-icons/fa";
import { FiExternalLink, FiInfo } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import ProjectCard from "./ProjectCard";
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
    title: "Bakeru - Bread Factory",
    image: "/assets/images/project-4.webp",
    github: "https://github.com/danielnalle/pbl-2024",
    live: "#",
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
    title: "CRUD Javascript",
    image: "/assets/images/project-2.webp",
    github: "#https://github.com/YogiPradnyana/CRUD-Javascript",
    live: "https://crud-javascript-hazel.vercel.app/",
    category: "Website",
  },
  {
    title: "Todo List",
    image: "/assets/images/project-1.webp",
    github: "https://github.com/YogiPradnyana/TODO-LIST",
    live: "https://todo-list-plum-ten-54.vercel.app/",
    category: "Website",
  },
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeCard, setActiveCard] = useState(null);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveCard(null); // Reset kartu aktif menjadi tidak ada
    };

    // Tambahkan event listener saat ada kartu yang aktif
    if (activeCard) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup: Hapus event listener
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeCard]);

  return (
    <section
      id="projects"
      className="pt-12 md:pt-24 pb-12 px-8 sm:px-10 lg:px-32 xl:px-40 scroll-mt-12 bg-white"
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
            <ProjectCard
              key={project.title}
              project={project}
              isActive={activeCard === project.title}
              onClick={(e) => {
                e.stopPropagation();
                setActiveCard(
                  activeCard === project.title ? null : project.title
                );
              }}
            />
          ))}
        </div>
        {visibleCount < projects.length && (
          <div className="mt-10 text-center">
            <button
              onClick={handleSeeMore}
              className="rounded-full cursor-pointer bg-pr px-8 py-3 text-base font-medium text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-101"
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
