import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Miss from "./Miss";
import Locations from "./Locations";
import NeedHelp from "./NeedHelp";
import PreviousEngagements from "./PreviousEngagements";
import Professions from "./Professions";
import Searches from "./Searches";
import Services from "./Services";
import Campaigns from "./Campaigns";
import LatestBlogs from "./LatestBlogs";
function HomePage() {
  return (
    <div className="appContainer box-border w-screen xl1:w-[1440px] mx-auto">
      <Header />
      <Services />
      <Professions />
      <Campaigns />
      <PreviousEngagements />
      <Searches />
      <Locations />
      <NeedHelp />
      <LatestBlogs />
      <Miss />
      <Footer />
    </div>
  );
}

export default HomePage;
