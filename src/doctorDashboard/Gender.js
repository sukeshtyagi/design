import React from "react";
import style from "./Gender.module.css";
function Gender() {
  return (
    <div className={style.genderDiv}>
      <h1 className={style.heading}>Gender</h1>
      <div className={style.pieChart}>
        <img src="/images/doctorDashboard/pieChart.png" alt="" />
      </div>
      <ul className={style.list1}>
        <li>Male</li>
        <li>Female</li>
        <li>Child</li>
      </ul>
      <ul className={style.list2}>
        <li>45%</li>
        <li>30%</li>
        <li>25%</li>
      </ul>
    </div>
  );
}

export default Gender;
