import React from "react";
import HomeHeroView from "../home-hero-view";
import HomeProjectsView from "../home-projects-view";
import HomeServicesView from "../home-services-view";
import HomeExperienceView from "../home-experience-view";
import HomeContactView from "../home-contact-view";

const HomePageView = () => {
  return (
    <main className="main">
      <HomeHeroView />
      <HomeProjectsView />
      <HomeServicesView />
      <HomeExperienceView />
      <HomeContactView />
    </main>
  );
};

export default HomePageView;
