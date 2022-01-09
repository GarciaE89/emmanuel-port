import React, { useState } from "react";
import { validateEmail } from "../../util/helpers";
function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleFormChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <section className="contact-page">
      <h1 className="page-title">Contact Me</h1>
      <form id="contact-form" onSubmit={handleFormSubmit}>
        <div>
          <label
            style={{
              display: "block",
              paddingBottom: "15px",
              paddingTop: "5px",
            }}
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleFormChange}
            name="name"
            placeholder="Name"
            style={{ border: "1px solid #8c54ff" }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              paddingBottom: "15px",
              paddingTop: "5px",
            }}
            htmlFor="email"
          >
            Email Address:
          </label>
          <input
            type="email"
            defaultValue={email}
            onBlur={handleFormChange}
            name="email"
            placeholder="Email"
            style={{ border: "1px solid #8c54ff" }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              paddingBottom: "15px",
              paddingTop: "5px",
            }}
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleFormChange}
            placeholder="Message"
            style={{
              border: "1px solid #8c54ff",
              boxShadow: "2px 2px 1px var(--primary)",
            }}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
