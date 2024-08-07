import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import style from "./FreeListing.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getAllUserType } from "../axios/teacherVendorLogin/VendorLogin";

function Listing() {
  const navigate = useNavigate();
  const [selectedProfession, setSelectedProfession] = useState(null);

  const [userTypes, setUserTypes] = useState([]);

  useEffect(() => {
    const fetchUserTypes = async () => {
      try {
        const idArray = await getAllUserType();
        setUserTypes(idArray);
        console.log(idArray);
      } catch (error) {
        console.error("Error fetching user types:", error);
      }
    };

    fetchUserTypes();
  }, []);

  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phoneNumber: Yup.string()
      .required("Required")
      .min(8, "Phone Number Too Short"),
  });

  const handleProfessionClick = (profession, index) => {
    setSelectedProfession({ profession, id: userTypes[index] });
  };

  return (
    <>
      <Header professionalListing="true" signup="true" />

      <div className={style.midSectionOuter}>
        <div className={style.midSection}>
          <div className={style.imageDiv}>
            <img
              src="/images/listingProfessional/listingProfessional.png"
              alt=""
              className={style.listingProfessional}
            />
          </div>
          <div className={style.detailContainer}>
            <div className={style.detialsHeading}>
              <h1 className={style.heading}>
                List yourself as a{" "}
                <span className={style.headingSpan}>Professional</span>
              </h1>
              <p className={style.headingPara}>
                Join our community of professionals and reach more clients. Fill
                out the form below to get started.
              </p>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              validateOnChange={false}
              validateOnBlur={false}
              onSubmit={(values) => {
                localStorage.setItem(
                  "vendorId",
                  JSON.stringify(selectedProfession.id._id)
                );
                localStorage.setItem("vendorDetails", JSON.stringify(values));
                if (selectedProfession.profession === "teacher") {
                  navigate("/teacher-vendor-login");
                }
              }}
            >
              {({ isValid, dirty }) => (
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

                    <Field
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className={`${style.inputPhoneNumberSignup} outline-none hover:border-appGreen cursor-pointer`}
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="error absolute top-[200px] text-center  w-full text-red-500"
                    />

                    <div className={style.professionContainer}>
                      <div className={style.professionContainerRow}>
                        <div
                          id={userTypes[0]}
                          className={`${style.profession} ${
                            selectedProfession?.profession === "doctor"
                              ? style.professionClicked
                              : ""
                          }`}
                          onClick={() => handleProfessionClick("doctor", 0)}
                        >
                          <img
                            src={
                              selectedProfession?.profession === "doctor"
                                ? "/images/listingProfessional/doctorClicked.svg"
                                : "/images/listingProfessional/doctor.svg"
                            }
                            alt=""
                            className={style.image}
                          />
                          <p className={style.title}>Doctor</p>
                        </div>

                        <div
                          id={userTypes[1]}
                          className={`${style.profession} ${
                            selectedProfession?.profession === "engineer"
                              ? style.professionClicked
                              : ""
                          }`}
                          onClick={() => handleProfessionClick("engineer", 1)}
                        >
                          <img
                            src={
                              selectedProfession?.profession === "engineer"
                                ? "/images/listingProfessional/engineerClicked.svg"
                                : "/images/listingProfessional/engineer.svg"
                            }
                            alt=""
                            className={style.image}
                          />
                          <p className={style.title}>Engineer</p>
                        </div>

                        <div
                          id={userTypes[2]}
                          className={`${style.profession} ${
                            selectedProfession?.profession === "advocate"
                              ? style.professionClicked
                              : ""
                          }`}
                          onClick={() => handleProfessionClick("advocate", 2)}
                        >
                          <img
                            src={
                              selectedProfession?.profession === "advocate"
                                ? "/images/listingProfessional/advocateClicked.svg"
                                : "/images/listingProfessional/advocate.svg"
                            }
                            alt=""
                            className={style.image}
                          />
                          <p className={style.title}>Advocate</p>
                        </div>
                      </div>

                      <div className={style.professionContainerRow}>
                        <div
                          id={userTypes[3]}
                          className={`${style.profession} ${
                            selectedProfession?.profession === "teacher"
                              ? style.professionClicked
                              : ""
                          }`}
                          onClick={() => handleProfessionClick("teacher", 3)}
                        >
                          <img
                            src={
                              selectedProfession?.profession === "teacher"
                                ? "/images/listingProfessional/teacherClicked.svg"
                                : "/images/listingProfessional/teacher.svg"
                            }
                            alt=""
                            className={style.image}
                          />
                          <p className={style.title}>Teacher</p>
                        </div>

                        <div
                          id={userTypes[4]}
                          className={`${style.profession} ${
                            selectedProfession?.profession === "labour"
                              ? style.professionClicked
                              : ""
                          }`}
                          onClick={() => handleProfessionClick("labour", 4)}
                        >
                          <img
                            src={
                              selectedProfession?.profession === "labour"
                                ? "/images/listingProfessional/labourClicked.svg"
                                : "/images/listingProfessional/labour.svg"
                            }
                            alt=""
                            className={style.image}
                          />
                          <p className={style.title}>Labour</p>
                        </div>

                        <div
                          id={userTypes[5]}
                          className={`${style.profession} ${
                            selectedProfession?.profession === "ca"
                              ? style.professionClicked
                              : ""
                          }`}
                          onClick={() => handleProfessionClick("ca", 5)}
                        >
                          <img
                            src={
                              selectedProfession?.profession === "ca"
                                ? "/images/listingProfessional/caClicked.svg"
                                : "/images/listingProfessional/ca.svg"
                            }
                            alt=""
                            className={style.image}
                          />
                          <p className={style.title}>Chartered Accountant</p>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className={`${style.buttonSignup} ${
                        !selectedProfession || !isValid || !dirty
                          ? style.buttonDisabled
                          : ""
                      }`}
                      disabled={!selectedProfession || !isValid || !dirty}
                    >
                      Get Started
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <p className={style.bottomPara}>
              By using Decatlog, you agree to our{" "}
              <span className={style.spanPrivacy}>privacy policy</span>, and our
              <span className={style.spanPrivacy}> terms and conditions</span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Listing;
