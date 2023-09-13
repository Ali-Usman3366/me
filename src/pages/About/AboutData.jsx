import React from "react";
import "./about.css";
const AboutData = () => {
  return (
    <>
      <div className="row about-row-bg">
        <div className="col-lg-5 col-sm-12 d-none d-sm-block">
          <div className="image d-flex justify-content-center">
            <div className="circle-bg-img"></div>
            <div className="about-box"></div>
            <div className="about-box2"></div>
            <img src="./images/about.png" className="about-Image" alt="" />
          </div>
        </div>
        <div className="col-lg-7 col-sm-12">
          <div className="about-text-div container px-sm-5">
            <h5 className="mt-3">
              <strong>ABOUT ME</strong>
            </h5>
            <h2 className="">
              <b>
                Mern Stack Web Developer <br /> From Faisalabad
              </b>
            </h2>
            <p className="" style={{ textAlign: "justify" }}>
              As a MERN stack developer, I have expertise in developing
              full-stack web applications using the MERN (MongoDB, Express.js,
              React.js, and Node.js) technology stack. With my strong foundation
              in front-end development, back-end development, and database
              management, I am able to create scalable and robust applications
              that meet the specific requirements of my clients.
            </p>
            <div className="row px-sm-0 px-md-2 pt-2 ">
              <div className="col-md-6 col-sm-12">
                <div>
                  <p className="mb-1">
                    <strong>Name</strong>
                  </p>
                  <p className="mb-2 border-1 border-bottom">Ali Usman</p>
                </div>
                <div>
                  <p className="mb-1">
                    <strong>Email</strong>
                  </p>
                  <p className="mb-2 border-1 border-bottom">aliusman3366503@gmail.com</p>
                </div>
                <div>
                  <p className="mb-1 ">
                    <strong>Phone</strong>
                  </p>
                  <p className="mb-2 border-sm-1 border-bottom">+92 323 007048</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
              <div>
                  <p className="mb-1">
                    <strong>Age</strong>
                  </p>
                  <p className="mb-2 border-1 border-bottom">23 Years</p>
                </div>
                <div>
                  <p className="mb-1">
                    <strong>Education</strong>
                  </p>
                  <p className="mb-2 border-1 border-bottom">BS Software Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutData;
