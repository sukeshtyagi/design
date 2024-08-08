import React, { useState, useEffect } from "react";
import style from "./FreeListing.module.css";
import { useNavigate } from "react-router-dom";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  getAllUserType,
  registerProfessional,
} from "../axios/teacherVendorLogin/VendorLogin";

function Listing() {
  const navigate = useNavigate();
  const [selectedProfession, setSelectedProfession] = useState(null);
  const [userTypes, setUserTypes] = useState([]);

  useEffect(() => {
    const fetchUserTypes = async () => {
      try {
        const array = await getAllUserType();
        setUserTypes(array);
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
    vendorType: "",
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phoneNumber: Yup.string()
      .required("Required")
      .min(8, "Phone Number Too Short"),
  });

  const handleProfessionClick = (profession, index) => {
    setSelectedProfession({ profession, id: userTypes[index]._id });
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
              onSubmit={async (values) => {
                const formData = {
                  ...values,
                  vendorType: selectedProfession.id,
                };
                localStorage.setItem("vendorDetails",JSON.stringify(values));
                const result = await registerProfessional(formData);
                localStorage.setItem("vendorId", result.data.vendor._id);
                if (selectedProfession.profession.toLowerCase() === "teacher") {
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
                      {userTypes.map((user, index) => (
                        <div
                          key={index}
                          className={`${style.profession} ${
                            selectedProfession?.profession === user.userTypeName
                              ? style.professionClicked
                              : ""
                          }`}
                          onClick={() =>
                            handleProfessionClick(user.userTypeName, index)
                          }
                        >
                          <img
                            src={
                              selectedProfession?.profession ===
                              user.userTypeName
                                ? `http://webclickstudio.com:8012/assets/images/${user.whiteIcon}`
                                : `http://webclickstudio.com:8012/assets/images/${user.userTypeIcon}`
                            }
                            alt=""
                            className={style.image}
                          />
                          <p className={style.title}>{user.userTypeName}</p>
                        </div>
                      ))}
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
