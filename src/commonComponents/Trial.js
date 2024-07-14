import React from "react";
import Header from "./Header";
import Services from "../homePageComponents/Services";
import Professions from "../homePageComponents/Professions";

function Professions2() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Services />
      {/*
       */}
      <Professions />
    </div>
  );
}

export default Professions2;
