import React, { useState } from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import DropDown from "../commonComponents/DropDown";

export function DoctorSpecialityCards({ activeSpec, setActiveSpec }) {
  const [startIndex, setStartIndex] = useState(0);

  const specialityArray = [
    "Dentist",
    "Pediatrician",
    "Cardiologist",
    "Psychiatrist",
    "Dermatologist",
    "Endocrinologist",
    "Gynecologist",
    "Neurologist",
    "Orthopedic",
    "Ophthalmologist",
    "Oncologist",
    "Urologist",
    "Rheumatologist",
    "Gastroenterologist",
    "Hematologist",
    "chiropractor",
  ];

  const visibleSpecialities = specialityArray.slice(startIndex, startIndex + 9);

  const handleClick = (speciality) => {
    setActiveSpec(speciality);
  };

  const handleArrowClick = () => {
    if (startIndex + 9 < specialityArray.length) {
      setStartIndex((prevIndex) => (prevIndex + 1) % specialityArray.length);
    }
  };

  const handleArrowClickLeft = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - 1 + specialityArray.length) % specialityArray.length
    );
  };

  return (
    <div className={style.specCardWrapper}>
      {startIndex > 0 && (
        <div className={style.arrowContainer2} onClick={handleArrowClickLeft}>
          <img
            src="/images/doctor/specArrow.svg"
            alt="Left Arrow"
            className={style.arrowImage}
          />
        </div>
      )}

      <div className={style.specCardContainer}>
        {visibleSpecialities.map((speciality, index) => (
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
      {startIndex + 9 < specialityArray.length && (
        <div className={style.arrowContainer} onClick={handleArrowClick}>
          <img src="/images/doctor/specArrow.svg" alt="Right Arrow" />
        </div>
      )}
    </div>
  );
}

export function DoctorFilterCards() {
  const [filterImage, setFilterImage] = useState("/images/doctor/filter.svg");

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
        <img src={filterImage} alt="Filter Icon" />
      </div>
      {filterArray.map((criterion, index) => (
        <React.Fragment key={index}>
          {criterion === "Sort By" && (
            <DropDown
              filterHeading={criterion}
              option1="abc"
              option2="def"
              option3="ghi"
            />
          )}
          {criterion === "Top Rated" && (
            <div className={style.specOuter4}>
              <p className={style.criterion}>{criterion}</p>
              <img src="/images/doctor/star.svg" alt="Star" />
            </div>
          )}
          {criterion !== "Sort By" && criterion !== "Top Rated" && (
            <div className={style.specOuter2}>
              <p className={style.criterion}>{criterion}</p>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
