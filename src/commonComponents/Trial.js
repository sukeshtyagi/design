import React, { useState } from "react";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import DropDown from "../commonComponents/DropDown";

export function DoctorSpecialityCards() {
  const [activeSpec, setActiveSpec] = useState("Dentist");
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
