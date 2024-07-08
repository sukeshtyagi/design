import React, { useState } from "react";
import style from "./AdvocateCard.module.css";
import { useNavigate } from "react-router-dom";

function AdvocateCard({
  doctorDetail,
  img,
  name,
  title,
  titleSpan,
  qual1,
  qual2,
  qual3,
}) {
  const [clicked, setClicked] = useState("");
  const [heartImage, setHeartImage] = useState("/images/doctor/heartIcon.svg");
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    if (!isHeartClicked) {
      setHeartImage("/images/doctor/hoverHeartIcon2.svg");
    }
  };

  const handleMouseLeave = () => {
    if (!isHeartClicked) {
      setHeartImage("/images/doctor/heartIcon.svg");
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setHeartImage("/images/doctor/pressedHeartIcon.svg");
    setIsHeartClicked(true);
  };

  return (
    <div
      className={`${style.cardOuter} ${
        doctorDetail ? style.docDetailCardOuter : ""
      }`}
    >
      <div
        className={`${style.cardLeft} ${
          doctorDetail ? style.docDetailCardLeft : ""
        }`}
      >
        <div className={style.imgDiv}>
          <img src={img} alt="" className={style.image} />

          <div className={style.ratingContainer}>
            <p className={style.rating}>4.5</p>
            <img src="/images/doctor/whiteStar.svg" alt="" />
          </div>
          <p className={style.reviews}>10 Reviews</p>
        </div>

        <div className={style.details}>
          <h1
            className={`${style.name} ${
              doctorDetail ? style.docDetailName : ""
            }`}
          >
            {name}
          </h1>
          <p className={style.title}>
            {title} <span className={style.titleSpan}>{titleSpan}</span>
          </p>
          <p className={style.qual}>{qual1}</p>
          <p className={style.qual}>{qual2}</p>
          <p className={style.qual}>{qual3}</p>

          <div className={style.btnContainer}>
            <div className={style.call1}>
              <img
                src="/images/doctor/phoneIcon2.svg"
                alt=""
                className={style.icon}
              />
              <p className={style.action1}>Call Now</p>
            </div>
            <div
              className={`${style.call2} ${
                clicked === "div2" ? style.clickedAppointment : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setClicked("div2");
              }}
            >
              <p className={style.action}>Book a Consultation   </p>
            </div>
            <div
              className={`${style.call} ${
                clicked === "div3" ? style.clickedAppointment : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setClicked("div3");
              }}
            >
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img
          src="/images/doctor/shareIcon.svg"
          alt=""
          className={style.cardRightImg1}
        />
        <img
          src={heartImage}
          alt=""
          className={`${style.cardRightImg2} ${
            isHeartClicked ? style.heartClicked : ""
          }`}
        />
      </div>
    </div>
  );
}

export default AdvocateCard;
