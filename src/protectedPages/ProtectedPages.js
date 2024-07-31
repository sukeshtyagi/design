import React from "react";
import UserDashboard from "../userDashboard/UserDashboard";
import HomePage from "../homePageComponents/HomePage";

function ProtectedPages({ homepageProp, userDashboardProp }) {

  const jwtToken = localStorage.getItem("jwtToken");

  if (userDashboardProp && jwtToken) {
    return <UserDashboard />;
  } else if (homepageProp && jwtToken) {
    return <HomePage userDashboard="true" />;
  } else {
    return <HomePage />;
  }
}

export default ProtectedPages;
