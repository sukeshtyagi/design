import React from "react";
import style from "../styles/Header.module.css";
import { useNavigate } from "react-router-dom";

function Header({ dekstopLogin, signup, userDashboard, professionalListing }) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      navigate("/homepage");
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className={`${style.outerContainer}`}
      style={
        (userDashboard
          ? {
              boxShadow: "0px 0px 42px 0px rgba(0, 0, 0, 0.06)",
            }
          : {},
        professionalListing
          ? {
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }
          : {})
      }
    >
      <div className={`${style.headerContainer}`}>
        <div
          className={`${style.leftDiv}`}
          style={userDashboard ? { cursor: "pointer" } : {}}
        >
          <img
            src="/images/logo.svg"
            alt="Logo of app"
            className="box-border w-[194px] h-[30px]"
            onClick={() => {
              handleNavigation();
            }}
          />
        </div>

        <div className={style.rightDiv} >
          <div className={`${style.optionsContainer} `}>
            <p
              className={`${style.navItem1}  box-border`}
              onClick={() => {
                handleNavigation();
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

          <div
            className={`${style.btnDiv}`}
            style={
              userDashboard
                ? {
                    width: "205px",
                    marginLeft: "86px",
                    gap: "30px",
                  }
                : {width:"304px"}
            }
          >
            {(dekstopLogin || signup) && (
              <p className={`${style.noAccountPara}`}>Don't have an account</p>
            )}

            {!dekstopLogin && !signup && !userDashboard && (
              <button
                className={`${style.loginBtn}`}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login/Sign Up
              </button>
            )}

            {!dekstopLogin && !signup && (
              <button className={`${style.donateBtn}`}>Donate Now</button>
            )}

            {dekstopLogin && (
              <button
                className={`${style.donateBtn}`}
                onClick={() => {
                  navigate("/register");
                }}
              >
                SignUp Now
              </button>
            )}

            {signup && (
              <button
                className={`${style.donateBtn}`}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            )}

            {userDashboard && (
              <div
                onClick={() => {
                  navigate("/profile");
                }}
              >
                <img
                  src="/images/blogs/user.svg"
                  alt=""
                  className={style.userImage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
