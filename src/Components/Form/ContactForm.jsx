import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessageVisible(true);
      setSuccessMessageVisible(false);
      setTimeout(() => setErrorMessageVisible(false), 3000);
      return;
    }

    const templateParams = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };

    emailjs
      .send(
        "service_hmk73hm",
        "template_jl3rutz",
        templateParams,
        "tzbX7s7I8ZXk5KsB7"
      )
      .then(
        () => {
          setSuccessMessageVisible(true);
          setErrorMessageVisible(false);

          setFirstName("");
          setLastName("");
          setEmail("");
          setSubject("");
          setMessage("");

          setTimeout(() => setSuccessMessageVisible(false), 3000);
        },
        (error) => {
          console.error(error);
          setErrorMessageVisible(true);
          setTimeout(() => setErrorMessageVisible(false), 3000);
        }
      );
  };

  return (
    <div className="form-layout-wrapper">
      <div className="card form-layout">
        <h3 className="title-heading">
          Let's Talk About Your Next Project
        </h3>

        {successMessageVisible && (
          <div className="alert success">
            <span className="check-icon">
              <i className="fa-solid fa-check"></i>
            </span>
            <p className="text-center">
              Thank you! Message sent successfully.
            </p>
          </div>
        )}

        {errorMessageVisible && (
          <div className="alert error">
            <span className="cross-icon">
              <i className="fa-solid fa-xmark"></i>
            </span>
            <p className="text-center">
              Oops! Something went wrong.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="form">
          <div className="row row-cols-md-2 row-cols-1 g-3">
            <div className="col">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row row-cols-md-2 row-cols-1 g-3">
            <div className="col">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
          </div>

          <textarea
            rows="5"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          {/* ORIGINAL BUTTON DESIGN RESTORED */}
          <div className="form-button-container">
            <button type="submit" className="btn btn-accent">
              <span className="btn-title">
                <span>Send a Message</span>
              </span>
              <span className="icon-circle">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;