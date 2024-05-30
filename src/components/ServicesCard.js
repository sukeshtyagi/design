import React from "react";
import style from "../styles/ServicesCard.module.css";

function ServicesCard({ img, title, bcg }) {
  console.log(img, title);

  return (
    <div
      className={`${style.cardContainer} flex flex-col justify-end gap-[8px] hover:scale-125 hover:z-50`}
    >
      <div
        className={`${style.cardBackground}`}
        style={{
          background: bcg,
        }}
      >
        <div className={`${style.imageHolder} relative bottom-[21px]`}>
          <img
            src={img}
            alt=""
            className={`${style.serviceProvider} box-border inline-block ml-[5px] absolute bottom-[0px]`}
          />
        </div>
      </div>

      <h1 className={style.category}>{title}</h1>
    </div>
  );
}

export default ServicesCard;
