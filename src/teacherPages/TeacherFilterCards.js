import React, { useState } from "react";
import style from "./TeacherFilterCards.module.css";
import DropDown from "../commonComponents/DropDown";

const filterArray = [
  "Sort By",
  "Level",
  "Gender",
  "Price per lesson",
  "Specialities",
  "Languages Known",
  "Mode of Teaching",
];

export default function Trail2() {
  const [filterImage, setFilterImage] = useState("/images/doctor/filter.svg");

  return (
    <div className={style.filterCardContainer}>
      <div
        className={style.specOuter1}
        onMouseEnter={() => setFilterImage("/images/doctor/hoverFilter.svg")}
        onMouseLeave={() => setFilterImage("/images/doctor/filter.svg")}
      >
        <img src={filterImage} alt="Filter Icon" />
      </div>
      {filterArray.map((criterion) => (
        <DropDown
          key={criterion} 
          option1="option 1"
          option2="option 2"
          option3="option 3"
          filterHeading={criterion}
        />
      ))}
    </div>
  );
}
