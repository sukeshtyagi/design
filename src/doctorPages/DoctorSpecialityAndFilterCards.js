import React, { useState } from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";

export function SpecialityCards() {
  const [activeSpec, setActiveSpec] = useState("Dentist");

  const handleClick = (index) => {
    setActiveSpec(index);
  };

  const specialityArray = [
    "Dentist",
    "Pediatrician",
    "Cardiologist",
    "Psychiatrist",
    "Dermatologist",
    "Endocrinologist",
    "Gynecologist",
    "Neurologist",
    "chiropractor",
  ];

  return (
    <div className={style.specCardWrapper}>
      <div className={style.specCardContainer}>
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

export function DoctorFilterCards() {
  const [arrowImage, setArrowImage] = useState("/images/doctor/downArrow.svg");
  const [filterImage, setFilterImage] = useState("/images/doctor/filter.svg");

  const [activeSpec2, setActiveSpec2] = useState(null);

  const handleClick2 = (index) => {
    setActiveSpec2(index);
  };

  const filterArray = [
    "Sort By",
    "Available Now",
    "Top Rated",
    "Popular",
    "Ratings",
    "Distance",
    "Quick Response",
    "Relevance",
    "Liked",
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
        <>
          {criterion !== "Sort By" && criterion !== "Top Rated" && (
            <div
              key={index}
              className={`${style.specOuter2} ${
                activeSpec2 === criterion ? style.activeSpec2 : ""
              }`}
              onClick={() => handleClick2(criterion)}
            >
              <p className={style.criterion}>{criterion}</p>
            </div>
          )}

          {criterion === "Sort By" && (
            <div
              key={index}
              className={style.specOuter3}
              onMouseEnter={() =>
                setArrowImage("/images/doctor/hoverDownArrow.svg")
              }
              onMouseLeave={() => setArrowImage("/images/doctor/downArrow.svg")}
            >
              <p className={style.criterion}>{criterion}</p>
              <img src={arrowImage} alt="" />
            </div>
          )}

          {criterion === "Top Rated" && (
            <div key={index} className={style.specOuter4}>
              <p className={style.criterion}>{criterion}</p>
              <img src="/images/doctor/star.svg" alt="" />
            </div>
          )}
        </>
      ))}
    </div>
  );
}
