import React, { useState } from "react";
import style from "./LeftSideMenuBar.module.css";
import { useNavigate } from "react-router-dom";

function LeftSideMenuBar({
  menuItem1,
  menuItem2,
  menuItem3,
  menuItem4,
  menuItem5,
  menuItem6,
  selectedOption,
  setSelectedOption,
}) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsMenuVisible(false);
  };

  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className={style.leftPart}>
      <div className={style.imgDiv}>
        <img
          src="/images/doctorDashboard/logo.png"
          alt="logo"
          className={style.logoImage}
          onClick={() => {
            navigate("/homepage");
          }}
        />
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={style.icon}
        onClick={toggleMenuVisibility}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <div className={style.profilePic}>
        <img
          src="/images/doctorDashboard/doctor.png"
          alt="doctor"
          className={style.doctorImage}
        />
        <div className={style.nameContainer}>
          <p className={style.greet}>Hello,</p>
          <p className={style.name}>Dr. Ronald Richards</p>
        </div>
      </div>
      {isMenuVisible && (
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

          {menuItem5 && (
            <div
              className={`${style.option} ${
                selectedOption === menuItem5 ? style.optionSelected : ""
              }`}
              onClick={() => handleOptionClick(menuItem5)}
            >
              <img
                src="/images/doctorDashboard/assignment.svg"
                alt=""
                className={style.optionImage}
              />
              <p className={style.optionName}>{menuItem5}</p>
            </div>
          )}

          <div
            className={`${style.option} ${
              selectedOption === menuItem6 ? style.optionSelected : ""
            }`}
            onClick={() => handleOptionClick(menuItem6)}
          >
            <img
              src="/images/doctorDashboard/payment.svg"
              alt=""
              className={style.optionImage}
            />
            <p className={style.optionName}>{menuItem6}</p>
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
      )}
    </div>
  );
}

export default LeftSideMenuBar;
