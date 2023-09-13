import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contactme";
import Home from "./Home/Home";
import Services from "./Services/Services";
import Navbar from "../layout/Navbar";
import Portfolio from "./Portfolio/Portfolio";

const Index = () => {
  return (
    <>
      <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Services />
        <Contact />
    </>
  );
};

export default Index;
