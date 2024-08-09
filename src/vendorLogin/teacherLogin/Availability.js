import React, { useState } from "react";
import style from "./EnterDetailsPage.module.css";
import buttonstyle from "./DescriptionPage.module.css";
import styles from "./Availability.module.css";
import { addTeacherAvailability } from "../../axios/teacherVendorLogin/VendorLogin";

function Availability({ handleStepChange }) {
  const [availability, setAvailability] = useState({
    monday: { checked: false, from: "", to: "" },
    tuesday: { checked: false, from: "", to: "" },
    wednesday: { checked: false, from: "", to: "" },
    thursday: { checked: false, from: "", to: "" },
    friday: { checked: false, from: "", to: "" },
    saturday: { checked: false, from: "", to: "" },
    sunday: { checked: false, from: "", to: "" },
  });

  const handleCheckboxChange = (day) => {
    setAvailability((prevState) => ({
      ...prevState,
      [day]: { ...prevState[day], checked: !prevState[day].checked },
    }));
  };

  const handleInputChange = (day, field, value) => {
    setAvailability((prevState) => ({
      ...prevState,
      [day]: { ...prevState[day], [field]: value },
    }));
  };

  /*
  const isContinueDisabled = () => {
    const res = Object.values(availability).some(
      (day) => day.checked && day.from && day.to
    );

    console.log(res);
    return !Object.values(availability).some(
      (day) => day.checked && day.from && day.to
    );
  };
  */

  const handleContinue = async () => {
    const days = Object.keys(availability).filter(
      (day) => availability[day].checked
    );
    const times = days.map((day) => ({
      open: availability[day].from,
      close: availability[day].to,
    }));

    const payload = {
      days,
      times,
    };

    const vendorId = localStorage.getItem("vendorId");

    try {
      const response = await addTeacherAvailability(vendorId, payload);
      if (response.statusText === "OK") {
        handleStepChange(6);
      }
    } catch (error) {
      console.error("Error submitting availability:", error);
    }
  };

  return (
    <div className={style.contentDiv}>
      <div className={style.topDiv}>
        <p className={style.heading}>Enter your Details</p>
        <p className={style.stepNumber}>5 of 6 Completed</p>
      </div>
      <img
        src="/images/vendorLogin/indicatorLevel5.svg"
        alt=""
        className="progressBar"
      />

      <div className={styles.form}>
        {Object.keys(availability).map((day) => (
          <div className={styles.dayContainer} key={day}>
            <div className={styles.addNewNumber2}>
              <input
                type="checkbox"
                className={styles.checkBox}
                checked={availability[day].checked}
                onChange={() => handleCheckboxChange(day)}
              />{" "}
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </div>
            <div className={styles.dateContainer}>
              <div className={styles.fromDate}>
                <input
                  type="text"
                  placeholder="From"
                  className={styles.inputCity}
                  value={availability[day].from}
                  onChange={(e) =>
                    handleInputChange(day, "from", e.target.value)
                  }
                  disabled={!availability[day].checked}
                />
                <img
                  src="/images/vendorLogin/arrow.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </div>

              <div className={styles.toDate}>
                <input
                  type="text"
                  placeholder="To"
                  className={styles.inputCity}
                  value={availability[day].to}
                  onChange={(e) => handleInputChange(day, "to", e.target.value)}
                  disabled={!availability[day].checked}
                />
                <img
                  src="/images/vendorLogin/arrow.svg"
                  alt=""
                  className="cursor-pointer"
                />
              </div>
            </div>

            <p className={styles.timeSlot}>+ Add another time slot</p>
          </div>
        ))}

        <div
          className={buttonstyle.buttonContainer}
          style={{ marginTop: "-6px" }}
        >
          <button
            className={buttonstyle.backButton}
            onClick={() => {
              handleStepChange(4);
            }}
          >
            Back
          </button>{" "}
          <button
            className={`${buttonstyle.continueButton} `}
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Availability;
