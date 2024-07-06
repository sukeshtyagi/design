import React, { useState } from "react";
import style from "../doctorPages/DoctorListing.module.css";
import SearchBar from "../commonComponents/SearchBar";
import { useLocation } from "react-router-dom";
import Header from "../commonComponents/Header";
import Footer from "../commonComponents/Footer";
import EngineerCards from "./EngineerCards";
import EngineerReviews from "./EngineerReviews";

function EnggDetail() {
  const location = useLocation();
  const { img, name, title, qual1, qual2, qual3, qual4, doctorListing } =
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
            <SearchBar userDashboard="true" />
          </div>

          <div className={style.locationFilterPara}>
            <p className={style.para}>Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Engineers in Bangalore</p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>
              Websites IT & Software Engineers in Bangalore
            </p>
            <img src="/images/doctor/rightArrow.svg" alt="" />
            <p className={style.para}>Jacob Jones</p>
          </div>
          <EngineerCards
            doctorDetail="true"
            enggListing="true"
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
                    select === "services" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("services");
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
                    select === "address" ? style.selected : ""
                  }`}
                  onClick={() => {
                    handleSelect("address");
                  }}
                >
                  Portfolio
                </p>
              </div>
              <div className={style.about}>
                <p className={style.information1}>
                  I am a full-stack software engineer who has strong knowledge
                  of software architecture and engineering <br />
                  I've focused my efforts on mastering the front-end
                  architecture to create testable, adaptable, scalable, and
                  robust web applications.
                  <br />I also have a depth of experience working backend using
                  Python and Nodejs and forth with designers to flush out good
                  user interface experiences. .
                  <span
                    className={style.info1Span2}
                    style={{ marginLeft: "105px" }}
                  >
                    Read More
                  </span>
                </p>
                <div className={style.eduDiv}>
                  <h1 className={style.eduHeading}>Education</h1>
                  <ul style={{ listStyle: "none" }}>
                    <li className={style.information2}>
                      Bachelor of Engineering (BEng), Network Engineering,
                      Victoria University of Wellington, 2007-2010
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
                      <li className={style.information3}>Angular</li>
                      <li className={style.information3}>Engineering</li>
                      <li className={style.information3}>
                        Object Oriented Programming
                      </li>
                      <li className={style.information3}>
                        Software Development
                      </li>
                      <li className={style.information3}>API</li>
                    </ul>
                  </div>
                  <div>
                    <ul className={style.eduLeft}>
                      <li className={style.information3}>App Development</li>
                      <li className={style.information3}>Mobile Development</li>
                      <li className={style.information3}>Programming</li>
                      <li className={style.information3}>.NET</li>
                      <li className={style.information3}>
                        Back End Development
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <EngineerReviews enggReview="true" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EnggDetail;
