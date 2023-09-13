import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const MailSection = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });

  const hadleFieldsChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmitMail = async () => {
    if (inputs.email === "" || inputs.name === "" || inputs.message === "") {
      toast.error("All the fields are required!")
    } else {
      const mailParams = { userName: "Ali Usman", ...inputs };
      emailjs
        .send(
          "service_km6ydwm",
          "template_4rjc0v5",
          mailParams,
          "oX5Yei_Cw6vsOJhee"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            toast.success("Your email has been sent!");
            setInputs({ name: "", email: "", message: "" });
          },
          function (error) {
            console.log("FAILED...", error);
            toast.error("Ops! Something went wrong while sending email");
          }
        );
    }
  };
  return (
    <div className="contactFormSide">
      <h3 style={{ fontSize: "2.3rem" }}>Write me a message</h3>
      <div className="credentials">
        <input
          type="text"
          name="name"
          id="name"
          className="textFields"
          placeholder="Name*"
          onChange={hadleFieldsChange}
          value={inputs.name}
        />
        <input
          type="text"
          name="email"
          id="email"
          className="textFields"
          placeholder="Email*"
          onChange={hadleFieldsChange}
          value={inputs.email}
          required
        />
      </div>
      <div className="MessageArea">
        <textarea
          placeholder="Your message here*"
          className="message"
          name="message"
          onChange={hadleFieldsChange}
          value={inputs.message}
          id="message"
          cols="30"
          rows="9"
        ></textarea>
      </div>
      <button className="sendBtn" onClick={handleSubmitMail}>
        SEND MESSAGE
      </button>
    </div>
  );
};

export default MailSection;
