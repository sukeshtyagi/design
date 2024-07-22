import React, { useState } from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";

export function TeacherSpecialityCards() {
  const [activeSpec, setActiveSpec] = useState("English");
  const [startIndex, setStartIndex] = useState(0);

  const specialityArray = [
    "English",
    "Maths",
    "Physics",
    "Hindi",
    "History",
    "Biology",
    "Chemistry",
    "Geography",
    "Economics",
    "Political Science",
    "Sociology",
    "Philosophy",
    "Psychology",
    "Environmental Science",
    "Statistics",
    "Computer Science",
    "Business Studies",
    "Arts",
    "Physical Education",
    "Agriculture",
  ];

  const itemsToShow = 10;
  const totalItems = specialityArray.length;
  const endIndex = startIndex + itemsToShow;

  const visibleSpecialities = [
    ...specialityArray.slice(startIndex, endIndex),
    ...specialityArray.slice(0, Math.max(0, endIndex - totalItems)),
  ];

  const handleClick = (speciality) => {
    setActiveSpec(speciality);
  };

  const handleArrowClick = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handleArrowClickLeft = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const showRightArrow =
    startIndex + itemsToShow < totalItems || totalItems <= itemsToShow;

  const showLeftArrow = startIndex > 0;

  return (
    <div className={style.specCardWrapper}>
      {showLeftArrow && (
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
      {showRightArrow && (
        <div className={style.arrowContainer} onClick={handleArrowClick}>
          <img src="/images/doctor/specArrow.svg" alt="Right Arrow" />
        </div>
      )}
    </div>
  );
}
