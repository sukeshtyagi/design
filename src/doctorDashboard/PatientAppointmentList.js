import React from "react";
import style from "./PatientAppointmentList.module.css";

function PatientAppointmentList() {
  return (
    <div className={style.outer}>
      <div className={style.appointment}>
        <p className={style.todayAppointment}>Today Appointments</p>
        <img src="/images/doctorDashboard/appointmentDots.svg" alt="" />
      </div>

      <p className={style.totalAppointment}>4 Appointments</p>

      <div className={style.timeAndCard}>
        <div className={style.timeDiv}>
          <p className={style.time}>08:00</p>
          <p className={style.time}>09:00</p>
          <p className={style.time}>09:00</p>
          <p className={style.time}>10:00</p>
          <p className={style.time}>11:00</p>
          <p className={style.time}>12:00</p>
          <p className={style.time}>13:00</p>
          <p className={style.time}>14:00</p>
          <p className={style.time}>15:00</p>
          <p className={style.time}>16:00</p>
        </div>
        <div className={style.cardDiv}></div>
      </div>
    </div>
  );
}

export default PatientAppointmentList;
