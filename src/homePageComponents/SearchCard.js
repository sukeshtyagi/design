import React from "react";
import style from "../styles/Searches.module.css";

function SearchCard({ img, title }) {
  return (
    <div className={`${style.cardOuterDiv} hover:scale-125`}>
      <div className={style.cardTopDiv}>
        <img src={img} alt="" className={style.image1} />
        <div className={style.childDiv}>
          <img
            src="/images/searches/arrow.svg"
            alt=""
            className={style.image2}
          />
        </div>
      </div>
        <h1 className={style.heading}>{title}</h1>
    </div>
  );
}

export default SearchCard;
