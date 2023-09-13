import React, { memo } from "react";
import Carousel from "react-multi-carousel";
import CustomDots from "./CustomDots";
import { responsive } from "../constents/DataFile";
import "react-multi-carousel/lib/styles.css";

const ImageModal = memo(({ data }) => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-body p-0 position-relative rounded">
            {data && data.length > 0 ? (
              <Carousel
                responsive={responsive}
                autoPlay={true}
                infinite={true}
                draggable={true}
                showDots={true}
                // customDot={<CustomDots data={data} />}
                // renderDotsOutside={true}
                swipeable={true}
              >
                {data.map((imgSrc,index) => (
                  <img
                    src={imgSrc}
                    key={index}
                    width={"100%"}
                    className="rounded"
                    height={"100%"}
                    alt=""
                  />
                ))}
              </Carousel>
            ) : (
              <p style={{ textAlign: "center", padding: "2rem 0" }}>
                <p className="text-danger" style={{ fontSize: "2.5rem" }}>
                  <strong>Sorry!</strong>
                </p>
                <strong style={{fontSize:"1.2rem"}}>
                <p>Image Upload Restricted!</p>
                <p>
                  This project is marked as confidential by the author, and
                  image uploads are not permitted.
                </p>
                </strong>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ImageModal;
