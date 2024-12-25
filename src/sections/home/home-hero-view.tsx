import Link from "next/link";
import React from "react";
import homeProfile from "../../../public/assets/img/home-perfil.png";
import Image from "next/image";

const HomeHeroView = () => {
  return (
    <main className="main">
      {/* home */}
      <section className="home section" id="home">
        <div className="home__container container grid">
          {/* profile */}
          <div className="profile">
            <Image
              src={homeProfile}
              alt=""
              className="profile__img"
              height={500}
              width={500}
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

          {/* info */}

          <div className="info">
            <div className="info__data">
              <div className="info__circle"></div>
              <h1 className="info__name">Jayed Khan</h1>
            </div>
            <div className="info__image">
              <img
                src="assets/img/about-prefil.on"
                alt=""
                className="info__img"
              />
            </div>
            <p className="info__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              eos?
            </p>

            <Link href="#" target="_blank" className="button button__black">
              Download Cv
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeHeroView;
