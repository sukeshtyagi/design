import React from "react";
import style from "../styles/ServiceCard2.module.css";

function ServicesCard3() {
  return (
    <div
      className={`${style.outerContainer} flex hover:scale-110`}
      style={{
        background: "rgba(143, 51, 51, 1)",
      }}
    >
      <div className={`${style.left}`}>
        <div className={style.leftOne}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className={`${style.para2}`}
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="square"
              d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5-3.9 19.5m-2.1-19.5-3.9 19.5"
            />
          </svg>
        </div>

        <div className={style.leftTwo}>
          <p className={`${style.para1} w-3/5`}>RAISE A COMPLAINT</p>
        </div>
      </div>
      <div
        className={`${style.right} flex items-end justify-end`}
        style={{
          background: "url(/images/services/card3.svg)",
          backgroundSize: "cover",
          borderRadius: "16px",
        }}
      >
        <img
          src="/images/services/card3Img.svg"
          alt="11111"
          className={`${style.image2} relative top-[2px] right-[10px]  rounded-[0px]`}
        />
      </div>
    </div>
  );
}

export default ServicesCard3;