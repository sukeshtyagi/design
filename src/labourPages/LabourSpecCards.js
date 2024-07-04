import React, { useState } from "react";
import style from "../doctorPages/DoctorListing.module.css";
export function SpecCards() {
  const [activeSpec, setActiveSpec] = useState("Maid");

  const handleClick = (index) => {
    setActiveSpec(index);
  };

  const specialityArray = [
    "Maid",
    "Electrician",
    "Plumber",
    "Carpenter",
    "Gardner",
    "Nursing Care",
    "Mason",
    "Pest Control",
    "Driver",
    "AC Repair",
  ];

  return (
    <div className={style.specCardWrapper}>
      <div className={style.specCardContainer}
      style={{gap:"15px"}}
      >
        {specialityArray.map((speciality, index) => (
          <div
            key={index}
            className={`${style.specOuter} ${
              activeSpec === speciality ? style.activeSpec : ""
            }`}
            onClick={() => handleClick(speciality)}
          >
            <p className={style.title}>{speciality}</p>
          </div>
        ))}
      </div>
      <div className={style.arrowContainer}>
        <img src="/images/doctor/specArrow.svg" alt="" />
      </div>
    </div>
  );
}

export function LabourFilterCards() {
  const [filterImage, setFilterImage] = useState("/images/doctor/filter.svg");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filterArray = [
    "Sort By",
    "Price",
    "Gender",
    "Age",
    "Experience",
    "Availability",
    "Type of Service",
    "Languages Known",
  ];

  return (
    <div className={style.filterCardContainer}>
      <div
        className={style.specOuter1}
        onMouseEnter={() => setFilterImage("/images/doctor/hoverFilter.svg")}
        onMouseLeave={() => setFilterImage("/images/doctor/filter.svg")}
      >
        <img src={filterImage} alt="" />
      </div>
      {filterArray.map((criterion, index) => (
        <div
          key={index}
          className={style.specOuter2}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <p className={style.criterion}>{criterion}</p>
          <img
            src={
              hoveredIndex === index
                ? "/images/doctor/hoverDownArrow.svg"
                : "/images/doctor/downArrow.svg"
            }
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
