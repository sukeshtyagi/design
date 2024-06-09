import React from "react";
import style from "../styles/CustomerStories.module.css";
import CustomerCard1 from "./CustomerCard1";
import CustomerCard2 from "./CustomerCard2";
import CustomerCard3 from "./CustomerCard3";
import CustomerCard4 from "./CustomerCard4";
import CustomerCard5 from "./CustomerCard5";
import CustomerCard6 from "./CustomerCard6";
import CustomerCard7 from "./CustomerCard7";

function CustomerStories() {
  return (
    <div className={style.outerContainer}>
      <div className={style.innerContainer}>
        <div className={style.topDiv}>
          <div className={style.leftDiv}>
            <h1 className={style.heading}>
              CUSTOMER <span className={style.headingSpan}>STORIES</span>
            </h1>
            <p className={style.paraTopDiv}>
              Read What Our Users Have to Say About Their Experiences
            </p>
          </div>
          <div className={style.rightDiv}>
            <button className={`${style.viewBtn} hover:bg-appGreen`}>
              VIEW ALL
            </button>
          </div>
        </div>

        <div className={style.btmDiv}>
          <div className={style.btmChild1}>
            <CustomerCard1 />
            <CustomerCard2 />
          </div>
          <div className={style.btmChild2}>
            <CustomerCard3 />
            <CustomerCard4 />
            <CustomerCard5 />
          </div>
          <div className={style.btmChild3}>
            <CustomerCard6 />
            <CustomerCard7 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerStories;
