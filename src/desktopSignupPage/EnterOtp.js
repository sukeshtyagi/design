import React from "react";
import style from "./Desktopsignup.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

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

  // Function to check if a string contains only digits
  const containsOnlyDigits = (value) => {
    return /^\d+$/.test(value);
  };

  return (
    <div className={style.otpOverlay}>
      <Formik
        initialValues={{ digit1: "", digit2: "", digit3: "", digit4: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission
          console.log(values);
          navigate("/profile");
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
            <button type="submit" className={style.verify}>
              Verify
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EnterOtp;
