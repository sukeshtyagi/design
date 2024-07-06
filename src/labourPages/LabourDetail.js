import React, { useState } from "react";
import style from "../doctorPages/DoctorListing.module.css";
import SearchBar from "../commonComponents/SearchBar";
import { useLocation } from "react-router-dom";
import MostViewed2 from "../doctorPages/MostViewed2";
import LabourOtherDetail from "./LabourOtherDetail";
import { LabourAppointCard } from "../doctorPages/LeftDocComp";
import BookAppointment from "../doctorPages/BookAppointment";
import LabourCard from "./LabourCard";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import LabourDetailAboutSection from "./LabourDetailAboutSection";
import LabourDetailSpecialitiesSection from "./LabourDetailSpecialitiesSection";
import LabourDetailReviewsSection from "./LabourDetailReviewsSection";
import LabourDetailOthersSection from "./LabourDetailOthersSection";

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
            <SearchBar
              userDashboard="true"
              placeholderProp="Search Speciality, maids, plumber, carpenter....."
            />
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

              {select === "about" && <LabourDetailAboutSection />}
              {select === "specialities" && <LabourDetailSpecialitiesSection />}
              {select === "reviews" && <LabourDetailReviewsSection />}
              {select === "others" && <LabourDetailOthersSection />}
            </div>
            <div className={style.rightDetail}>
              <BookAppointment divHeading="Hire Anna" btnHeading="Hire Now" />
              <LabourAppointCard img="/images/ca/Adv.png" />
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
