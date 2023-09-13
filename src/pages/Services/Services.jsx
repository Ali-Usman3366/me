import React from "react";
import { serviceData, servicesData } from "../../constents/DataFile";

const Services = () => {
  return (
    <>
      <div className="container-fluid" id="services">
        <div className="experties p-5" style={{ padding: "0 3rem 0 4rem" }}>
          <h5 className="mt-3">
            <strong>My Services</strong>
          </h5>
          <div className="cardsContainer p-3 d-flex flex-wrap gap-5 align-items-start justify-content-center">
            {servicesData.map((item,idx) => (
              <div className="cardRoot" key={idx} style={{maxWidth:"360px"}}>
                <img src={item.icon} alt="" width={"100%"} height={"229px"} />
                <p
                  className="cardTitle text-start"
                  style={{
                    fontSize: "1.4rem",
                    color: "rgb(1,7,56)",
                    fontWeight: "bold",
                    whiteSpace:"nowrap",
                    textOverflow:"ellipsis",
                    overflow:"hidden"
                  }}
                >
                  {item.title}
                </p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
