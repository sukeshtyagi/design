import React, { useState } from "react";
import style from "../doctorPages/DoctorListing.module.css";
import { useLocation } from "react-router-dom";
import SearchBar from "../commonComponents/SearchBar";
import DoctorCard from "../doctorPages/DoctorCard";
import MostViewed2 from "../doctorPages/MostViewed2";
import { CaFee } from "../teacherPages/TeacherFee";
import BookAppointment from "../doctorPages/BookAppointment";
import { AppointCard } from "../doctorPages/LeftDocComp";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import CaDetailAboutSection from "./CaDetailAboutSection";
import CaDetailReviewsSection from "./CaDetailReviewsSection";
import CaDetailFeesSection from "./CaDetailFeesSection";
import CaDetailSpecialitiesSection from "./CaDetailSpecialitiesSection";

function CaDetail() {
  const location = useLocation();
  const { img, name, title, qual1, qual2, qual3, qual4, caListing } =
    location.state || {};

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
            <SearchBar
              userDashboard="true"
              teacherPlaceholder="Search Speciality, Income Tax, GST, VAT....."
            />
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
            caDetail="true"
            caListing={caListing}
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
                    select === "fees" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("fees");
                  }}
                >
                  Fees
                </p>
              </div>
              {select === "about" && <CaDetailAboutSection />}
              {select === "specialities" && <CaDetailSpecialitiesSection />}
              {select === "reviews" && <CaDetailReviewsSection />}
              {select === "fees" && <CaDetailFeesSection />}
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
