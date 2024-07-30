import React from "react";
import style from "./Desktopsignup.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import { veriyOtp } from "../axios/Axios";

const validationSchema = Yup.object().shape({
  digit1: Yup.string()
    .matches(/^\d$/, "Must be a single digit")
    .required("Required"),
  digit2: Yup.string()
    .matches(/^\d$/, "Must be a single digit")
    .required("Required"),
  digit3: Yup.string()
    .matches(/^\d$/, "Must be a single digit")
    .required("Required"),
  digit4: Yup.string()
    .matches(/^\d$/, "Must be a single digit")
    .required("Required"),
});

function EnterOtp() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
console.log(email)
  const containsOnlyDigits = (value) => {
    return /^\d+$/.test(value);
  };

  const allDigitsEntered = (values) => {
    return (
      containsOnlyDigits(values.digit1) &&
      containsOnlyDigits(values.digit2) &&
      containsOnlyDigits(values.digit3) &&
      containsOnlyDigits(values.digit4)
    );
  };

  return (
    <div className={style.otpOverlay}>
      <Formik
        initialValues={{ digit1: "", digit2: "", digit3: "", digit4: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          const otp =
            values.digit1 + values.digit2 + values.digit3 + values.digit4;
          try {
            const payload = { "email":email, "otp":otp };
            console.log(payload)
            const response = await veriyOtp(payload);
            if (response.status >= 200 && response.status < 300) {
              console.log("OTP verified for email:", email);
              navigate("/profile");
            }
          } catch (error) {
            console.error("Error verifying OTP:", error);
          }
        }}
      >
        {({ errors, touched, values }) => (
          <Form className={style.otpOuter}>
            <h1 className={style.otpHeading}>Verify Code</h1>
            <p className={style.enterOtpPara}>
              Please enter the code we just sent to email{" "}
              <span className={style.enterOtpParaSpan}>example@email.com</span>
            </p>
            <div className={`${style.inputContainer} relative`}>
              <Field
                type="text"
                name="digit1"
                placeholder="-"
                className={`${style.digit1} placeholder-black ${
                  touched.digit1 && errors.digit1 ? style.errorBorder : ""
                } ${
                  containsOnlyDigits(values.digit1) ? style.greenBorder : ""
                }`}
                maxLength="1"
              />

              <Field
                type="text"
                name="digit2"
                placeholder="-"
                className={`${style.digit1} placeholder-black ${
                  touched.digit2 && errors.digit2 ? style.errorBorder : ""
                } ${
                  containsOnlyDigits(values.digit2) ? style.greenBorder : ""
                }`}
                maxLength="1"
              />

              <Field
                type="text"
                name="digit3"
                placeholder="-"
                className={`${style.digit1} placeholder-black ${
                  touched.digit3 && errors.digit3 ? style.errorBorder : ""
                } ${
                  containsOnlyDigits(values.digit3) ? style.greenBorder : ""
                }`}
                maxLength="1"
              />

              <Field
                type="text"
                name="digit4"
                placeholder="-"
                className={`${style.digit1} placeholder-black relative ${
                  touched.digit4 && errors.digit4 ? style.errorBorder : ""
                } ${
                  containsOnlyDigits(values.digit4) ? style.greenBorder : ""
                }`}
                maxLength="1"
              />
            </div>
            <p className={style.noOtpPara}>Didn’t receive OTP?</p>
            <p className={style.resendPara}>Resend OTP</p>
            <button
              type="submit"
              className={`${style.verify} ${
                allDigitsEntered(values) ? style.activeButton : ""
              }`}
              disabled={!allDigitsEntered(values)}
            >
              Verify
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EnterOtp;
