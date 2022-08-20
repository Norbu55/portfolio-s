import React from "react";
import { RootContainer } from "../../common/wrapper/root-container";
import Header from "../../page-components/header";
import HeroSection from "../../page-components/hero-section";
import About from "../../page-components/about";
import Project from "../../page-components/project";
function index() {
  return (
    <RootContainer>
      <Header />
      <HeroSection />
      <About />
      <Project />
    </RootContainer>
  );
}

export default index;
