import React, { useState } from "react";
import Header from "../homePageComponents/Header";
import Footer from "../homePageComponents/Footer";
import SearchBar from "../commonComponents/SearchBar";
import style from "./DoctorListing.module.css";
import DoctorCard from "./DoctorCard";
import {
  Address,
  MostViewed,
  PatientReviews,
  SubmitFeedback,
} from "./PatientReviews";
import { AppointCard } from "./LeftDocComp";
function DoctorDetail() {
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
            <p className={style.para}>Allopathic Doctors in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Dentists in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Dr. Ronald Richards</p>
          </div>

          <DoctorCard doctorDetail="true" />
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
                  Services
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
                  Address
                </p>
              </div>

              <div className={style.about}>
                <p className={style.information1}>
                  Dr. Richards is a dedicated and compassionate dental
                  professional committed to providing high-quality oral
                  healthcare to patients of all ages. With{" "}
                  <span className={style.info1Span}>
                    34 years of experience,{" "}
                  </span>
                  Dr. Richards is known for his expertise in cosmetic dentistry
                  and orthodontics. Dr. Richards believes in a personalized
                  approach to dentistry, focusing....{" "}
                  <span className={style.info1Span2}>Read More</span>
                </p>
                <div className={style.eduDiv}>
                  <h1 className={style.eduHeading}>Education</h1>
                  <ul>
                    <li className={style.information2}>
                      Bachelor of Dental Surgery (BDS) - XYZ Dental College, New
                      York, USA, 1980
                    </li>
                    <li className={style.information2}>
                      Doctor of Philosophy (PhD) in Orthodontics & Dentofacial
                      Orthopaedics - ABC University, Chicago, USA, 1986
                    </li>
                  </ul>
                </div>
              </div>
              <div className={style.eduDiv2}>
                <h1 className={style.eduHeading2}>
                  Dr. Richards Specializes in the following Services and
                  Procedures
                </h1>
                <div className={style.eduInner}>
                  <div>
                    <ul className={style.eduLeft}>
                      <li className={style.information3}>
                        Routine Dental Exams and Cleanings
                      </li>
                      <li className={style.information3}>
                        Fillings and Restorations
                      </li>
                      <li className={style.information3}>Dental Implants</li>
                      <li className={style.information3}>Root Canal Therapy</li>
                      <li className={style.information3}>Cosmetic Dentistry</li>
                      <li className={style.information3}>Oral Surgery</li>
                      <li className={style.information3}>TMJ Treatment</li>
                    </ul>
                  </div>
                  <div>
                    <ul className={style.eduLeft}>
                      <li className={style.information3}>Dental X-Rays</li>
                      <li className={style.information3}>
                        Dental Crowns and Bridges
                      </li>
                      <li className={style.information3}>Tooth Extractions</li>
                      <li className={style.information3}>
                        Orthodontic Treatment
                      </li>
                      <li className={style.information3}>
                        Periodontal (Gum) Care
                      </li>
                      <li className={style.information3}>
                        Dentures and Partial Dentures
                      </li>
                      <li className={style.information3}>
                        Pediatric Dentistry
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <PatientReviews />
              <SubmitFeedback />
              <Address />
            </div>
            <div className={style.rightDetail}>
              <AppointCard />
            </div>
          </div>
          <MostViewed />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DoctorDetail;
