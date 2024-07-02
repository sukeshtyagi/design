import React from "react";
import style from "../doctorPages/DoctorListing.module.css";
import Header from "../homePageComponents/Header";
import Footer from "../homePageComponents/Footer";
import SearchBar from "../commonComponents/SearchBar";
import DoctorCard from "../doctorPages/DoctorCard";
import Pagination from "../doctorPages/Pagination";
import Faq from "../commonComponents/Faq";
import { AppointCard, Query } from "../doctorPages/LeftDocComp";

function CaListing() {
  const specialityArray = [
    "Income Tax",
    "Service Tax",
    "Property Tax",
    "Capital Gains Tax",
    "Corporate Tax",
    "Professional Tax",
    "GST",
    "VAT",
    "Audit",
  ];

  const filterArray = [
    "Sort By",
    "Practice Area",
    "Gender",
    "Experience",
    "State",
    "City",
    "Court",
    "Languages Known",
    "Top Rated",
  ];

  const docCardData = [
    {
      img: "/images/ca/reviewImg.svg",
      name: "Wade Warren",
      title: "CA, Bangalore",
      qual1: "BCom, CA",
      qual2: "Fluent in Hindi, English",
      qual3: "911 Consultations",
      qual4: "Licensed for 10 Years",
    },
    {
      img: "/images/ca/reviewImg.svg",
      name: "Wade Warren",
      title: "CA, Bangalore",
      qual1: "BCom, CA",
      qual2: "Fluent in Hindi, English",
      qual3: "911 Consultations",
      qual4: "Licensed for 10 Years",
    },
    {
      img: "/images/ca/reviewImg.svg",
      name: "Wade Warren",
      title: "CA, Bangalore",
      qual1: "BCom, CA",
      qual2: "Fluent in Hindi, English",
      qual3: "911 Consultations",
      qual4: "Licensed for 10 Years",
    },
    {
      img: "/images/ca/reviewImg.svg",
      name: "Wade Warren",
      title: "CA, Bangalore",
      qual1: "BCom, CA",
      qual2: "Fluent in Hindi, English",
      qual3: "911 Consultations",
      qual4: "Licensed for 10 Years",
    },
    {
      img: "/images/ca/reviewImg.svg",
      name: "Wade Warren",
      title: "CA, Bangalore",
      qual1: "BCom, CA",
      qual2: "Fluent in Hindi, English",
      qual3: "911 Consultations",
      qual4: "Licensed for 10 Years",
    },
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
            <div
              className={style.specCardContainer}
              style={{ overflow: "visible" }}
            >
              {specialityArray.map((speciality) => (
                <div className={style.specOuter}>
                  <p className={style.title}>{speciality}</p>
                </div>
              ))}
            </div>
            {/*
            <div className={style.arrowContainer}>
              <img src="/images/doctor/specArrow.svg" alt="" />
            </div>
                */}
          </div>
        </div>
        <div className={style.bannerContainer}>
          <img src="/images/ca/Banner.png" alt="" />
        </div>
        <div className={style.listingInner2}>
          
          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>CAs in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Income Tax CAs in Bangalore</p>
          </div>
          <h1 className={style.heading}>Best Income Tax CAs in HSR Layout</h1>

          <div className={style.filterCardContainer}>
            <div className={style.specOuter1}>
              <img src="/images/doctor/filter.svg" alt="" />
            </div>
            {filterArray.map((criterion) => (
              <div className={style.specOuter2}>
                <p className={style.criterion}>{criterion}</p>
                <img src="/images/doctor/downArrow.svg" alt="" />
              </div>
            ))}
          </div>
          <div className={style.btmContainer}>
            <div className={style.btmLeft}>
              {docCardData.map((data) => (
                <DoctorCard
                  caListing="true"
                  img={data.img}
                  name={data.name}
                  title={data.title}
                  qual1={data.qual1}
                  qual2={data.qual2}
                  qual3={data.qual3}
                  qual4={data.qual4}
                />
              ))}
              <Pagination />
            </div>

            <div className={style.btmRight}>
              <Query forWhom="Income Tax CAs" />
              <AppointCard
                background="linear-gradient(76.05deg, #6E49D6 1.21%, #E33227 99.58%)"
                rightImg="/images/ca/appointImg.svg"
                heading1a="Business"
                heading2a="Accounting Services"
                service1="Tax Returns"
                service2="Tax Planning"
                service3="Financial Reporting"
              />
            </div>
          </div>
        </div>
      </div>
      <Faq caListing="true" />
      <Footer />
    </>
  );
}

export default CaListing;
