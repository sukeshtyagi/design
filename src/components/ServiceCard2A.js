import React from "react";
import style from "../styles/ServiceCard2.module.css";

function ServiceCard2A({ title1, img, bcg }) {
  return (
    <div
      className={`${style.outerContainer} flex`}
      style={{
        background: `${bcg}`,
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
          <p className={`${style.para1} w-1/2`}>{title1}</p>
        </div>
      </div>
      <div className={`${style.right2}`}>
        <img src={img} alt="" className={`${style.image} rounded-[27px]`} />
      </div>
    </div>
  );
}

export default ServiceCard2A;
