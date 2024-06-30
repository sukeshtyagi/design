import React from "react";
import style from "./LeftDocComp.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function Query() {
  const initialValues = {
    question: "",
  };

  const validationSchema = Yup.object({
    question: Yup.string()
      .required("Required")
      .min(10, "Question must be at least 10 characters"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className={style.queryOuter}>
      <div className={style.topDiv}>
        <img src="/images/doctor/chat.svg" alt="" />
        <div className={style.topRight}>
          <h1 className={style.heading}>Ask a free question</h1>
          <p className={style.subHeading}>
            Get <span className={style.subHeadingSpan}>FREE</span> multiple
            opinions from Dentists
          </p>
        </div>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={style.fieldContainer}>
              <Field
                type="text"
                name="question"
                placeholder="Enter question for you or someone else."
                className={style.inputField}
              />
              <ErrorMessage
                name="question"
                component="div"
                className={style.errorMessage}
              />
            </div>

            <div className={style.btmDiv}>
              <p className={style.paraBtm}>posted anonymously</p>
              <button
                type="submit"
                className={style.query}
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export function AppointCard() {
  return (
    <div className={style.appointOuter}>
      <div
        className={style.appointLeft}
        style={{ background: "url(/images/doctor/starBcg.svg)" }}
      >
        <div className={style.topLeft}>
          <img
            src="/images/doctor/teeth.svg"
            alt=""
            className={style.teethImage}
          />
          <h1 className={style.heading1}>DENTAL</h1>
          <p className={style.heading2}>Health Clinic</p>
          <p className={style.about}>Treat your teeth with us</p>
        </div>

        <div className={style.services}>
          <h1 className={style.servicesHeading}>Our Services:</h1>
          <ul className={style.listContainer}>
            <li className={style.service}>Dental Surgeries </li>
            <li className={style.service}>Dental Radiography</li>
            <li className={style.service}>Implant Dentistry</li>
            <li className={style.service}>Cavity Protection</li>
          </ul>
        </div>

        <div className={style.btmDivAppoint}>
          <p className={style.detail}>Contact Us:</p>
          <p className={style.detail}>+91-9876543213</p>
          <p className={style.detail}>
            125, Somewhere in the city Lakeview, 123456
          </p>
        </div>
      </div>
      <div className={style.appointRight}>
        <img
          src="/images/doctor/appointImg.svg"
          alt=""
          className={style.rightImage}
        />
      </div>
    </div>
  );
}
