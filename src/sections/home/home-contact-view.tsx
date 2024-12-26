import React from "react";

const HomeContactView = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">CONTACT ME</h2>
      <div className="contact__container container grid">
        <form action="" className="contact__form grid" id="contact-form">
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
          <button className="button contact__button">Send Message</button>

          <p className="contact__message" id="contact-message">
            Message
          </p>
        </form>
      </div>
    </section>
  );
};

export default HomeContactView;
