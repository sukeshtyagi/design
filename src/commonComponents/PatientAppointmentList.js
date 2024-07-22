import React from "react";
import style from "./PatientAppointmentList.module.css";
import Calendar from "./CalenderComponent";

function PatientAppointmentList({heading}) {
  return (
    <div className={style.outer}>
      <Calendar />
      <div className={style.appointment}>
        <p className={style.todayAppointment}>Today {heading}</p>
        <img src="/images/doctorDashboard/appointmentDots.svg" alt="" />
      </div>

      <p className={style.totalAppointment}>4 {heading}</p>

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
        <div className={style.cardDiv}>
          <div className={style.cardouter}>
            <img
              src="/images/doctorDashboard/patient1.png"
              alt=""
              className={style.patientImage}
            />
            <div className={style.nameContainer}>
              <p className={style.name}>Esther Howard</p>
              <p className={style.visitTime}>08:00 - 09:00</p>
            </div>
          </div>

          <div
            className={style.cardouter}
            style={{
              height: "104px",
              backgroundColor: "rgba(11, 219, 182, 1)",
            }}
          >
            <img
              src="/images/doctorDashboard/patient.png"
              alt=""
              className={style.patientImage}
            />
            <div className={style.nameContainer}>
              <p className={style.name}>Leslie Alexander</p>
              <p className={style.visitTime} style={{ color: "rgba(0,0,0,1)" }}>
                09:30 - 11:00
              </p>
            </div>
          </div>

          <div
            className={style.cardouter}
            style={{
              height: "91px",
              backgroundImage: "url(/images/doctorDashboard/lunchBreak.png)",
            }}
          >
            <div className={style.nameContainer} style={{ width: "100%" }}>
              <p className={style.name} style={{ textAlign: "center" }}>
                Lunch Break
              </p>
            </div>
          </div>

          <div className={style.cardouter}>
            <img
              src="/images/doctorDashboard/patient1.png"
              alt=""
              className={style.patientImage}
            />
            <div className={style.nameContainer}>
              <p className={style.name}>Esther Howard</p>
              <p className={style.visitTime}>08:00 - 09:00</p>
            </div>
          </div>

          <div className={style.cardouter}>
            <img
              src="/images/doctorDashboard/patient1.png"
              alt=""
              className={style.patientImage}
            />
            <div className={style.nameContainer}>
              <p className={style.name}>Esther Howard</p>
              <p className={style.visitTime}>08:00 - 09:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientAppointmentList;
