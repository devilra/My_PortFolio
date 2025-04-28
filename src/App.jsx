import React from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Certificate from "./sections/Certificate";
import Projects from "./sections/Projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import { Element } from "react-scroll";

const App = () => {
  return (
    // <>
    //   <Navbar />

    //   <div className="mt-20">
    //     <Home />
    //     <About />
    //     <Certificate />
    //     <Projects />
    //     <Contact />
    //   </div>
    // </>
    <div className="h-screen  snap-y snap-mandatory">
      <Navbar />
      <div className="">
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="certificates">
          <Certificate />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
};

export default App;
