import React from "react";
import Header from "../homePageComponents/Header";
import Footer from "../homePageComponents/Footer";
import style from "./DesktopLogin.module.css";
function DekstopLogin() {
  return (
    <div className="appContainer box-border w-screen xl1:w-[1440px] mx-auto">
      <Header dekstopLogin="true" />
      <div
        className={style.container}
        style={{
          backgroundImage: "url(/images/miss/background.svg)",
          backgroundPosition: "10px -90px",
        }}
      >
        <div className={style.innerDiv}>
          <div className={style.leftDiv}>
            <img
              src="/images/miss/doc.svg"
              alt=""
              className={style.leftDivImage}
            />
          </div>
          <div className={style.rightDiv}>
            <div className={style.rightTop}>
              <h1 className={style.heading}>Login to your Account</h1>

              <input
                type="text"
                name=""
                id=""
                placeholder="Email Address"
                className={`${style.inputEmail} outline-none hover:ring ring-offset-4 hover:ring-appGreen cursor-pointer`}
              />

              <input
                type="text"
                name=""
                id=""
                placeholder="Password"
                className={`${style.inputPassword} outline-none hover:ring ring-offset-4 hover:ring-appGreen cursor-pointer`}
              />

              <p
                className={`${style.para} hover:text-footerColor cursor-pointer`}
              >
                Forgot Password?
              </p>

              <button
                className={`${style.button} hover:ring ring-offset-4 hover:ring-appGreen`}
              >
                Login
              </button>
            </div>

            <div className={style.rightBtm}>
              <div className={style.segregationDiv}>
                <div className={style.segLeft}></div>
                <p className={style.segPara}>OR</p>
                <div className={style.segRight}></div>
              </div>

              <div className={style.iconDiv}>
                <div
                  className={`${style.icon1} hover:ring-2 ring-offset-4 hover:ring-appGreen`}
                >
                  <img
                    src="/images/miss/google.svg"
                    alt=""
                    className={style.iconImg1}
                  />
                </div>

                <div
                  className={`${style.icon2} hover:ring-2 ring-offset-4 hover:ring-appGreen`}
                >
                  <img
                    src="/images/miss/fb.svg"
                    alt=""
                    className={style.iconImg2}
                  />
                </div>

                <div
                  className={`${style.icon3} hover:ring-2 ring-offset-4 hover:ring-appGreen`}
                >
                  <img
                    src="/images/miss/apple.svg"
                    alt=""
                    className={style.iconImg3}
                  />
                </div>
              </div>
            </div>
            <p className={style.terms}>
              By using Decatlog, you agree to our privacy policy, and our terms
              and conditions
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DekstopLogin;
