import React from "react";
import { cardData } from "../../constents/DataFile";

const Experties = () => {
  return (
    <>
      <div className="p-4 ">
        <div className="row justify-content-around align-items-center pt-4">
          <div className="col-sm-12 col-lg-5 col-md-6">
            <div className="experties">
              <h5 className="mt-3">
                <strong>MY SKLLS</strong>
              </h5>
              <h1 className="">
                <b>
                  I'm good in what I do and <br />
                  I'll become greate in it.
                </b>
              </h1>
              <p className="w-100" style={{ textAlign: "justify" }}>
                <ul>
                  <li>
                    <b>Front-end development</b>: I have a strong foundation in
                    front-end technologies such as React.js, Redux, HTML, and
                    CSS, which enables me to create responsive, dynamic, and
                    visually appealing user interfaces.
                  </li>
                  <li>
                    <b>Back-end development</b>: I am proficient in back-end
                    technologies such as Node.js and Express.js, which allows me
                    to build scalable server-side applications with RESTful
                    APIs.
                  </li>
                  <li>
                    <b>Database management</b>: I have extensive experience
                    working with MongoDB and other NoSQL databases, which
                    enables me to create efficient database structures and
                    manage data effectively.
                  </li>
                  <li>
                    <b>Full-stack development</b>: I have expertise in both
                    front-end and back-end development, which enables me to
                    create end-to-end solutions that meet the specific
                    requirements of my clients.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-12 py-2 d-none d-sm-block"
            style={{ height: "87vh",overflow:"hidden" }}
          >
            <div className="circle">
              {cardData.map((value, index) => {
                return (
                  <div key={index}>
                    <img
                      src={value.cardImg}
                      className={value.cardClass}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experties;
