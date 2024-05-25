import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons";

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
      className="headerContainer  box-border w-10/12 mx-auto"
      ref={headerRef}
    >
      <div className="headerContainer box-border w-full h-[50px] mt-6 py-[26px] flex justify-between items-center">
        <div className="logoDiv box-border ">
          <img
            src="/images/logo.svg"
            alt="Logo of app"
            className="box-border w-[194px] h-[30px]"
          />
        </div>

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

        <div className="optionsContainer box-border cursor-pointer hidden bp1:flex text-black text-base xl1:text-xl flex justify-start items-center gap-4">
          <p className="navItemHome box-border px-2 hover:text-appGreen hover:border hover:border-appGreen hover:rounded-lg">
            Home
          </p>
          <p className="navItemCategories box-border px-2 hover:text-appGreen hover:border hover:border-appGreen hover:rounded-lg">
            Categories
          </p>
          <p className="navItemfunds box-border px-2 hover:text-appGreen hover:border hover:border-appGreen hover:rounded-lg">
            Raise Startup Funds
          </p>
          <p className="navItemInvestors box-border  px-2 hover:text-appGreen hover:border hover:border-appGreen hover:rounded-lg">
            Investors
          </p>
        </div>

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

        <div className="btnDiv box-border hidden sm:flex text-black text-base font-normal xl1:text-xl flex justify-start items-cente gap-2">
          <button className="loginBtn box-border text-appGreen border-2 border-appGreen hover:font-medium hover:text-white hover:bg-appGreen px-4 rounded-xl">
            Login/Sign Up
          </button>
          <button className="donateBtn box-border text-black border-2 border-appGreen hover:text-white hover:bg-appGreen px-4 rounded-xl">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
