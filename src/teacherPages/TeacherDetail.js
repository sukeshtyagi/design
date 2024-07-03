import React, { useState } from "react";
import style from "../doctorPages/DoctorListing.module.css";
import { useLocation } from "react-router-dom";
import Header from "../homePageComponents/Header";
import Footer from "../homePageComponents/Footer";
import SearchBar from "../commonComponents/SearchBar";
import DoctorCard from "../doctorPages/DoctorCard";
import { SubmitFeedback } from "../doctorPages/PatientReviews";
import { AppointCard } from "../doctorPages/LeftDocComp";
import TeacherFee from "./TeacherFee";
import BookAppointment from "../doctorPages/BookAppointment";
import { PatientReviews } from "../doctorPages/NewReviews";
import MostViewed2 from "../doctorPages/MostViewed2";

function TeacherDetail() {
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
            <p className={style.para}>Teachers in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>English Teachers in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Jenny Wilson</p>
          </div>
          <DoctorCard
            doctorDetail="true"
            teacherListing="true"
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
              </div>
              <div className={style.about} style={{ height: "369px" }}>
                <p className={style.information1}>
                  Hello! My name is Jenny, and I was born in Manhattan, New York
                  City. I moved to North Carolina when I was seven years old. I
                  like learning about different cultures, dancing and watching
                  movies. I don't have a specific hobby as I am open to trying
                  something new. <br />
                  <br />
                  I’ve been working in early childhood education for eight
                  years. While teaching in the field....
                  <span
                    className={style.info1Span2}
                    style={{ marginLeft: "630px"}}
                  >
                    Read More
                  </span>
                </p>

                <div className={style.eduDiv}>
                  <h1 className={style.eduHeading}>Education</h1>
                  <ul>
                    <li className={style.information2}>
                      Bachelor of Arts (BA) in English Literature - University
                      of XYZ, North Carolina, USA, 2016
                    </li>
                    <li className={style.information2}>
                      Bachelor of Education (BEd) - ABC University, Chicago,
                      USA, 2018{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={style.eduDiv2}
                style={{
                  height: "172px",
                }}
              >
                <h1 className={style.eduHeading2}>Specialization</h1>
                <div className={style.eduInner}>
                  <div>
                    <ul className={style.eduLeft}>
                      <li className={style.information3}>
                        Conversational English
                      </li>
                      <li className={style.information3}>English for work</li>
                      <li className={style.information3}>British English</li>
                      <li className={style.information3}>
                        English job interview prep
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className={style.eduLeft}>
                      <li className={style.information3}>Business English</li>
                      <li className={style.information3}>
                        English for beginners
                      </li>
                      <li className={style.information3}>
                        English for traveling
                      </li>
                      <li className={style.information3}>
                        English as a subject
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <PatientReviews studentReview="true" />
              <SubmitFeedback forWhom="Ms. Jenny Wilson" />
            </div>
            <div className={style.rightDetail}>
              <TeacherFee />
              <BookAppointment
                divHeading="Schedule a Lesson"
                btnHeading="Schedule Now"
              />
              <AppointCard
                rightImg="/images/teacher/student.png"
                heading1a="English"
                heading2a="Speaking Clases"
                background="linear-gradient(76.05deg, #D67849 1.21%, #E3CD27 99.58%)"
                service1="One-to-One Tutoring"
                service2="Exam Preparation"
                service3="Advanced Learning"
              />
            </div>
          </div>
          <MostViewed2 category="English Teachers" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TeacherDetail;
