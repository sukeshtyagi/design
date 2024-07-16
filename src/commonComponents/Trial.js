import React from "react";
import Header from "./Header";
import Services from "../homePageComponents/Services";
import Professions from "../homePageComponents/Professions";
import Campaigns from "../homePageComponents/Campaigns";
import PreviousEngagements from "../homePageComponents/PreviousEngagements";
import Searches from "../homePageComponents/Searches";
import CustomerStories from "../homePageComponents/CustomerStories";
import FAQ from "../homePageComponents/FAQ";
import Locations from "../homePageComponents/Locations";
import NeedHelp from "../homePageComponents/NeedHelp";
import LatestBlogs from "../homePageComponents/LatestBlogs";

function Professions2() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/*
      <Header />
      <Services />
      <Professions />
      <Campaigns />
      <PreviousEngagements />
      <Searches />
      <CustomerStories />
      <FAQ />
      <Locations />
      <NeedHelp />
       */}
      <LatestBlogs />
    </div>
  );
}

export default Professions2;
