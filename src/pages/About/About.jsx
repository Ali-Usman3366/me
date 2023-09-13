import React from "react";
import AboutData from "./AboutData";
import "../../component/Styles.css"
import Experties from "./Experties";

const About = () => {
  return (
    <>
      <div className="container-fluid pt-5" id="about">
        <AboutData />
        <Experties />
      </div>
    </>
  );
};
export default About;
