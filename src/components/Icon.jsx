// src/components/Icon.jsx (Versi Final dengan Glob Import)
import React from "react";

// 1. Impor semua file .svg dari folder icons sebagai komponen React
// Vite akan mengubah ini menjadi objek, di mana key adalah path dan value adalah komponennya
const modules = import.meta.glob("../assets/icons/*.svg", {
  eager: true,
  query: "?react",
});

// 2. Proses 'modules' menjadi cache yang lebih mudah digunakan
// Kita hanya ingin nama filenya (misal: "github") sebagai key
const iconCache = Object.entries(modules).reduce((acc, [path, module]) => {
  // Mengekstrak nama file dari path, misal: '../assets/icons/github.svg' -> 'github'
  const name = path.split("/").pop().replace(".svg", "");
  acc[name] = module.default;
  return acc;
}, {});

const Icon = ({ name, className, ...props }) => {
  // 3. Ambil komponen langsung dari cache, tidak perlu useEffect atau useState
  const IconComponent = iconCache[name];

  if (IconComponent) {
    return <IconComponent className={className} {...props} />;
  }

  // Handle jika ikon tidak ditemukan di cache
  console.warn(`Ikon "${name}" tidak ditemukan.`);
  return <span className={className} style={{ display: "inline-block" }} />;
};

export default Icon;
