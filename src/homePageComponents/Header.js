import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/Header.module.css";
import { useNavigate } from "react-router-dom";

function Header({ dekstopLogin, signup }) {
  const [showHeaderOption, setShowHeaderOption] = useState(false);
  const [showButtonOption, setShowButtonOption] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`${style.outerContainer} w-[1440px]`}>
      <div className={`${style.headerContainer}`}>
        <div className={`${style.leftDiv}`}>
          <img
            src="/images/logo.svg"
            alt="Logo of app"
            className="box-border w-[194px] h-[30px]"
          />
        </div>

        <div className={style.rightDiv}>
          <div className={`${style.optionsContainer} `}>
            <p
              className={`${style.navItem1}  box-border`}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </p>

            <p className={`${style.navItem2}  box-border`}>Categories</p>

            <p className={`${style.navItem3}  box-border`}>
              Raise Startup Funds
            </p>

            <p className={`${style.navItem4}  box-border`}>Investors</p>
          </div>

          <div className={`${style.btnDiv}`}>
            {(dekstopLogin || signup) && (
              <p className={`${style.noAccountPara}`}>Don't have an account</p>
            )}

            {!dekstopLogin && !signup && (
              <button
                className={`${style.loginBtn}`}
                onClick={() => {
                  navigate("/dekstopLogin");
                }}
              >
                Login/Sign Up
              </button>
            )}

            {!dekstopLogin && !signup && (
              <button className={`${style.donateBtn}`}>Donate Now</button>
            )}

            {dekstopLogin &&  (
              <button
                className={`${style.donateBtn}`}
                onClick={() => {
                  navigate("/dekstopSignup");
                }}
              >
                SignUp Now
              </button>
            )}

            {signup && (
              <button
                className={`${style.donateBtn}`}
                onClick={() => {
                  navigate("/dekstopLogin");
                }}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
