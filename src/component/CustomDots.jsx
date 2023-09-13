import React, { Children } from "react";

const CustomDots = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
    data,
  } = rest;
  return (
    <button
      className={active ? "activeDot" : "inactiveDot"}
      onClick={() => onClick()}
    >
        <img src={data[index]} alt="" width={"100%"} height={"100%"} />
    </button>
  );
};

export default CustomDots;
