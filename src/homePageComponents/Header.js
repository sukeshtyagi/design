import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/Header.module.css";

function Header({ dekstopLogin }) {
  const [showHeaderOption, setShowHeaderOption] = useState(false);
  const [showButtonOption, setShowButtonOption] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setShowHeaderOption(false);
        setShowButtonOption(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className={`${style.outerContainer}  box-border w-full h-[88px] mx-auto pt-[24px]`}
    >
      <div
        className={`${style.headerContainer} w-[1128px] h-[40px] mx-auto`}
        ref={headerRef}
      >
        <div className={`${style.leftDiv}`}>
          <img
            src="/images/logo.svg"
            alt="Logo of app"
            className="box-border w-[194px] h-[30px]"
          />
        </div>

        <div className={style.rightDiv}>
          <div className={`${style.optionsContainer} `}>
            <p className={`${style.navItem1}  box-border`}>Home</p>

            <p className={`${style.navItem2}  box-border`}>Categories</p>

            <p className={`${style.navItem3}  box-border`}>
              Raise Startup Funds
            </p>

            <p className={`${style.navItem4}  box-border`}>Investors</p>
          </div>

          <div className={`${style.btnDiv}`}>
            {dekstopLogin && (
              <p className={`${style.noAccountPara}`}>Don't have an account</p>
            )}

            {!dekstopLogin && (
              <button className={`${style.loginBtn}`}>Login/Sign Up</button>
            )}
            <button className={`${style.donateBtn}`}>Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
