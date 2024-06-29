import React from "react";
import Header from "../homePageComponents/Header";
import Footer from "../homePageComponents/Footer";
import SearchBar from "../commonComponents/SearchBar";
import style from "./DoctorListing.module.css";
import DoctorCard from "./DoctorCard";
import Faq from "../commonComponents/Faq";
function DoctorLisiting() {
  const specialityArray = [
    "Dentist",
    "Pediatrician",
    "Cardiologist",
    "Psychiatrist",
    "Dermatologist",
    "Endocrinologist",
    "Gynecologist",
    "Neurologist",
    "chiropractor",
  ];

  const filterArray = [
    "Sort By",
    "Available Now",
    "Top Rated",
    "Popular",
    "Ratings",
    "Distance",
    "Quick Response",
    "Relevance",
    "Liked",
  ];

  return (
    <>
      <Header userDashboard="true" />
      <div className={style.listingOuter}>
        <div className={style.listingInner}>
          <div className={style.searchContainer}>
            <SearchBar userDashboard="true" />
          </div>
          <div className={style.specCardWrapper}>
            <div className={style.specCardContainer}>
              {specialityArray.map((speciality) => (
                <div className={style.specOuter}>
                  <p className={style.title}>{speciality}</p>
                </div>
              ))}
            </div>
            <div className={style.arrowContainer}>
              <img src="/images/doctor/specArrow.svg" alt="" />
            </div>
          </div>
        </div>

        <div className={style.bannerContainer}>
          <img src="/images/doctor/banner.svg" alt="" />
        </div>

        <div className={style.listingInner2}>
          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Allopathic Doctors in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Dentists in Bangalore</p>
          </div>
          <h1 className={style.heading}>Best Dentists in HSR Layout</h1>
          <div className={style.filterCardContainer}>
            <div className={style.specOuter1}>
              <img src="/images/doctor/filter.svg" alt="" />
            </div>
            {filterArray.map((criterion) => (
              <>
                {criterion !== "Sort By" && criterion !== "Top Rated" && (
                  <div className={style.specOuter2}>
                    <p className={style.criterion}>{criterion}</p>
                  </div>
                )}

                {criterion === "Sort By" && (
                  <div className={style.specOuter3}>
                    <p className={style.criterion}>{criterion}</p>
                    <img src="/images/doctor/downArrow.svg" alt="" />
                  </div>
                )}

                {criterion === "Top Rated" && (
                  <div className={style.specOuter4}>
                    <p className={style.criterion}>{criterion}</p>
                    <img src="/images/doctor/star.svg" alt="" />
                  </div>
                )}
              </>
            ))}
          </div>

          <div className={style.btmContainer}>
            <div className={style.btmLeft}>
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
              <DoctorCard />
            </div>
            <div className={style.btmRight}></div>
          </div>
        </div>
      </div>
      <Faq />
      <Footer />
    </>
  );
}
export default DoctorLisiting;
