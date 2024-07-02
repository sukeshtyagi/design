import React from "react";
import style from "./DoctorListing.module.css";
import Header from "../homePageComponents/Header";
import Footer from "../homePageComponents/Footer";
import SearchBar from "../commonComponents/SearchBar";
import DoctorCard from "./DoctorCard";
import Faq from "../commonComponents/Faq";
import Appointment from "./Appointment";
import { AppointCard, Query } from "./LeftDocComp";
import Pagination from "./Pagination";
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

  const docCardData = [
    {
      img: "/images/reviews/reviewImg.svg",
      name: "Dr. Ronald Richards",
      title: "Dental Surgeon",
      qual1: " BDS, PhD - Orthodontics & Dentofacial Orthopaedics",
      qual2: "34 years of experience in speciality",
      address: "Sweet Smile Dental Clinic",
    },
    {
      img: "/images/reviews/reviewImg.svg",
      name: "Dr. Ronald Richards",
      title: "Dental Surgeon",
      qual1: " BDS, PhD - Orthodontics & Dentofacial Orthopaedics",
      qual2: "34 years of experience in speciality",
      address: "Sweet Smile Dental Clinic",
    },
    {
      img: "/images/reviews/reviewImg.svg",
      name: "Dr. Ronald Richards",
      title: "Dental Surgeon",
      qual1: " BDS, PhD - Orthodontics & Dentofacial Orthopaedics",
      qual2: "34 years of experience in speciality",
      address: "Sweet Smile Dental Clinic",
    },
    {
      img: "/images/reviews/reviewImg.svg",
      name: "Dr. Ronald Richards",
      title: "Dental Surgeon",
      qual1: " BDS, PhD - Orthodontics & Dentofacial Orthopaedics",
      qual2: "34 years of experience in speciality",
      address: "Sweet Smile Dental Clinic",
    },
    {
      img: "/images/reviews/reviewImg.svg",
      name: "Dr. Ronald Richards",
      title: "Dental Surgeon",
      qual1: " BDS, PhD - Orthodontics & Dentofacial Orthopaedics",
      qual2: "34 years of experience in speciality",
      address: "Sweet Smile Dental Clinic",
    },
  ];
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
              {docCardData.map((data) => (
                <DoctorCard
                  img={data.img}
                  name={data.name}
                  title={data.title}
                  qual1={data.qual1}
                  qual2={data.qual2}
                  address={data.address}
                />
              ))}
              <Pagination />
            </div>
            <div className={style.btmRight}>
              <Appointment />
              <Query forWhom="Dentists" />
              <AppointCard
                background="linear-gradient(76.05deg, #337f8c 1.21%, #6ab1a5 99.58%)"
                rightImg="/images/doctor/appointImg.svg"
                teethImage="/images/doctor/teeth.svg"
                heading1a="DENTAL"
                heading2a="Health Clinic"
                heading3a="Treat your teeth with us"
                service1="Dental Surgeries"
                service2="Dental Radiography"
                service3="Implant Dentistry"
                service4="Cavity Protection"
              />
            </div>
          </div>
        </div>
      </div>
      <Faq docListing="true" />
      <Footer />
    </>
  );
}
export default DoctorLisiting;
