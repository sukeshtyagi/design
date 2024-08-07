import React from "react";
import style from "./EnterDetailsPage.module.css";
import styles from "./OtherDetails.module.css";
function OtherDetails() {
  return (
    <div className={style.contentDiv}>
      <div className={style.topDiv}>
        <p className={style.heading} style={{fontSize:"20px"}}>Other Details</p>
        <p className={style.stepNumber}>6 of 6 Completed</p>
      </div>
      <img
        src="/images/vendorLogin/indicatorLevel6.svg"
        alt=""  
        className="progressBar"
      />

      <div className={styles.form}>
        <div className={styles.tuitionContainer}>
          <p className={styles.category}>Tution Category</p>
          <div className={styles.inputConatiner}>
            <input type="text" className={styles.input} placeholder="Select" />
            <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
          </div>
        </div>

        <div className={styles.experience}>
          <p className={styles.category}>Teaching Experience in Years</p>
          <div className={styles.inputConatiner}>
            <input type="text" className={styles.input} placeholder="" />
          </div>
        </div>

        <div className={styles.rate}>
          <p className={styles.category}>Set your hourly base rate*</p>
          <div className={styles.inputConatiner}>
            <input
              type="text"
              className={styles.input}
              placeholder="Amount in INR"
            />
          </div>
          <p className={styles.rateChangeLine}>
            *You can change your base rate in settings after submission
          </p>
        </div>

        <button className={styles.continue}>Submit</button>
      </div>
    </div>
  );
}

export default OtherDetails;
