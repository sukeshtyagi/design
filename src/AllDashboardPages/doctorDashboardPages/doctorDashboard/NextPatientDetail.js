import React from 'react'
import style from "./NextPatientDetail.module.css"
function NextPatientDetail() {
  return (
    <div className={style.nextPatientDetail}>
      <h1 className={style.heading}>Next Patient Details</h1>

      <div className={style.profilePic}>
        <img
          src="/images/doctorDashboard/patient.png"
          alt=""
          className={style.doctorImage}
        />
        <div className={style.nameContainer}>
          <p className={style.greet}>Leslie Alexander</p>
          <p className={style.name}>Health Checkup</p>
        </div>
      </div>

      <div className={style.detailsContainer}>
        <div className={style.div1}>
          <div className={style.innerDiv}>
            <p className={style.criterion}>D. O. B. </p>
            <p className={style.value}>15/01/1992</p>
          </div>
          <div className={style.innerDiv}>
            <p className={style.criterion}>Last Appointment</p>
            <p className={style.value}>22/11/2022</p>
          </div>
        </div>

        <div className={style.div1}>
          <div className={style.innerDiv}>
            <p className={style.criterion}>Sex</p>
            <p className={style.value}>Male</p>
          </div>
          <div className={style.innerDiv}>
            <p className={style.criterion}>Height</p>
            <p className={style.value}>172 cm</p>
          </div>
        </div>

        <div className={style.div1}>
          <div className={style.innerDiv}>
            <p className={style.criterion}>Weight</p>
            <p className={style.value}>59 Kg</p>
          </div>
          <div className={style.innerDiv}>
            <p className={style.criterion}>Reg. Dat</p>
            <p className={style.value}>20/11/2022</p>
          </div>
        </div>
      </div>

      <div className={style.btmDiv}>
        <h1 className={style.history}>Patient History</h1>
        <div className={style.historyContainer}>
          <p className={style.disease1}>Asthma</p>
          <p className={style.disease2}>Hypertension</p>
          <p className={style.disease3}>Fever</p>
        </div>
      </div>
    </div>
  );
}

export default NextPatientDetail
