import Link from "next/link";
import React from "react";

const HomeHeroView = () => {
  return (
    <main className="main">
      {/* home */}
      <section className="home section" id="home">
        <div className="home__container container grid">
          {/* profile */}
          <div className="profile">
            <img
              src="assets/img/home-profil.png"
              alt=""
              className="profile__img"
            />
            <div className="profile__data">
              <h1 className="profile__name">
                name <br /> Gallers
              </h1>

              <div className="profile__buttons">
                <Link href="#projects" className="button">
                  Proects
                </Link>
                <Link href="#services" className="button button__black">
                  Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeHeroView;
