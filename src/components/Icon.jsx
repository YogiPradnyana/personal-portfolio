// src/components/Icon.jsx (Versi Vite)
import React, { useEffect, useState } from "react";

const Icon = ({ name, className, ...props }) => {
  const [IconComponent, setIconComponent] = useState(null);

  useEffect(() => {
    const importIcon = async () => {
      try {
        const module = await import(`../assets/icons/${name}.svg?react`);
        setIconComponent(() => module.default);
      } catch (error) {
        console.error(`Cannot load SVG: ${name}.svg`, error);
        setIconComponent(null);
      }
    };
    importIcon();
  }, [name]);

  if (IconComponent) {
    return <IconComponent className={className} {...props} />;
  }

  return null; // atau return fallback UI
};

export default Icon;
