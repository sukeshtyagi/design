import React, { useState } from "react";
import style from "./DashboardLeftSide.module.css";
import { useNavigate } from "react-router-dom";

function DashboardLeftSide() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("dashboard");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className={style.leftPart}>
      <div className={style.imgDiv}>
        <img
          src="/images/doctorDashboard/logo.png"
          alt=""
          className={style.logoImage}
          onClick={() => {
            navigate("/homepage");
          }}
        />
      </div>

      <div className={style.profilePic}>
        <img
          src="/images/doctorDashboard/doctor.png"
          alt=""
          className={style.doctorImage}
        />
        <div className={style.nameContainer}>
          <p className={style.greet}>Hello,</p>
          <p className={style.name}>Dr. Ronald Richards</p>
        </div>
      </div>

      <div className={style.optionContainer}>
        <div
          className={`${style.option} ${
            selectedOption === "dashboard" ? style.optionSelected : ""
          }`}
          onClick={() => handleOptionClick("dashboard")}
        >
          <img
            src="/images/doctorDashboard/dashboard.svg"
            alt=""
            className={style.optionImage}
          />
          <p className={style.optionName}>Dashboard</p>
        </div>

        <div
          className={`${style.option} ${
            selectedOption === "appointments" ? style.optionSelected : ""
          }`}
          onClick={() => handleOptionClick("appointments")}
        >
          <img
            src="/images/doctorDashboard/calender.svg"
            alt=""
            className={style.optionImage}
          />
          <p className={style.optionName}>Appointments</p>
        </div>

        <div
          className={`${style.option} ${
            selectedOption === "patients" ? style.optionSelected : ""
          }`}
          onClick={() => handleOptionClick("patients")}
        >
          <img
            src="/images/doctorDashboard/patient.svg"
            alt=""
            className={style.optionImage}
          />
          <p className={style.optionName}>My Patients</p>
        </div>

        <div
          className={`${style.option} ${
            selectedOption === "messages" ? style.optionSelected : ""
          }`}
          onClick={() => handleOptionClick("messages")}
        >
          <img
            src="/images/doctorDashboard/message.svg"
            alt=""
            className={style.optionImage}
          />
          <p className={style.optionName}>Messages</p>
        </div>

        <div
          className={`${style.option} ${
            selectedOption === "payments" ? style.optionSelected : ""
          }`}
          onClick={() => handleOptionClick("payments")}
        >
          <img
            src="/images/doctorDashboard/payment.svg"
            alt=""
            className={style.optionImage}
          />
          <p className={style.optionName}>Payments</p>
        </div>

        <div
          className={`${style.optionSetting} ${
            selectedOption === "settings" ? style.optionSelected : ""
          }`}
          onClick={() => handleOptionClick("settings")}
        >
          <img
            src="/images/doctorDashboard/setting.svg"
            alt=""
            className={style.optionImage}
          />
          <p className={style.optionName}>Settings</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardLeftSide;
