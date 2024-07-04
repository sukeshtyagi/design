import React from "react";
import style from "../doctorPages/DoctorListing.module.css";
import Header from "../homePageComponents/Header";
import Footer from "../homePageComponents/Footer";
import SearchBar from "../commonComponents/SearchBar";
import { EnggFilterCards, SpecCards } from "./EnggSpecCards";
import Pagination from "../doctorPages/Pagination";
import EnggCard from "./EnggCards";
import Faq from "../commonComponents/Faq";
import { Query } from "../doctorPages/LeftDocComp";

function EnggListing() {
  const enggCardData = [
    {
      img: "/images/ca/engg.png",
      name: "Jacob Jones",
      title: "React Frontend Developer",
      qual1: "30 Years Old (F)",
      qual2: "Fluent in Hindi, English",
      qual3: "5 Years of experience",
      qual4: "$60/hr",
    },
    {
      img: "/images/ca/engg.png",
      name: "Jacob Jones",
      title: "React Frontend Developer",
      qual1: "30 Years Old (F)",
      qual2: "Fluent in Hindi, English",
      qual3: "5 Years of experience",
      qual4: "$60/hr",
    },
    {
      img: "/images/ca/engg.png",
      name: "Jacob Jones",
      title: "React Frontend Developer",
      qual1: "30 Years Old (F)",
      qual2: "Fluent in Hindi, English",
      qual3: "5 Years of experience",
      qual4: "$60/hr",
    },
    {
      img: "/images/ca/engg.png",
      name: "Jacob Jones",
      title: "React Frontend Developer",
      qual1: "30 Years Old (F)",
      qual2: "Fluent in Hindi, English",
      qual3: "5 Years of experience",
      qual4: "$60/hr",
    },
    {
      img: "/images/ca/engg.png",
      name: "Jacob Jones",
      title: "React Frontend Developer",
      qual1: "30 Years Old (F)",
      qual2: "Fluent in Hindi, English",
      qual3: "5 Years of experience",
      qual4: "$60/hr",
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
          <SpecCards />
        </div>

        <div className={style.bannerContainer}>
          <img src="/images/ca/enggBanner.png" alt="" />
        </div>
        <div className={style.listingInner2}>
          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Engineers in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>
              Websites IT & Software Engineers in Bangalore
            </p>
          </div>
          <h1 className={style.heading}>
            Best Websites IT & Software Engineers in HSR Layout
          </h1>
          <EnggFilterCards />
          <div className={style.btmContainer}>
            <div className={style.btmLeft}>
              {enggCardData.map((data) => (
                <EnggCard
                  enggListing="true"
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
              <Query forWhom="Websites IT & Software Engineers" />
            </div>
          </div>
          {/*lisitn inner closes below */}
        </div>
      </div>
      {/*lisitn outer closes here */}
      <Faq enggListing="true" />

      <Footer />
    </>
  );
}

export default EnggListing;
