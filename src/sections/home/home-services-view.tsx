import { RiCodeBoxLine } from "@remixicon/react";
import React from "react";

const HomeServicesView = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">RECENT PROJECT</h2>

      <div className="services__container container grid">
        <article className="services__card">
          <div className="services__icon">
            <div className="services__circle"></div>
            <span className="icon">
              <RiCodeBoxLine />
            </span>
          </div>

          <h3 className="services__name">my services name</h3>
          <p className="services__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            voluptas unde illo velit impedit itaque fugiat quo aut. Architecto
            id iste aspernatur quidem alias ab asperiores porro quaerat
            adipisci!
          </p>
        </article>
      </div>
    </section>
  );
};

export default HomeServicesView;
