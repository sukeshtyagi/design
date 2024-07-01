import React from "react";
import style from "./DoctorCard.module.css";
import { useNavigate } from "react-router-dom";
function DoctorCard({
  doctorDetail,
  teacherListing,
  img,
  name,
  title,
  qual1,
  qual2,
  qual3,
  qual4,
  address,
}) {
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
        navigate("/doctor-detail", {
          state: { img, name, title, qual1, qual2, address },
        });
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
          <img src={img} alt="" className={style.image} />
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
            {name}
          </h1>
          <p className={style.title}>{title}</p>
          <p className={style.qual}>{qual1}</p>
          <p className={style.qual}>{qual2}</p>
          {qual3 && <p className={style.qual}>{qual3}</p>}
          {qual4 && <p className={style.qual}>{qual4}</p>}
          {address && <p className={style.address}>{address}</p>}
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
      <div
        className={style.cardRight}
        style={
          teacherListing ? { marginLeft: "-50px", marginRight: "15px" } : {}
        }
      >
        <img
          src="/images/doctor/shareIcon.svg"
          alt=""
          className={style.cardRightImg1}
        />
        <img
          src="/images/doctor/heartIcon.svg"
          alt=""
          className={style.cardRightImg2}
        />
        {teacherListing && (
          <div className="teacherDiv">
            <h1 className={style.rate}>$22/hr</h1>
            <p className={style.lessons}>50 -min lesson</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorCard;
