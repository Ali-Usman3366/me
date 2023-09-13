import React, { useState } from "react";
import "./portfolio.css";
import { portfolioData } from "../../constents/DataFile";
import ImageModal from "../../component/ImageModal";

const Portfolio = () => {
  const [imageList, setImageList] = useState([]);
  const handleExpandBtnClick = (items) => {
    setImageList(items);
  };
  return (
    <>
      <div
        className="container-fluid"
        id="portfolio"
        style={{ background: "rgba(1, 7, 56, 0.03)" }}
      >
        <div className="experties py-5" style={{ padding: "0 3rem 0 4rem" }}>
          <h5 className="mt-3">
            <strong>My Work folio</strong>
          </h5>
          <div className="cardsContainer flex-wrap justify-content-center p-3 d-flex gap-5 align-items-center">
            {portfolioData.map((item, idx) => (
              <button
                key={idx}
                type="button"
                className="cardRoot"
                style={{ maxWidth: "256px" }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => handleExpandBtnClick(item.data)}
              >
                <img src={item.icon} alt="" width={"100%"} height={"100%"} />
                <p className="cardTitle">{item.title}</p>
                <p className="hoverable">
                  <img
                    src={"./Images/slide.svg"}
                    alt=""
                    className="cardsHover"
                    width={"30%"}
                    height={"30%"}
                  />
                </p>
              </button>
            ))}
          </div>
        </div>
        <ImageModal data={imageList} />
      </div>
    </>
  );
};

export default Portfolio;
