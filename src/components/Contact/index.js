import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { Button } from "react-bootstrap";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact Me!</h1>
      <div class="card">
        <h5 class="mt-3">Email Me</h5>
        <i class="fas fa-envelope"></i>
        <span class="contact-text mx-2">
          Reach out via email, and let's discuss your next project!
        </span>
        <div class="contact-button">
          <a
            href="mailto:michellechristine.s91@gmail.com"
            class="card-link cnt-btn email-btn"
          >
            Email me!
          </a>
        </div>
      </div>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onBlur={handleChange}
          />
        </div>
        <div className="field">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <Button variant="outline-secondary">Submit</Button>
      </form>
    </section>
  );
}

export default ContactForm;
