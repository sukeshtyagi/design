import React from "react";
import style from "./EnterDetailsPage.module.css";
import styles from "./TeachingCertification.module.css";
import buttonstyle from "./DescriptionPage.module.css";
function Education({ handleStepChange }) {
  return (
    <div className={style.contentDiv}>
      <div className={style.topDiv}>
        <p className={style.heading}>Education</p>
        <p className={style.stepNumber}>4 of 6 Completed</p>
      </div>
      <img
        src="/images/vendorLogin/indicatorLevel4.svg"
        alt=""
        className="progressBar"
      />
      <div className={styles.form}>
        <div className={styles.teachingCertificate}>
          <input type="checkbox" className={styles.checkBox} />I don’t have a
          higher education
        </div>

        <div className={style.subjectDiv}>
          <input
            type="text"
            placeholder="Institution"
            className={style.inputCity}
          />
          <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
        </div>

        <div className={style.subjectDiv}>
          <input
            type="text"
            placeholder="Qualification"
            className={style.inputCity}
          />
          <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
        </div>

        <div className={style.subjectDiv}>
          <input
            type="text"
            placeholder="Specialization(s)"
            className={style.inputCity}
          />
        </div>

        <div className={styles.dateContainer}>
          <div className={styles.fromDate}>
            <input
              type="text"
              placeholder="From"
              className={styles.inputCity}
            />
            <img
              src="/images/vendorLogin/calender.svg"
              alt=""
              className="cursor-pointer"
            />
          </div>

          <div className={styles.toDate}>
            <input type="text" placeholder="To" className={styles.inputCity} />
            <img
              src="/images/vendorLogin/calender.svg"
              alt=""
              className="cursor-pointer"
            />
          </div>
        </div>

        <button className={styles.chooseFile}>Choose File</button>
        <p className={styles.addNewCertificate} style={{ marginBottom: "0px" }}>
          + Add another education
        </p>
      </div>
      <div
        className={buttonstyle.buttonContainer}
        style={{ marginTop: "27px" }}
      >
        <button
          className={buttonstyle.backButton}
          onClick={() => {
            handleStepChange(3);
          }}
        >
          Back
        </button>{" "}
        <button
          className={buttonstyle.continueButton}
          onClick={() => {
            handleStepChange(5);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Education;
