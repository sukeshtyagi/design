import React from "react";
import style from "../styles/CustomerStories.module.css";

function CustomerCard1() {
  return (
    <div className={`${style.outerDivCard1}`}>
      <div className={style.topDivCard1}>
        <img src="/images/miss/card1.svg" alt="" />
      </div>
      <div className={style.midDivCard1}>
        <p
          className={style.paraMidDivCard1}
          
        >
          As a civil engineer, finding reliable professionals for my projects is
          crucial. Decatlog has been a game-changer for me. I easily found a
          highly skilled electrical engineer through the platform who helped
          streamline our construction project. The process was smooth, and the
          results were fantastic. Decatlog is now my go-to for any professional
          needs!
        </p>
      </div>
      <div className={style.btmDivCard1}>
        <h1 className={style.nameBtmDivCard1}>Priya S. </h1>
        <h1 className={style.titleBtmDivCard1}>Engineer</h1>

        <div className={style.ratingBtmDivCardDiv1}>
          <img
            src="/images/miss/star.svg"
            alt=""
            className={style.ratingBtmDivCard1}
          />

          <img
            src="/images/miss/star.svg"
            alt=""
            className={style.ratingBtmDivCard1}
          />

          <img
            src="/images/miss/star.svg"
            alt=""
            className={style.ratingBtmDivCard1}
          />

          <img
            src="/images/miss/star.svg"
            alt=""
            className={style.ratingBtmDivCard1}
          />

          <img
            src="/images/miss/star.svg"
            alt=""
            className={style.ratingBtmDivCard1}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerCard1;
