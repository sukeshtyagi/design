import React from "react";
import style from "../doctorPages/DoctorListing.module.css";
import Header from "../homePageComponents/Header";
import SearchBar from "../commonComponents/SearchBar";
import DoctorCard from "../doctorPages/DoctorCard";
import { Query, AppointCard } from "../doctorPages/LeftDocComp";
import Footer from "../homePageComponents/Footer";
import Faq from "../commonComponents/Faq";
import Pagination from "../doctorPages/Pagination";
function TeacherListing() {
  const specialityArray = [
    "English",
    "Maths",
    "Physics",
    "Hindi",
    "History",
    "Biology",
    "Chemistry",
    "Geography",
    "Economics",
    "Political Science",
  ];

  const filterArray = [
    "Sort By",
    "Level",
    "Gender",
    "Price per lesson",
    "Specialities",
    "Languages Known",
    "Mode of Teaching",
    "Top Rated",
  ];

  const docCardData = [
    {
      img: "/images/teacher/eng.svg",
      name: "Jenny Wilson",
      title: "English Teacher (F)",
      qual1: "BA in English Literature, BEd",
      qual2: "Speaks Hindi (Native), English (Proficient)",
      qual3: "290 Lessons",
      qual4: "5 years of experience in speciality",
    },
    {
      img: "/images/teacher/eng.svg",
      name: "Jenny Wilson",
      title: "English Teacher (F)",
      qual1: "BA in English Literature, BEd",
      qual2: "Speaks Hindi (Native), English (Proficient)",
      qual3: "290 Lessons",
      qual4: "5 years of experience in speciality",
    },
    {
      img: "/images/teacher/eng.svg",
      name: "Jenny Wilson",
      title: "English Teacher (F)",
      qual1: "BA in English Literature, BEd",
      qual2: "Speaks Hindi (Native), English (Proficient)",
      qual3: "290 Lessons",
      qual4: "5 years of experience in speciality",
    },
    {
      img: "/images/teacher/eng.svg",
      name: "Jenny Wilson",
      title: "English Teacher (F)",
      qual1: "BA in English Literature, BEd",
      qual2: "Speaks Hindi (Native), English (Proficient)",
      qual3: "290 Lessons",
      qual4: "5 years of experience in speciality",
    },
    {
      img: "/images/teacher/eng.svg",
      name: "Jenny Wilson",
      title: "English Teacher (F)",
      qual1: "BA in English Literature, BEd",
      qual2: "Speaks Hindi (Native), English (Proficient)",
      qual3: "290 Lessons",
      qual4: "5 years of experience in speciality",
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
          <img src="/images/teacher/Banner.png" alt="" />
        </div>

        <div className={style.listingInner2}>
          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Teachers in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>English Teachers in Bangalore</p>
          </div>

          <h1 className={style.heading}>Best English Teachers in HSR Layout</h1>
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
                  teacherListing="true"
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
              <Query forWhom="English Teachers" />
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
        </div>
      </div>
      <Faq teacherListing="true" />
      <Footer />
    </>
  );
}

export default TeacherListing;
