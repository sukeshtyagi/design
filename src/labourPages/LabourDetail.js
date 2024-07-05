import React, { useState } from "react";
import style from "../doctorPages/DoctorListing.module.css";
import Footer from "../homePageComponents/Footer";
import Header from "../homePageComponents/Header";
import SearchBar from "../commonComponents/SearchBar";
import DoctorCard from "../doctorPages/DoctorCard";
import { useLocation } from "react-router-dom";
import { PatientReviews } from "../doctorPages/NewReviews";
import { SubmitFeedback } from "../doctorPages/PatientReviews";
import MostViewed2 from "../doctorPages/MostViewed2";
import LabourOtherDetail from "./LabourOtherDetail";
import { LabourAppointCard } from "../doctorPages/LeftDocComp";
import BookAppointment from "../doctorPages/BookAppointment";
import LabourCard from "./LabourCard";

function LabourDetail() {
  const location = useLocation();
  const { img, name, title, qual1, qual2, qual3, qual4, labourListing } =
    location.state || {};

  const [select, setSelect] = useState("about");
  const handleSelect = (value) => {
    setSelect(value);
  };
  console.log(labourListing);
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
            <p className={style.para}>Teachers in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>English Teachers in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Anna J.</p>
          </div>
          <LabourCard
            docDetail="true"
            labourDetail="true"
            labourListing="Hire Now"
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
                    select === "specialities" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("specialities");
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
                    select === "others" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("others");
                  }}
                >
                  Others
                </p>
              </div>
              <div className={style.about} style={{ height: "279px" }}>
                <p className={style.information1}>
                  My first job was on Saudi Arabia as domestic helper for two
                  years and two months I served 5 members of the family two
                  adults and three children ages. 13,7 and 4 and my second job
                  was on Qatar as domestic helper for two years and one month i
                  also served 5 members in the family 2 adults and 3 children.
                  My job duties are general cleaning, cooking food for the
                  children and taking care of them. I am trustworthy, patience,
                  honest and loving children.{" "}
                  <span
                    className={style.info1Span2}
                    style={{ marginLeft: "358px" }}
                  >
                    Read More
                  </span>
                </p>

                <div className={style.eduDiv}>
                  <h1 className={style.eduHeading}>Education</h1>
                  <ul>
                    <li className={style.information2}>
                      2007 - High School Graduate (6 Months course)
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={style.eduDiv2}
                style={{
                  height: "140px",
                }}
              >
                <h1 className={style.eduHeading2}>Specialization</h1>
                <div className={style.eduInner} style={{ gap: "97px" }}>
                  <div>
                    <ul className={style.eduLeft}>
                      <li className={style.information3}>Baby Care</li>
                      <li className={style.information3}>Housekeeping</li>
                      <li className={style.information3}>Groceries</li>
                    </ul>
                  </div>
                  <div>
                    <ul className={style.eduLeft}>
                      <li className={style.information3}>Child Care</li>
                      <li className={style.information3}>Cooking</li>
                      <li className={style.information3}>Elderly Care</li>
                    </ul>
                  </div>
                </div>
              </div>
              <PatientReviews labourReview="true" />
              <SubmitFeedback forWhom="Ms. Anna J." />
            </div>
            <div className={style.rightDetail}>
              <BookAppointment divHeading="Hire Anna" btnHeading="Hire Now" />
              <LabourAppointCard />
            </div>
          </div>
          <MostViewed2 category="maids" />
          <LabourOtherDetail />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LabourDetail;
