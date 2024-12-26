import { services } from "@/constants";
import React from "react";

const HomeServicesView = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">SERVICES I OFFER</h2>

      <div className="services__container container grid">
        {services.map((service, index) => (
          <article className="services__card" key={index}>
            <div className="services__icon">
              <div className="services__circle"></div>
              <span className="icon">{service.icon}</span>
            </div>
            <h3 className="services__name">{service.name}</h3>
            <p className="services__description">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomeServicesView;
