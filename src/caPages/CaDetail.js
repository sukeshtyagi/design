import React, { useState } from "react";
import style from "../doctorPages/DoctorListing.module.css";
import { useLocation } from "react-router-dom";
import Header from "../homePageComponents/Header";
import Footer from "../homePageComponents/Footer";
import SearchBar from "../commonComponents/SearchBar";
import DoctorCard from "../doctorPages/DoctorCard";
import { PatientReviews } from "../doctorPages/NewReviews";
import { SubmitFeedback } from "../doctorPages/PatientReviews";
import MostViewed2 from "../doctorPages/MostViewed2";
import { CaFee } from "../teacherPages/TeacherFee";
import BookAppointment from "../doctorPages/BookAppointment";
import { AppointCard } from "../doctorPages/LeftDocComp";

function CaDetail() {
  const location = useLocation();
  const { img, name, title, qual1, qual2, qual3, qual4 } = location.state || {};

  const [select, setSelect] = useState("about");
  const handleSelect = (value) => {
    setSelect(value);
  };

  return (
    <>
      <Header userDashboard="true" />
      <div
        className={style.listingOuter}
        style={{ background: "url(/images/Backgrounds.svg)" }}
      >
        <div className={style.listingInner}>
          <div className={style.searchContainer}>
            <SearchBar userDashboard="true" />
          </div>
          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>CAs in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Income Tax CAs in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Wade Warren</p>
          </div>
          <DoctorCard
            doctorDetail="true"
            img={img}
            name={name}
            title={title}
            qual1={qual1}
            qual2={qual2}
            qual3={qual3}
            qual4={qual4}
          />
          <div className={style.detailBtm}>
            <div className={style.leftDetail}>
              <div className={style.navOptionDetail}>
                <p
                  className={`${style.option} ${
                    select === "about" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("about");
                  }}
                >
                  About
                </p>
                <p
                  className={`${style.option} ${
                    select === "services" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("services");
                  }}
                >
                  Specialities
                </p>
                <p
                  className={`${style.option} ${
                    select === "reviews" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("reviews");
                  }}
                >
                  Reviews
                </p>
                <p
                  className={`${style.option} ${
                    select === "address" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("address");
                  }}
                >
                  Fees
                </p>
              </div>
              <div className={style.about} style={{ height: "517px" }}>
                <p className={style.information1}>
                  Mr. Warren is a seasoned Chartered Accountant with a proven
                  track record of delivering exceptional financial guidance and
                  support. With over 10 years of experience in financial
                  management, taxation, and auditing, he brings a wealth of
                  expertise to every client interaction. <br />
                  <br />
                  Specializing in providing tailored financial solutions to
                  individuals and businesses, Mr. Warren is committed to
                  fostering long-term relationships built on trust, integrity,
                  and professionalism.
                  <span
                    className={style.info1Span2}
                    style={{ marginLeft: "550px" }}
                  >
                    Read More
                  </span>
                </p>
                <div className={style.eduDiv}>
                  <h1 className={style.eduHeading}>Education</h1>
                  <ul>
                    <li className={style.information2}>
                      Bachelor's Degree in Accounting, Finance, or Business
                      Administration - University of XYZ, London, UK, 2014
                    </li>

                    <li className={style.information2}>
                      Completion of the Association of Chartered Certified
                      Accountants (ACCA) Program
                    </li>

                    <li className={style.information2}>
                      Successful Completion of the Chartered Accountant (CA)
                      Examination - Institute of Chartered Accountants in
                      England and Wales (ICAEW), London, UK, 2016
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={style.eduDiv2}
                style={{
                  height: "204px",
                }}
              >
                <h1 className={style.eduHeading2}>Specialization</h1>
                <div className={style.eduInner} style={{ gap: "97px" }}>
                  <div>
                    <ul className={style.eduLeft}>
                      <li className={style.information3}>Income Tax</li>
                      <li className={style.information3}>GST</li>
                      <li className={style.information3}>VAT</li>
                      <li className={style.information3}>Property Tax</li>
                      <li className={style.information3}>Audit</li>
                    </ul>
                  </div>
                  <div>
                    <ul className={style.eduLeft}>
                      <li className={style.information3}>Capital Gains Tax</li>
                      <li className={style.information3}>Service Tax</li>
                      <li className={style.information3}>Corporate Tax</li>
                      <li className={style.information3}>Professional Tax</li>
                    </ul>
                  </div>
                </div>
              </div>
              <PatientReviews clientReview="true" />
              <SubmitFeedback forWhom="Mr. Wade Warren" />
            </div>
            <div className={style.rightDetail}>
              <BookAppointment
                divHeading="Schedule a Consultation"
                btnHeading="Schedule Now"
              />
              <AppointCard
                background="linear-gradient(76.05deg, #6E49D6 1.21%, #E33227 99.58%)"
                rightImg="/images/ca/appointImg.svg"
                heading1a="Business"
                heading2a="Accounting Services"
                service1="Tax Returns"
                service2="Tax Planning"
                service3="Financial Reporting"
                margin="true"
              />
            </div>
            {/* */}
          </div>
          <MostViewed2 category="CAs" />
          <CaFee />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CaDetail;
