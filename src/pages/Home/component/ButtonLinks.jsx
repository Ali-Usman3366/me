import React from "react";
import { buttonLinks } from "../../../constents/DataFile";

const ButtonLinks = () => {
  return (
    <div className="h-btn">
      {buttonLinks.map((btn) => (
        <a
        key={btn.classes}
          href={btn.ref}
          type="button"
          rel={btn?.rel || ""}
          target={btn?.target || ""}
          className={btn.classes}
        >
          {btn.title}
        </a>
      ))}
    </div>
  );
};

export default ButtonLinks;
