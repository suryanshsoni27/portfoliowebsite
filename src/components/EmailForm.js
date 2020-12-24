import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import { init } from "emailjs-com";

import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  label,
  input,
} from "react-bootstrap";

init("user_5NV2bfai8JGxgtN18iyCT");

class ContactForm extends Component {
  state = { name: "", email: "", subject: "", message: "" };

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: "szscode2727@gmail.com",
      subject: subject,
      message_html: message,
    };
    emailjs.send(
      "gmail",
      "template_dlokqea",
      templateParams,
      "user_5NV2bfai8JGxgtN18iyCT"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <div>
        {" "}
        <h1 className="p-heading1">Get in Touch</h1>{" "}
        <Form onSubmit={this.handleSubmit.bind(this)}>
          {" "}
          <FormGroup controlId="formBasicEmail">
            {" "}
            <label className="text-muted">Email address</label>{" "}
            <input
              type="email"
              name="email"
              value={this.state.email}
              className="text-primary"
              onChange={this.handleChange.bind(this, "email")}
              placeholder="Enter email"
            />{" "}
          </FormGroup>
          <FormGroup controlId="formBasicName">
            {" "}
            <label className="text-muted">Name</label>{" "}
            <input
              type="text"
              name="name"
              value={this.state.name}
              className="text-primary"
              onChange={this.handleChange.bind(this, "name")}
              placeholder="Name"
            />{" "}
          </FormGroup>
          <FormGroup controlId="formBasicSubject">
            {" "}
            <label className="text-muted">Subject</label>{" "}
            <input
              type="text"
              name="subject"
              className="text-primary"
              value={this.state.subject}
              onChange={this.handleChange.bind(this, "subject")}
              placeholder="Subject"
            />{" "}
          </FormGroup>
          <FormGroup controlId="formBasicMessage">
            {" "}
            <label className="text-muted">Message</label>{" "}
            <input
              type="textarea"
              name="message"
              className="text-primary"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
            />{" "}
          </FormGroup>
          <Button variant="primary" type="submit" onSubmit={this.handleSubmit}>
            {" "}
            Submit{" "}
          </Button>{" "}
        </Form>{" "}
      </div>
    );
  }
}

export default ContactForm;
