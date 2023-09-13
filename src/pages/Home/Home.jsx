import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { socialLinks, buttonLinks, TypingText } from "../../constents/DataFile";
import AnimatedImage from "./component/AnimatedImage";
import SocialLinks from "./component/SocialLinks";
import ButtonLinks from "./component/ButtonLinks";

const Home = () => {
  return (
    <>
      <div className="container-fluid pt-5" id="home">
        <div className="row home_section gap-lg-0">
          <div className="col-lg-6 col-12 order-lg-1 order-2 px-5">
            <div className="h-left">
              <div className="h-name-text">
                <div className="greeting-text-div">
                  <i className="icons fa-solid fa-hand"></i>
                  <h1 className="h_greating_text">Hi! I am </h1>
                </div>
                <h1 className="h-name text-center ms-md-5 ps-md-5 ps-sm-0 ms-sm-0">
                  <Typewriter
                    options={{
                      strings: TypingText,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
                <p className="h-intro-para mt-5">
                  A Self-Motivated and Passionate Mern Stack Developer With a
                  Good hands in Web App Development.
                </p>
              </div>
              <ButtonLinks />
              <SocialLinks />
            </div>
          </div>
          <AnimatedImage />
        </div>
      </div>
    </>
  );
};
export default Home;
