import React, { useState } from "react";
import style from "./EnterDetailsPage.module.css";
import styles from "./OtherDetails.module.css";
import { teacherDetail } from "../../axios/teacherVendorLogin/VendorLogin";

function OtherDetails() {
  const [categoryId, setCategoryId] = useState("");
  const [price, setPrice] = useState("");
  const [teachingExp, setTeachingExp] = useState("");

  const vendorId = localStorage.getItem("vendorId");

  const handleSubmit = async () => {
    const data = {
      vendorId: vendorId,
      tutionCategory: vendorId,
      teachingExperience: teachingExp,
      price: price,
    };


    try {
      const response = await teacherDetail(data);
      if (response.statusText === "OK") {
        console.log("process completed");
      }
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  return (
    <div className={style.contentDiv}>
      <div className={style.topDiv}>
        <p className={style.heading} style={{ fontSize: "20px" }}>
          Other Details
        </p>
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
            <input
              type="text"
              className={styles.input}
              placeholder="Select"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            />
            <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
          </div>
        </div>

        <div className={styles.experience}>
          <p className={styles.category}>Teaching Experience in Years</p>
          <div className={styles.inputConatiner}>
            <input
              type="text"
              className={styles.input}
              placeholder=""
              value={teachingExp}
              onChange={(e) => setTeachingExp(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.rate}>
          <p className={styles.category}>Set your hourly base rate*</p>
          <div className={styles.inputConatiner}>
            <input
              type="text"
              className={styles.input}
              placeholder="Amount in INR"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <p className={styles.rateChangeLine}>
            *You can change your base rate in settings after submission
          </p>
        </div>

        <button className={styles.continue} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default OtherDetails;
