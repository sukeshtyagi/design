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
import FAQ from "./FAQ";
import CustomerStories from "./CustomerStories";
function HomePage() {
  return (
    <>
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
      <LatestBlogs />
      <Miss />
      <Footer />
    </>
  );
}

export default HomePage;
