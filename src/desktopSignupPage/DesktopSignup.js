import React, { useState } from "react";
import style from "./Desktopsignup.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import { registerUser } from "../axios/userFunctions/UserFucntions";

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

function DesktopSignup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setshowError] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await registerUser(values);
      if (response.status >= 200 && response.status < 300) {
        localStorage.setItem("emailID", values.email);
        navigate("/enter-otp");
      }
      if (response === 400) {
        setshowError(true);
      }
    } finally {
      setSubmitting(false);
    }
  };

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
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
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
                          className="bg-transparent text-[16px] h-full outline-none "
                        />
                        <img
                          src="/images/miss/password.svg"
                          alt=""
                          onClick={() => setShowPassword(!showPassword)}
                          className="w-[20px]"
                          style={{ display: showPassword ? "none" : "block" }}
                        />
                      </div>
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error absolute top-[200px] text-center  w-full text-red-500"
                      />

                      <button
                        type="submit"
                        className={`${style.buttonSignup}`}
                        disabled={isSubmitting}
                      >
                        Create an Account
                      </button>
                      {showError && (
                        <div className={style.errorMessage}>
                          An account with this email already exists. Please use
                          a different email.
                        </div>
                      )}
                    </div>
                  </Form>
                )}
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
      <Footer shadow="true" />
    </>
  );
}

export default DesktopSignup;
