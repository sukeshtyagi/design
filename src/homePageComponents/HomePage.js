import React from "react";
import Miss from "./Miss";
import Locations from "./Locations";
import NeedHelp from "./NeedHelp";
import PreviousEngagements from "./PreviousEngagements";
import Professions from "./Professions";
import Searches from "./Searches";
import Services from "./Services";
import Campaigns from "./Campaigns";
import LatestBlogs from "./LatestBlogs";
import FAQ from "./FAQ";
import CustomerStories from "./CustomerStories";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
function HomePage({ userDashboard }) {
  return (
    <>
      <Header userDashboard={userDashboard} />
      <Services />
      <Professions />
      <Campaigns />
      <PreviousEngagements />
      <Searches />
      <CustomerStories />
      <FAQ />
      <Locations />
      <NeedHelp />
      <LatestBlogs />
      <Miss />
      <Footer />
      {/*
       */}
    </>
  );
}

export default HomePage;
