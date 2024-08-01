import React, { useRef, useState } from "react";
import style from "./Desktopsignup.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
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
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const email = localStorage.getItem("emailID");
  console.log(email);

  const digitRefs = useRef([]);

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
          try {
            setLoading(true);
            setShowError(false);

            const otp =
              values.digit1 + values.digit2 + values.digit3 + values.digit4;
            const payload = { email: email, otp: otp };
            console.log(payload);

            const response = await veriyOtp(payload);
            console.log(response);

            if (response.status >= 200 && response.status < 300) {
              console.log("OTP verified for email:", email);
              console.log("above navigatge");
              navigate("/profile");
            } else {
              console.log("error");
              setShowError(true);
            }
          } finally {
            setLoading(false);
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
              {["digit1", "digit2", "digit3", "digit4"].map((name, index) => (
                <Field
                  key={name}
                  type="text"
                  name={name}
                  placeholder="-"
                  innerRef={(el) => (digitRefs.current[index] = el)}
                  className={`${style.digit1} placeholder-black ${
                    touched[name] && errors[name] ? style.errorBorder : ""
                  } ${
                    containsOnlyDigits(values[name]) ? style.greenBorder : ""
                  }`}
                  maxLength="1"
                  onInput={(e) => {
                    if (containsOnlyDigits(e.target.value) && index < 3) {
                      digitRefs.current[index + 1].focus();
                    }
                  }}
                />
              ))}
            </div>

            <p className={style.noOtpPara}>Didn’t receive OTP?</p>
            <p className={style.resendPara}>Resend OTP</p>
            <button
              type="submit"
              className={`${style.verify} ${
                allDigitsEntered(values) && !loading ? style.activeButton : ""
              }`}
              disabled={!allDigitsEntered(values) || loading}
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
            {showError && (
              <p className={style.otpErrorMsg}>
                Invalid OTP. Please try again.
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EnterOtp;
