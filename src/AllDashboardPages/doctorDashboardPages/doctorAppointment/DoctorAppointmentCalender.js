import React, { useState } from "react";
import style from "../../../commonComponents/dashboardComponents/DashboardPagesCommonStyle.module.css";
import styles from "./DoctorAppointmentCalender.module.css";
import WeeklyCalender from "./WeeklyCalender";

function DoctorAppointmentCalender() {
  const [view, setView] = useState("Weekly");

  const handleViewChange = (view) => {
    setView(view);
  };

  return (
    <div className={styles.doctorAppointmentCalenderLeft}>
      <div className={style.locationFilterPara}>
        <p className={style.para}>Home</p>
        <img src="/images/doctorDashboard/rightArrow.svg" alt="" />
        <p className={style.paraSpan}>Dashboard</p>
      </div>

      <div className={styles.calenderHeadingDiv}>
        <h1 className={styles.heading}>Calendar</h1>
        <div className={styles.allOptions}>
          <h2
            className={`${styles.option} ${
              view === "Monthly" ? styles.optionSelected : ""
            }`}
            onClick={() => handleViewChange("Monthly")}
          >
            Monthly
          </h2>
          <h2
            className={`${styles.option} ${
              view === "Weekly" ? styles.optionSelected : ""
            }`}
            onClick={() => handleViewChange("Weekly")}
          >
            Weekly
          </h2>
        </div>
      </div>

      <div className={styles.viewContent}>
        {view === "Monthly" && (
          <p style={{ margin: "0px", padding: "0px" }}>Monthly Calendar</p>
        )}
        {view === "Weekly" && <WeeklyCalender/>}
      </div>
    </div>
  );
}

export default DoctorAppointmentCalender;
