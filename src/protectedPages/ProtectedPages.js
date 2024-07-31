import React from "react";
import UserDashboard from "../userDashboard/UserDashboard";
import HomePage from "../homePageComponents/HomePage";

function ProtectedPages() {
  const user = localStorage.getItem("userDetails");
  const homepage = localStorage.getItem("userDetails");
  return (
    <>
      <>{user ? <UserDashboard /> : <HomePage />}</>
    </>
  );
}

export default ProtectedPages;
