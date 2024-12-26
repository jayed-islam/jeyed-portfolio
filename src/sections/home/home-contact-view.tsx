"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import useScrollReveal from "@/hooks/use-scroll-revel";

const HomeContactView = () => {
  const contactForm = document.getElementById("contact-form");
  const contactMessage = document.getElementById("contact-message");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);

  const sendEmail = (e: any) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID as string,
        process.env.REACT_APP_TEMPLATE_ID as string,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };

  //   contactForm?.addEventListener
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">CONTACT ME</h2>
      <div className="contact__container container grid">
        <form
          action=""
          className="contact__form grid"
          id="contact-form"
          onSubmit={sendEmail}
        >
          <div className="contact__group grid">
            <input
              type="text"
              name="user_name"
              required
              placeholder="Names"
              className="contact__input"
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder="Email"
              className="contact__input"
            />
          </div>
          <textarea
            name="user__message"
            placeholder="Message"
            id=""
            className="contact__input contact__area"
          />
          <button
            type="submit"
            className="button contact__button"
            disabled={isSubmitting}
          >
            Send Message
          </button>

          <p className="contact__message" id="contact-message">
            Message
          </p>
        </form>
      </div>
    </section>
  );
};

export default HomeContactView;
