import React from "react";
import HomeHeroView from "../home-hero-view";
import HomeProjectsView from "../home-projects-view";
import HomeServicesView from "../home-services-view";
import HomeExperienceView from "../home-experience-view";
import HomeContactView from "../home-contact-view";
import HomeBlogView from "../home-blog-view";
import EducationSection from "../home-education-view";

const HomePageView = () => {
  return (
    <main className="main">
      <HomeHeroView />
      <HomeProjectsView />
      <HomeServicesView />
      <HomeExperienceView />
      <HomeBlogView />
      <EducationSection />
      <HomeContactView />
    </main>
  );
};

export default HomePageView;
