import React, { useState } from "react";
import style from "./Desktopsignup.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../homePageComponents/Header";
function DesktopSignup() {
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required").min(8, "Password Too Short"),
  });

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="desktopLoginContainer box-border w-screen xl1:w-[1440px] mx-auto">
      <Header signup="true" />
      <div
        className={style.container}
        style={{
          backgroundImage: "url(/images/miss/background.svg)",
          backgroundPosition: "10px -90px",
        }}
      >
        <div className={style.signupInnerContainer}>
          <div className={style.signupLeft}>
            <div className={style.signupLeftTop}>
              <div className={style.signUpHeadingDiv}>
                <h1 className={style.signUpHeading}>
                  Welcome to{" "}
                  <span className={style.signUpHeadingSpan}>DECATLOG</span>
                </h1>
                <p className={style.signUpPara}>
                  Empowering Communities: Connecting Professionals and Funding
                  Initiatives
                </p>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                // onSubmit={}
              >
                <Form>
                  <div className={`${style.signupInputDiv} relative`}>
                    <Field
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      className={`${style.inputNameSignup} outline-none hover:border-appGreen cursor-pointer`}
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="error absolute top-[55px] text-center w-full text-red-500"
                    />

                    <Field
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className={`${style.inputEmailSignup} outline-none hover:border-appGreen cursor-pointer`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error absolute top-[140px] text-center w-full text-red-500"
                    />

                    <div
                      className={`${style.inputPasswordSignup} flex justify-between outline-none hover:border-appGreen cursor-pointer`}
                    >
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="bg-transparent outline-none"
                      />

                      {!showPassword && (
                        <img
                          src="/images/miss/password.svg"
                          alt=""
                          onClick={() => setShowPassword(!showPassword)}
                          className="hover:ring-2 ring-offset-4 hover:ring-appGreen"
                        />
                      )}

                      {showPassword && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 text-gray-500 font-bold hover:ring-2 ring-offset-4 hover:ring-appGreen"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      )}
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error absolute top-[220px] text-center w-full text-red-500"
                    />

                    <button
                      type="submit"
                      className={`${style.buttonSignup} hover:ring ring-offset-4 hover:ring-appGreen`}
                    >
                      Create an Account
                    </button>
                  </div>
                </Form>
              </Formik>
              <div className={style.leftBtmSignup}>
                <div className={style.segregationDiv}>
                  <div className={style.segLeft}></div>
                  <p className={style.segPara}>OR</p>
                  <div className={style.segRight}></div>
                </div>

                <div className={style.iconDivSignup}>
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
                By using Decatlog, you agree to our privacy policy, and our
                terms and conditions
              </p>
            </div>
            <div className={style.signupLeftBtm}>
              <p className={style.signupLeftBtmPara}>
                Join <span className={style.signupLeftBtmParaSpan}>500+</span>{" "}
                Happy Customers
              </p>
              <div className={style.sparkle}>
                <img
                  src="/images/miss/sparkle.svg"
                  alt=""
                  className="mt-[17.41px] ml-[16.76px]"
                />
              </div>
            </div>
          </div>
          <div className={style.signupRight}>
            <img
              src="/images/blogs/signup.svg"
              alt=""
              className={style.signupRightImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopSignup;
