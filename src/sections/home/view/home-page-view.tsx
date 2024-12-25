import React from "react";
import HomeHeroView from "../home-hero-view";
import HomeProjectsView from "../home-projects-view";

const HomePageView = () => {
  return (
    <main className="main">
      <HomeHeroView />
      <HomeProjectsView />
    </main>
  );
};

export default HomePageView;
