import React from "react";
import style from "./Desktopsignup.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
        {() => (
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
                placeholder="2"
                className={`${style.digit1} placeholder-black`}
                maxLength="1"
              />

              <ErrorMessage
                name="digit1"
                component="div"
                className="error absolute top-[40px] text-red-500 text-xs"
              />
              <Field
                type="text"
                name="digit2"
                placeholder="2"
                className={`${style.digit1} placeholder-black`}
                maxLength="1"
              />
              <ErrorMessage
                name="digit2"
                component="div"
                className="error absolute top-[40px] left-[83px] text-red-500 text-xs"
              />
              <Field
                type="text"
                name="digit3"
                placeholder="-"
                className={`${style.digit1} placeholder-black`}
                maxLength="1"
              />
              <ErrorMessage
                name="digit3"
                component="div"
                className="error absolute top-[40px] left-[172px] text-red-500 text-xs"
              />
              <Field
                type="text"
                name="digit4"
                placeholder="-"
                className={`${style.digit1} placeholder-black relative`}
                maxLength="1"
              />
              <ErrorMessage
                name="digit4"
                component="div"
                className="error absolute top-[40px] left-[255px] text-red-500 text-xs"
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
