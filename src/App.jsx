import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./home";
import About from "./Navpage/about";
import Skills from "./Navpage/skills";
import Projects from "./Navpage/projects";
import Experience from "./Navpage/experience";
import Contact from "./Navpage/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;