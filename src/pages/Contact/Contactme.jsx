import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import ContactIconsSections from "./ContactIconsSections";
import MailSection from "./MailSection";

const Contact = () => {
  return (
    <>
      <div
        className="mainContact-section container-fluid py-5 mb-5"
        style={{ background: "rgba(1,7,56,0.03)" }}
        id="contact"
      >
        <div className="d-flex justify-content-center">
          <span className="sectionHeading mt-3 contactText">
            <strong>GET IN TOUCH</strong>
          </span>
        </div>
        <ContactIconsSections />
        <div className="row mt-3 px-5">
          <div className="col-md-6 col-sm-12 mt-4">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d278.51686218188877!2d73.04687901617217!3d31.46006005097794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39224335bc11a6f5%3A0xc0328e8ce09aa044!2sMohib%20Karyana%20Store%20(Ehsaas%20karyana)!5e0!3m2!1sen!2sus!4v1688485713434!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mt-4">
            <MailSection />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Contact;
