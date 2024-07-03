import React from "react";
import style from "../doctorPages/DoctorListing.module.css";
import Header from "../homePageComponents/Header";
import SearchBar from "../commonComponents/SearchBar";
import DoctorCard from "../doctorPages/DoctorCard";
import { Query, AppointCard } from "../doctorPages/LeftDocComp";
import Footer from "../homePageComponents/Footer";
import Faq from "../commonComponents/Faq";
import Pagination from "../doctorPages/Pagination";
import { SpecCards, TeacherFilterCards } from "./TeacherSpecCards";
function TeacherListing() {
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

          <SpecCards />
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
          <TeacherFilterCards />
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
                background="linear-gradient(76.05deg, #D67849 1.21%, #E3CD27 99.58%)"
                rightImg="/images/teacher/student.png"
                heading1a="English"
                heading2a="Speaking Clases"
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
