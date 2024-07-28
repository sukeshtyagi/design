import React from "react";
import style from "./DoctorAppointment.module.css";
import DoctorAppointmentCalender from "./DoctorAppointmentCalender";
import DoctorAppointmentRequests from "./DoctorAppointmentRequests";
function DoctorAppointment() {
  return (
    <div className={style.doctorAppointmentContainer}>
      <div className={style.doctorAppointmentCalenderContainer}>
        <DoctorAppointmentCalender />
      </div>
      <div className={style.doctorAppointmentRequestsContainer}>
        <DoctorAppointmentRequests />
      </div>
    </div>
  );
}

export default DoctorAppointment;
