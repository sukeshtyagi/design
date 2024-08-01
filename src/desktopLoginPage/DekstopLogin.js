import React, { useState } from "react";
import style from "./DesktopLogin.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import { loginUser } from "../axios/userFunctions/UserFucntions";

function DesktopLogin() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema1 = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required").min(8, "Password Too Short"),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await loginUser(values);

      if (response.status >= 200 && response.status < 300) {
        const { token, _id } = response.data;
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("userId", _id);
        navigate("/homepage");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setLoginError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header dekstopLogin="true" />
      <div
        className={style.outerContainer}
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

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema1}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="relative">
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email Address"
                      className={`${style.inputEmail} bg-transparent outline-none hover:border-appGreen cursor-pointer`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error absolute text-center w-full text-red-500"
                    />

                    <div
                      className={`${style.inputPassword} flex justify-between outline-none hover:border-appGreen `}
                    >
                      <Field
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="bg-transparent outline-none text-black cursor-pointer	"
                      />

                      {!showPassword && (
                        <img
                          src="/images/miss/password.svg"
                          alt=""
                          onClick={() => setShowPassword(!showPassword)}
                          className="w-[20px]"
                        />
                      )}
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error absolute text-center w-full text-red-500"
                    />
                    <p
                      className={`${style.para} hover:text-footerColor cursor-pointer`}
                    >
                      Forgot Password?
                    </p>

                    <button
                      type="submit"
                      className={`${style.button}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                    {loginError && (
                      <p className={style.errorPara}>
                        Invalid email or password. Please try again.
                      </p>
                    )}
                  </Form>
                )}
              </Formik>
            </div>

            <div className={style.rightBtm}>
              <div className={style.segregationDiv}>
                <div className={style.segLeft}></div>
                <p className={style.segPara}>OR</p>
                <div className={style.segRight}></div>
              </div>

              <div className={style.iconDiv}>
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
              By using Decatlog, you agree to our privacy policy, and our terms
              and conditions
            </p>
          </div>
        </div>
      </div>
      <Footer shadow="true" />
    </>
  );
}

export default DesktopLogin;
