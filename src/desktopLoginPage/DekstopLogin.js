import React from "react";
import Header from "../homePageComponents/Header";
import Footer from "../homePageComponents/Footer";

function DekstopLogin() {
  return (
    <div className="appContainer box-border w-screen xl1:w-[1440px] mx-auto">
      <Header dekstopLogin="true" />
      <Footer />
    </div>
  );
}

export default DekstopLogin;
