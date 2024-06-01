import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/Header.module.css";

function Header() {
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
      className={`${style.outerContainer}  box-border w-screen h-[88px] xl1:w-[1440px] mx-auto pt-[24px]`}
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

        {/*
        <div className="svgDiv box-border relative block bp1:hidden cursor-pointer">
          <FontAwesomeIcon
            icon={faHouse}
            className="box-border w-6 h-6 text-red-400"
            onClick={() => {
              setShowHeaderOption(!showHeaderOption);
              setShowButtonOption(false);
            }}
          />
          {showHeaderOption && (
            <div className="headerOptions box-border w-fit absolute top-[40px] left-[-30px] px-1 rounded-lg bg-appGreen flex flex-col gap-2 text-black">
              <p className="option box-border px-1 hover:text-red-600">Home</p>
              <p className="option box-border px-1 hover:text-red-600">
                Categories
              </p>
              <p className="option box-border px-1 hover:text-red-600">
                Raise Startup Funds
              </p>
              <p className="option box-border px-1 hover:text-red-600">
                Investors
              </p>
            </div>
          )}
        </div>
 */}

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
            <button className={`${style.loginBtn}`}>Login/Sign Up</button>
            <button className={`${style.donateBtn}`}>Donate Now</button>
          </div>
        </div>

        {/*
        <div className="svgDiv2 box-border block sm:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="box-border w-6 h-6 text-red-400"
            onClick={() => {
              setShowHeaderOption(false);
              setShowButtonOption(!showButtonOption);
            }}
          />
          {showButtonOption && (
            <div className="btnOptions box-border absolute top-[70px] right-[5px] px-1 rounded-lg bg-appGreen flex flex-col gap-2 text-black">
              <p className="option box-border px-1 hover:text-red-600">
                Login / Sign Up
              </p>
              <p className="option box-border px-1 hover:text-red-600">
                Donate Now
              </p>
            </div>
          )}
        </div>
 */}
      </div>
    </div>
  );
}

export default Header;
