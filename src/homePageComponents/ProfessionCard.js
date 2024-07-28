import React from "react";
import style from "../styles/Professions.module.css";
import { useNavigate } from "react-router-dom";

function ProfessionCard({ img, title,link }) {
  const navigate=useNavigate()
  return (
    <div
      className={`${style.outerContainer}`}
      onClick={() => {
        navigate(`/${link}`);
      }}
    >
      <div className={style.innerContainer}>
        <div className={style.leftDiv}>
          <img src={img} alt="" className={style.image} />
        </div>
        <div className={style.rightDiv}>
          <h1 className={style.title}>{title}</h1>
          <p className={style.paraCard}>Lorem Ipsum Dolor Sit Amet...</p>
        </div>
      </div>
    </div>
  );
}

export default ProfessionCard;
