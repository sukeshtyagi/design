import React, { useState } from "react";
import style from "./DescriptionPage.module.css";
import { addTeacherDescription } from "../../axios/teacherVendorLogin/VendorLogin";

function DescriptionPage({ handleStepChange }) {
  const [description, setDescription] = useState("");
  const isDisabled = description.trim() === "";
  const vendorId = localStorage.getItem("vendorId");

  const handleContinueClick = async () => {
    const data = {
      vendorId: vendorId,
      teacherDesc: description,
    };

    try {
      const response = await addTeacherDescription(data);
      if (response.status === 200) {
        handleStepChange(3);
      }
    } catch (error) {
      console.error("Failed to add teacher description:", error);
    }
  };
  return (
    <div className={style.contentDiv}>
      <div className={style.topDiv}>
        <p className={style.heading}>Description</p>
        <p className={style.stepNumber}>2 of 6 Completed</p>
      </div>
      <img
        src="/images/vendorLogin/indicatorLevel2.svg"
        alt=""
        className="progressBar"
      />

      <div className={style.descriptionContainer}>
        <p className={style.descriptionHeading}>
          Give a brief description about yourself
        </p>

        <textarea
          className={style.description}
          placeholder="Write here...."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className={style.buttonContainer}>
        <button
          className={style.backButton}
          onClick={() => {
            handleStepChange(1);
          }}
        >
          Back
        </button>
        <button
          className={`${style.continueButton} ${
            isDisabled ? style.disabled : ""
          }`}
          onClick={() => handleContinueClick()}
          disabled={isDisabled}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default DescriptionPage;
