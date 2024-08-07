import React from "react";
import UserDashboard from "../userDashboard/UserDashboard";
import HomePage from "../homePageComponents/HomePage";
import FreeListing from "../listingPages/FreeListing";

function ProtectedPages({ homepageProp, userDashboardProp }) {
  const jwtToken = localStorage.getItem("jwtToken");
  const userId = localStorage.getItem("userId");

  if (userDashboardProp && jwtToken) {
    return <UserDashboard />;
  } else if (homepageProp && jwtToken) {
    return <HomePage userDashboard="true" />;
  } else if (userId) {
    return <FreeListing freeListingProp="true" />;
  } else {
    return <HomePage />;
  }
}

export default ProtectedPages;
