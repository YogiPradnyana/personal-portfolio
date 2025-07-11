// src/components/Skills.jsx
import React, { useState } from "react";
// Impor ikon dari react-icons. Pilih ikon yang paling sesuai.
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaBootstrap,
  FaLaravel,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
  SiCodeigniter,
  SiDjango,
} from "react-icons/si";
import { VscTools, VscVscode } from "react-icons/vsc";
import { AiOutlineCode } from "react-icons/ai";
import { FiFigma } from "react-icons/fi"; // Contoh ikon untuk Figma
import { RiJavascriptFill } from "react-icons/ri";
import Icon from "./Icon";

// 1. Definisikan data untuk Tech Stack
const techSkills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500" />,
    level: "Advanced",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500" />,
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: <Icon name="javascript" />,
    level: "Intermediate",
  },
  {
    name: "React JS",
    icon: <FaReact className="text-sky-500" />,
    level: "Basic",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    level: "Intermediate",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-600" />,
    level: "Intermediate",
  },
  {
    name: "PHP",
    icon: <Icon name="php" />,
    level: "Intermediate",
  },
  {
    name: "MySQL",
    icon: <Icon name="mysql" />,
    level: "Intermediate",
  },
  {
    name: "Node JS",
    icon: <Icon name="nodejs" />,
    level: "Basic",
  },
  {
    name: "Laravel",
    icon: <FaLaravel className="text-red-600" />,
    level: "Intermediate",
  },
  {
    name: "Vue",
    icon: <Icon name="vue" />,
    level: "Basic",
  },
  {
    name: "Django",
    icon: <SiDjango className="text-[#092E20]" />,
    level: "Basic",
  },
  {
    name: "FLutter",
    icon: <Icon name="flutter" />,
    level: "Basic",
  },
];

// 2. Definisikan data untuk Tools
const toolSkills = [
  {
    name: "Figma",
    icon: <Icon name="figma" />,
    level: "Intermediate",
  },
  {
    name: "VS Code",
    icon: <VscVscode className="text-blue-500" />,
    level: "Advanced",
  },
  {
    name: "Git",
    icon: <Icon name="git" />,
    level: "Intermediate",
  },
  {
    name: "Github",
    icon: <FaGithub className="text-black" />,
    level: "Intermediate",
  },
  // Tambahkan tools lain di sini jika perlu
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("tech"); // 'tech' atau 'tools'

  const skillsToDisplay = activeTab === "tech" ? techSkills : toolSkills;

  return (
    <section id="skills" className="py-24 scroll-mt-12">
      <div className="px-8 sm:px-10 lg:px-32 xl:px-40">
        {/* Judul Section */}
        <h2 className="text-4xl font-bold text-center mb-4">My Skills</h2>
        <p className="mt-3 sm:mt-5 text-center text-sm mx-auto mb-12 sm:text-base text-neu/60 max-w-md lg:max-w-lg">
          There are some tech stack and tools that i've learned and experienced
        </p>

        {/* Tombol Tab Navigasi */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("tech")}
            className={`flex items-center gap-2 rounded-full px-5 py-3 cursor-pointer font-medium transition-colors ${
              activeTab === "tech" ? "bg-pr text-white" : ""
            }`}
          >
            <AiOutlineCode size={24} /> Tech Stack
          </button>
          <button
            onClick={() => setActiveTab("tools")}
            className={`flex items-center gap-2 rounded-full px-5 py-3 cursor-pointer font-medium transition-colors ${
              activeTab === "tools" ? "bg-pr text-white" : ""
            }`}
          >
            <VscTools size={24} /> Tools
          </button>
        </div>

        {/* Grid untuk menampilkan skill */}
        <div className="rounded-4xl bg-white p-6 shadow-lg sm:p-8">
          {/* Grid untuk menampilkan skill */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skillsToDisplay.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full p-3 hover:bg-neu/5 transition-colors duration-300">
                  {/* Menggunakan React.cloneElement untuk mengatur ukuran ikon secara konsisten */}
                  {React.cloneElement(skill.icon, {
                    size: "100%",
                    className: `${skill.icon.props.className} h-full w-full`,
                  })}
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
                <p className="text-sm text-slate-500">{skill.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
