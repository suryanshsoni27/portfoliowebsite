import React, { useState } from "react";
import emailjs from "emailjs-com";

import "../styles/ContactUs.css";

export default function ContactMe() {
  const [email, setEmail] = useState(" ");
  const [name, setName] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [subject, setSubject] = useState(" ");

  let templateParams = {
    emailfrom: email,
    to_name: "Suryansh Soni",
    name: name,
    subject: subject,
    message_html: message,
  };

  function sendEmail(e) {
    console.log(templateParams);
    e.preventDefault();
    emailjs
      .send(
        "service_hl7k7yh",
        "template_dlokqea",
        templateParams,
        "user_5NV2bfai8JGxgtN18iyCT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form class="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <label>Subject</label>
      <input
        type="text"
        name="subject"
        onChange={(event) => {
          setSubject(event.target.value);
        }}
      />
      <label>Message</label>
      <textarea
        name="message"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <input id="button" type="submit" value="Send" />
    </form>
  );
}
