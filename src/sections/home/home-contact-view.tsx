"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { RiMailLine, RiPhoneLine, RiMapPinLine } from "react-icons/ri";

const contactInfo = [
  {
    icon: <RiMailLine />,
    label: "Email",
    value: "jayedbgh@gmail.com",
    action: "mailto:jayedbgh@gmail.com",
  },
  {
    icon: <RiPhoneLine />,
    label: "Phone",
    value: "+880123456789",
    action: "tel:+880123456789",
  },
  {
    icon: <RiMapPinLine />,
    label: "Address",
    value: "Dhaka, Bangladesh",
    action: null, // No click action for address
  },
];

const HomeContactView = () => {
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

  const handleClick = (action: string | null) => {
    if (action) {
      window.location.href = action;
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">CONTACT ME</h2>
      <div className="contact__container container grid">
        <form
          className="contact__form grid"
          id="contact-form"
          // onSubmit={sendEmail}
          action="https://formsubmit.co/2a5083e7a181f93f5ec28e6accc6aa9c"
          method="POST"
        >
          <div>
            <h3>Contact Information</h3>
            <div className="mt-2">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 mb-2 cursor-pointer hover:text-blue-500 transition duration-300"
                  onClick={() => handleClick(info.action)}
                  title={info.label}
                >
                  <span className="text-xl text-gray-600">{info.icon}</span>
                  <p>
                    <strong>{info.label}:</strong>{" "}
                    <span className={info.action ? "underline" : ""}>
                      {info.value}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
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
            {stateMessage}
          </p>
        </form>
      </div>
    </section>
  );
};

export default HomeContactView;
