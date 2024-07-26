import React from "react";
import style from "./SearchBarDashboard.module.css";

function SearchBarDashboard({ width }) {
  return (
    <div className={style.searchOuter} style={{ width: width }}>
      <div className={style.lensDiv}>
        <img src="/images/doctorDashboard/search.svg" alt="" />
        <input type="text" placeholder="Search" className={style.input} />
      </div>
      <div className={style.iconDiv}>
        <img
          src="/images/doctorDashboard/notificationIcon.svg"
          alt=""
          className={style.icon}
        />
        <img
          src="/images/doctorDashboard/logout.svg"
          alt=""
          className={style.icon}
        />
      </div>
    </div>
  );
}

export default SearchBarDashboard;
