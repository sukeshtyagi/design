import React, { useState } from "react";
import style from "./DashboardLeftSide.module.css";
import { useNavigate } from "react-router-dom";

function DashboardLeftSide({
  menuItem1,
  menuItem2,
  menuItem3,
  menuItem4,
  menuItem5,
}) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(menuItem1);

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
            selectedOption === menuItem1 ? style.optionSelected : ""
          }`}
          onClick={() => handleOptionClick(menuItem1)}
        >
          <img
            src="/images/doctorDashboard/dashboard.svg"
            alt=""
            className={style.optionImage}
          />
          <p className={style.optionName}>{menuItem1}</p>
        </div>

        <div
          className={`${style.option} ${
            selectedOption === menuItem2 ? style.optionSelected : ""
          }`}
          onClick={() => handleOptionClick(menuItem2)}
        >
          <img
            src="/images/doctorDashboard/calender.svg"
            alt=""
            className={style.optionImage}
          />
          <p className={style.optionName}>{menuItem2}</p>
        </div>

        <div
          className={`${style.option} ${
            selectedOption === menuItem3 ? style.optionSelected : ""
          }`}
          onClick={() => handleOptionClick(menuItem3)}
        >
          <img
            src="/images/doctorDashboard/patient.svg"
            alt=""
            className={style.optionImage}
          />
          <p className={style.optionName}>{menuItem3}</p>
        </div>

        <div
          className={`${style.option} ${
            selectedOption === menuItem4 ? style.optionSelected : ""
          }`}
          onClick={() => handleOptionClick(menuItem4)}
        >
          <img
            src="/images/doctorDashboard/message.svg"
            alt=""
            className={style.optionImage}
          />
          <p className={style.optionName}>{menuItem4}</p>
        </div>

        <div
          className={`${style.option} ${
            selectedOption === menuItem5 ? style.optionSelected : ""
          }`}
          onClick={() => handleOptionClick(menuItem5)}
        >
          <img
            src="/images/doctorDashboard/payment.svg"
            alt=""
            className={style.optionImage}
          />
          <p className={style.optionName}>{menuItem5}</p>
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
