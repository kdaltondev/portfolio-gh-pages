import React from "react";
import {
    FaGithub,
    FaLinkedin
  } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact">
      <div id="contact" class="container">
        <h2>Let's Connect</h2>
        <div class="row align-items-start my-5">
          <div class="col-lg-4">
            <h2>Hire Me</h2>
            <h3>Kate Dalton</h3>
            <h3>207-844-0077 | kdaltondev@gmail.com </h3>
          </div>
          <div class="col-lg-4">
            <h2>Follow Me</h2>
            <FaLinkedin className="icon" />
            <FaGithub className="icon" />
          </div>
          <div class="col-lg-4">
            <h2>Contact Me</h2>
            <h3>Portland, ME</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
