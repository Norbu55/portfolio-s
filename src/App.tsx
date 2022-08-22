import React from "react";
import { Route, Routes } from "react-router";
import Header from "./page-components/header";
import HeroSection from "./page-components/hero-section";
import About from "./page-components/about";
import Project from "./page-components/project";
import Contact from "./page-components/contact/form";
import Navbar from "./pages/header";
import { RootContainer } from "./common/wrapper/root-container";

function App() {
  return (
    <div>
      <Navbar />
      {/* <RootContainer> */}{" "}
      {/* <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </RootContainer> */}
    </div>
  );
}

export default App;
