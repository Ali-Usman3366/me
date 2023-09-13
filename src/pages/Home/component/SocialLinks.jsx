import React from "react";
import { socialLinks } from "../../../constents/DataFile";

const SocialLinks = () => {
  return (
    <div
      className="social-icons d-flex pt-3 justify-content-center align-items-center mt-4 gap-3"
      style={{ fontSize: "1.3rem" }}
    >
      {socialLinks.map((item, idx) => {
        return (
          <a
            href={item.link}
            target={"_blank"}
            key={idx}
            rel="noreferrer"
            className="socialIcons"
          >
            <span>{item.icon}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
