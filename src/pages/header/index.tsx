import React from "react";
import { RootContainer } from "../../common/wrapper/root-container";

import HeroSection from "../../page-components/hero-section";
import About from "../../page-components/about";
import Project from "../../page-components/project";
import Form from "../../page-components/contact/form";

function index() {
  return (
    <RootContainer>
      <HeroSection />
      <About />
      <Project />
      <Form />
    </RootContainer>
  );
}

export default index;
