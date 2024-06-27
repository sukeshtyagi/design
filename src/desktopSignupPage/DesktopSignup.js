import React, { useState } from "react";
import style from "./Desktopsignup.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../homePageComponents/Header";
import Footer from "../homePageComponents/Footer";
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
    <>
      <Header signup="true" />
      <div
        className={style.outerContainer}
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
                      className="error absolute top-[47px] text-center w-full text-red-500"
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
                      className="error absolute top-[122px] text-center w-full text-red-500"
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
                          className=""
                        />
                      )}
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error absolute top-[200px] text-center  w-full text-red-500"
                    />

                    <button type="submit" className={`${style.buttonSignup}`}>
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
                  <div className={`${style.icon1}`}>
                    <img
                      src="/images/miss/google.svg"
                      alt=""
                      className={style.iconImg1}
                    />
                  </div>

                  <div className={`${style.icon2}`}>
                    <img
                      src="/images/miss/fb.svg"
                      alt=""
                      className={style.iconImg2}
                    />
                  </div>

                  <div className={`${style.icon3}`}>
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
      <Footer />
    </>
  );
}

export default DesktopSignup;
