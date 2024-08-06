import React from "react";
import style from "./EnterDetailsPage.module.css";
function EnterDetailsPage({ handleStepChange }) {
  return (
    <div className={style.contentDiv}>
      <div className={style.topDiv}>
        <p className={style.heading}>Enter your Details</p>
        <p className={style.stepNumber}>1 of 6 Completed</p>
      </div>
      <img
        src="/images/vendorLogin/indicator.svg"
        alt=""
        className="progressBar"
      />

      <div className={style.form}>
        <div className={style.nameContainer}>
          <div className={style.titleDiv}>
            <p className={style.title}>Title</p>
            <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
          </div>
          <input type="text" placeholder="Name" className={style.input} />
        </div>

        <div className={style.genderDiv}>
          <input
            type="text"
            placeholder="Gender"
            className={style.inputGender}
          />

          <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
        </div>

        <div className={style.mobileNumberContainer}>
          <div className={style.mobileTopDiv}>
            <div className={style.code}>
              <img src="/images/vendorLogin/flag.svg" alt="" className="" />
              <input type="text" placeholder="+91" className={style.input3} />
            </div>
            <input
              type="text"
              placeholder="Mobile Number"
              className={style.input}
            />
          </div>
          <p className={style.addNewNumber}>+ Add Another Mobile Number</p>
        </div>

        <div className={style.whatsAppNumberContainer}>
          <div className={style.mobileTopDiv}>
            <div className={style.code}>
              <img src="/images/vendorLogin/flag.svg" alt="" className="" />
              <input type="text" placeholder="+91" className={style.input3} />
            </div>
            <input
              type="text"
              placeholder="Whatsapp Number"
              className={style.input}
            />
          </div>

          <div className={style.whatsAppBottomContainer}>
            <p className={style.addNewNumber}>+ Add Landline Number</p>
            <div className={style.addNewNumber2}>
              <input type="checkbox" className={style.checkBox} /> Same as
              Mobile Number
            </div>
          </div>
        </div>

        <div className={style.cityDiv}>
          <input type="text" placeholder="City" className={style.inputCity} />
          <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
        </div>

        <div className={style.locationDiv}>
          <input
            type="text"
            placeholder="Location"
            className={style.inputCity}
          />
          <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
        </div>

        <div className={style.subjectDiv}>
          <input
            type="text"
            placeholder="Subject"
            className={style.inputCity}
          />
          <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
        </div>

        <div className={style.syllabusDiv}>
          <input
            type="text"
            placeholder="Syllabus Taught"
            className={style.inputCity}
          />
          <img src="/images/vendorLogin/arrow.svg" alt="" className="" />
        </div>
      </div>
      <button
        className={style.continue}
        onClick={() => {
          handleStepChange(2);
        }}
      >
        Continue
      </button>
    </div>
  );
}

export default EnterDetailsPage;
