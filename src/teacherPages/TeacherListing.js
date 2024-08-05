import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import Faq from "../commonComponents/Faq";
import SearchBar from "../commonComponents/SearchBar";
import CommonCard from "../commonComponents/CommonCard";
import Pagination from "../commonComponents/Pagination";
import {
  Query,
  AppointCard,
} from "../commonComponents/LeftOverCommonComponents";
import style from "../commonComponents/CommonListingAndOtherStyles.module.css";
import { TeacherSpecialityCards } from "./TeacherSpecialityCards";
import TeacherFiterCards from "./TeacherFilterCards";
import { getSubCategoriesData } from "../axios/homepageCategories/HomepageCategoriesFunctions";

function TeacherListing() {
  const location = useLocation();
  const { categoryId } = location.state || {};
  const [teacherCardData, setTeacherCardData] = useState([]);
  /*
  const docCardData = [
    {
      img: "/images/teacher/eng.svg",
      name: "Jenny Wilson",
      title: "English Teacher (F)",
      qual1: "BA in English Literature, BEd",
      qual2: "Speaks Hindi (Native), English (Proficient)",
      qual3: "290 Lessons",
      qual4: "5 years of experience in speciality",
    }];
*/
  useEffect(() => {
    async function getData(categoryId) {
      const result = await getSubCategoriesData(categoryId);
      setTeacherCardData(result);
    }
    getData(categoryId);
  }, []);
  return (
    <>
      <Header userDashboard="true" />
      <div className={style.listingOuter}>
        <div className={style.listingInner}>
          <div className={style.searchContainer}>
            <SearchBar
              userDashboard="true"
              placeholderProp="Search Speciality, English, Mathematics, Physics......."
              suggestionDiv="true"
            />
          </div>

          <TeacherSpecialityCards />
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
          <TeacherFiterCards />
          <div className={style.btmContainer}>
            <div className={style.btmLeft}>
              {teacherCardData.map((data, index) => (
                <CommonCard
                  key={index}
                  teacherListing="Book Trial Lesson"
                  img="http://webclickstudio.com:8012/assets/images/english.svg"
                  name={data.vendorName}
                  title={data.specialization[0].specializationName}
                  qual1={data.education[0].qualification}
                  qual2={data.teacherDetails.teachingLanguage[0]}
                  qual3={`${data.teacherDetails.totalLesson} lessons`}
                  qual4={`${data.teacherDetails.teachingExperience} of experience`}
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
      <Footer shadow="true" />
    </>
  );
}

export default TeacherListing;
