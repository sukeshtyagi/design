import React from "react";
import style from "../styles/ServicesCard.module.css";
import { useNavigate } from "react-router-dom";

function ServicesCard({ img, title, backgroundColor, categoryId }) {
  const navigate = useNavigate();
  const handleRouting = (value) => {
    navigate(`${title.toLowerCase()}`, {
      state: { categoryId },
    });
  };

  return (
    <div
      className={`${style.cardContainer} flex flex-col justify-end gap-[8px] `}
      onClick={() => {
        handleRouting(title);
      }}
    >
      <div
        className={`${style.cardBackground}`}
        style={{
          background: backgroundColor,
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
