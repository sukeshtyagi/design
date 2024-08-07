import React from "react";
import style from "./EnterDetailsPage.module.css";
import buttonstyle from "./DescriptionPage.module.css";
import styles from "./Availability.module.css";

function Availability({ handleStepChange }) {
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
        <div className={styles.dayContainer}>
          <div className={styles.addNewNumber2}>
            <input type="checkbox" className={styles.checkBox} /> Monday
          </div>
          <div className={styles.dateContainer}>
            <div className={styles.fromDate}>
              <input
                type="text"
                placeholder="From"
                className={styles.inputCity}
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
              />
              <img
                src="/images/vendorLogin/arrow.svg"
                alt=""
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className={styles.dateContainer}>
            <div className={styles.fromDate}>
              <input
                type="text"
                placeholder="From"
                className={styles.inputCity}
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

        <div className={styles.dayContainer}>
          <div className={styles.addNewNumber2}>
            <input type="checkbox" className={styles.checkBox} /> Tuesday
          </div>
          <div className={styles.dateContainer}>
            <div className={styles.fromDate}>
              <input
                type="text"
                placeholder="From"
                className={styles.inputCity}
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

        <div className={styles.dayContainer}>
          <div className={styles.addNewNumber2}>
            <input type="checkbox" className={styles.checkBox} /> Wednesday
          </div>
          <div className={styles.dateContainer}>
            <div className={styles.fromDate}>
              <input
                type="text"
                placeholder="From"
                className={styles.inputCity}
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

        <div className={styles.dayContainer}>
          <div className={styles.addNewNumber2}>
            <input type="checkbox" className={styles.checkBox} /> Thursday
          </div>
          <div className={styles.dateContainer}>
            <div className={styles.fromDate}>
              <input
                type="text"
                placeholder="From"
                className={styles.inputCity}
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

        <div className={styles.dayContainer}>
          <div className={styles.addNewNumber2}>
            <input type="checkbox" className={styles.checkBox} /> Friday
          </div>
          <div className={styles.dateContainer}>
            <div className={styles.fromDate}>
              <input
                type="text"
                placeholder="From"
                className={styles.inputCity}
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

        <div className={styles.dayContainer}>
          <div className={styles.addNewNumber2}>
            <input type="checkbox" className={styles.checkBox} /> Saturday
          </div>
          <div className={styles.dateContainer}>
            <div className={styles.fromDate}>
              <input
                type="text"
                placeholder="From"
                className={styles.inputCity}
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

        <div className={styles.dayContainer}>
          <div className={styles.addNewNumber2}>
            <input type="checkbox" className={styles.checkBox} /> Sunday
          </div>
          <div className={styles.dateContainer}>
            <div className={styles.fromDate}>
              <input
                type="text"
                placeholder="From"
                className={styles.inputCity}
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
            className={buttonstyle.continueButton}
            onClick={() => {
              handleStepChange(6);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Availability;
