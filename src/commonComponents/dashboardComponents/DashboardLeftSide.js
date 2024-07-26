import React from "react";
import style from "./DashboardLeftSide.module.css";
import { useNavigate } from "react-router-dom";

function DashboardLeftSide({
  menuItem1,
  menuItem2,
  menuItem3,
  menuItem4,
  menuItem5,
  menuItem6,
  selectedOption,
  setSelectedOption,
}) {
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const getImageSrc = (option, defaultSrc) => {
    return selectedOption === option
      ? `/images/doctorDashboard/${option}Clicked.svg`
      : defaultSrc;
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
            src={getImageSrc(
              menuItem1,
              "/images/doctorDashboard/dashboard.svg"
            )}
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
            src={getImageSrc(menuItem2, "/images/doctorDashboard/calender.svg")}
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
            src={getImageSrc(menuItem3, "/images/doctorDashboard/patient.svg")}
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
            src={getImageSrc(menuItem4, "/images/doctorDashboard/message.svg")}
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
              src={getImageSrc(
                menuItem5,
                "/images/doctorDashboard/assignment.svg"
              )}
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
            src={getImageSrc(menuItem6, "/images/doctorDashboard/payment.svg")}
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
            src={getImageSrc("settings", "/images/doctorDashboard/setting.svg")}
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
