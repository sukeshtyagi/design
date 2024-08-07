import React from "react";
import style from "./DescriptionPage.module.css";
function DescriptionPage({ handleStepChange 

}) {
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
        </button>{" "}
        <button
          className={style.continueButton}
          onClick={() => {
            handleStepChange(3);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default DescriptionPage;
