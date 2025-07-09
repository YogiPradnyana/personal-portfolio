// src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-pr text-neu antialiased">
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden">
        <Hero />
        {/* <Projects /> */}
        {/* <Skills /> */}
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default App;
