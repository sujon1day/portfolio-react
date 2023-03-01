import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div class="container">
      <div class="contact-section">
        <div class="contact-heading">
          <h3 class="contact-heading-title-h3">Contact Me</h3>
          <h2 class="contact-heading-title-h2">I Want To Hear From You</h2>
          <p class="contact-heading-text">
            Please fill out the form on this section to contact with me. Or call
            between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
          </p>
        </div>
        <div class="contact">
          <form>
            <label for="fname">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name.."
            />

            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email.."
            ></input>

            <label for="massage">Massage</label>
            <textarea
              id="massage"
              name="massage"
              placeholder="Write your massage here..."
            ></textarea>

            <button class="massage-submit-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
