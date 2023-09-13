import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsPhoneVibrateFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const ContactIconsSections = () => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center gap-3 container flex-wrap">
        <div className="address d-flex align-items-start">
          <span className="contact-icons">
            <MdLocationPin />
          </span>
          <div className="addressText ms-2">
            <span className="mb-0">
              <strong>Address</strong>
            </span>
            <p className="mb-0">
              Ghulam Muhammad Abad, Faisalabad, Punjab, Pakistan
            </p>
          </div>
        </div>

        <div className="address d-flex align-items-start">
          <span className="contact-icons">
            <BsPhoneVibrateFill />
          </span>
          <div className="addressText ms-2">
            <span className="mb-0">
              <strong>Phone</strong>
            </span>
            <p className="mb-0">+92 323 0070548</p>
          </div>
        </div>

        <div className="address d-flex align-items-start">
          <span className="contact-icons">
            <MdEmail />
          </span>
          <div className="addressText ms-2">
            <span className="mb-0">
              <strong>Email</strong>
            </span>
            <p className="mb-0" style={{fontSize:"1rem"}}>aliusman3366503@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactIconsSections;
