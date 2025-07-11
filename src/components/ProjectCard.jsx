// src/components/ProjectCard.jsx
import { FaEye, FaGithub } from "react-icons/fa";
import clsx from "clsx";

const ProjectCard = ({ project, isActive, onClick }) => {
  return (
    <div
      key={project.title}
      className="flex flex-col overflow-hidden transition-all duration-300"
    >
      <div
        className="group relative h-56 w-full cursor-pointer overflow-hidden rounded-3xl border-2 border-neu/10 sm:h-60"
        onClick={onClick}
      >
        {/* Badge "Website" */}
        <div className="absolute top-3 right-3 flex h-fit w-fit items-center gap-2 rounded-full bg-neu px-2.5 py-1 text-xs font-medium text-white md:text-sm">
          {project.category || "Website"}
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />

        {/* 2. Gunakan clsx untuk logika className pada overlay */}
        <div
          className={clsx(
            "absolute inset-0 z-20 flex items-center justify-center gap-3 bg-neu/60 transition-all duration-500 ease-in-out",
            // Jika diklik, overlay muncul. Jika tidak, overlay hanya muncul saat di-hover di desktop.
            {
              "translate-y-0": isActive,
              "-translate-y-full group-hover:translate-y-0": !isActive,
            }
          )}
        >
          {project.live && project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-all duration-300",
                // Tombol muncul jika diklik, atau jika di-hover di desktop.
                {
                  "scale-100 opacity-100 delay-100": isActive,
                  "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100":
                    !isActive,
                }
              )}
              aria-label="Live Preview"
            >
              <FaEye size={22} />
            </a>
          )}

          {/* Tombol GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition-all duration-300",
              {
                "scale-100 opacity-100": isActive,
                "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100":
                  !isActive,
              }
            )}
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
  );
};

export default ProjectCard;
