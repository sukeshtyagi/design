import React from "react";
import style from "./EnterDetailsPage.module.css";
import styles from "./TeachingCertification.module.css";
import buttonstyle from "./DescriptionPage.module.css"
function TeachingCertification({ handleStepChange }) {
  return (
    <div className={style.contentDiv}>
      <div className={style.topDiv}>
        <p className={style.heading}>Teaching Certification</p>
        <p className={style.stepNumber}>3 of 6 Completed</p>
      </div>
      <img
        src="/images/vendorLogin/indicatorLevel3.svg"
        alt=""
        className="progressBar"
      />
      <div className={styles.form}>
        <div className={styles.teachingCertificate}>
          <input type="checkbox" className={styles.checkBox} />I don’t have a
          teaching certificate
        </div>

        <div className={style.subjectDiv}>
          <input
            type="text"
            placeholder="Subject"
            className={style.inputCity}
          />
          <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
        </div>

        <div className={style.subjectDiv}>
          <input
            type="text"
            placeholder="Certificate"
            className={style.inputCity}
          />
          <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
        </div>

        <div className={style.subjectDiv}>
          <input
            type="text"
            placeholder="Description"
            className={style.inputCity}
          />
        </div>

        <div className={style.subjectDiv}>
          <input
            type="text"
            placeholder="Issued by"
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
        <p className={styles.addNewCertificate}>
          + Add New Teaching Certificate
        </p>
      </div>
      <div className={buttonstyle.buttonContainer}>
        <button
          className={buttonstyle.backButton}
          onClick={() => {
            handleStepChange(2);
          }}
        >
          Back
        </button>{" "}
        <button
          className={buttonstyle.continueButton}
          onClick={() => {
            handleStepChange(4);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default TeachingCertification;
