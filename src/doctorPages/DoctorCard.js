import React from "react";
import style from "./DoctorCard.module.css";
import { useNavigate } from "react-router-dom";
function DoctorCard({ doctorDetail }) {
  const navigate = useNavigate();
  return (
    <div
      className={style.cardOuter}
      style={
        doctorDetail
          ? {
              width: "1128px",
              gap: "436px",
            }
          : {}
      }
      onClick={() => {
        navigate("/doctor-detail");
      }}
    >
      <div
        className={style.cardLeft}
        style={
          doctorDetail
            ? {
                width: "606px",
                height: "215px",
                gap: "30px",
              }
            : {}
        }
      >
        <div className={style.imgDiv}>
          <img
            src="/images/reviews/reviewImg.svg"
            alt=""
            className={style.image}
          />
          <div className={style.ratingContainer}>
            <p className={style.rating}>4.5</p>
            <img src="/images/doctor/whiteStar.svg" alt="" />
          </div>
          <p className={style.reviews}>300 Reviews</p>
        </div>
        <div className={style.details}>
          <h1
            className={style.name}
            style={
              doctorDetail
                ? {
                    fontSize: "30px",
                    lineHeight: "45px",
                  }
                : {}
            }
          >
            Dr. Ronald Richards
          </h1>
          <p className={style.title}>Dental Surgeon</p>
          <p className={style.qual}>
            BDS, PhD - Orthodontics & Dentofacial Orthopaedics
          </p>
          <p className={style.qual}>34 years of experience in speciality</p>
          <p className={style.address}>Sweet Smile Dental Clinic</p>
          <div className={style.btnContainer}>
            <div className={style.call1}>
              <img
                src="/images/doctor/phoneIcon2.svg"
                alt=""
                className={style.icon}
              />
              <p className={style.action1}>Call Now</p>
            </div>
            <div className={style.call}>
              <p className={style.action}>Book Appointment</p>
            </div>
            <div className={style.call}>
              <img
                src="/images/doctor/waIcon.svg"
                alt=""
                className={style.icon2}
              />
              <p className={style.action}>Chat</p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.cardRight}>
        <img src="/images/doctor/shareIcon.svg" alt="" />
        <img src="/images/doctor/heartIcon.svg" alt="" />
      </div>
    </div>
  );
}

export default DoctorCard;
