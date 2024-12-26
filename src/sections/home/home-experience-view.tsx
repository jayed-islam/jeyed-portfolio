import React from "react";

const HomeExperienceView = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">eXPERIENCE OR WORK</h2>
      <div className="experience__container container grid">
        <article className="experience__card">
          <h2 className="experience__company">experince company</h2>
          <div className="experience__data">
            <h3 className="experience__profession">web development</h3>
            <span className="experience__date">12-12-2</span>
            <p className="experience__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              commodi?
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default HomeExperienceView;
