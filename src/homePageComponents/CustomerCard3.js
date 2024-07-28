import React from "react";
import style from "../styles/CustomerStories.module.css";

function CustomerCard3() {
  return (
    <div className={`${style.outerDivCard3}`}>
      <div className={style.leftDivCard3}>
        <img src="/images/miss/card3.svg" alt="" />
      </div>

      <div className={style.rightDivCard3}>
        <p className={style.paraMidDivCard1}>
          My son was struggling with his math classes, and I wanted to find a
          private tutor to help him improve. Through Decatlog, I found an
          amazing math teacher who helped a lot.
        </p>
        <div className={style.btmDivCard3}>
          <h1 className={style.nameBtmDivCard3}>Sneha R. </h1>
          <h1 className={style.titleBtmDivCard1}>Parent</h1>

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
    </div>
  );
}

export default CustomerCard3;
