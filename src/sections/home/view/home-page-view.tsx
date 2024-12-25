import React from "react";
import HomeHeroView from "../home-hero-view";
import HomeProjectsView from "../home-projects-view";
import HomeServicesView from "../home-services-view";

const HomePageView = () => {
  return (
    <main className="main">
      <HomeHeroView />
      <HomeProjectsView />
      <HomeServicesView />
    </main>
  );
};

export default HomePageView;
