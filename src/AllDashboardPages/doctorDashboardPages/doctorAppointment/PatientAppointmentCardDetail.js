import React from 'react'
import style from "./PatientAppointmentCardDetail.module.css"
function PatientAppointmentCardDetail({ name,disease,timings }) {
    console.log(name,disease, timings)
  return (
    <div className={style.cardOuter}>
      <p className={style.name}>{name}</p>
      <p className={style.disease}>{disease}</p>
      <p className={style.timings}>{timings}</p>
    </div>
  );
}

export default PatientAppointmentCardDetail
