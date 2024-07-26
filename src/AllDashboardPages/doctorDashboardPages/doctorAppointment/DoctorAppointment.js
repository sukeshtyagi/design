import React from "react";
import DoctorAppointmentCalender from "./DoctorAppointmentCalender";
import DoctorAppointmentRequestsStatus from "./DoctorAppointmentRequestsStatus";
function DoctorAppointment() {
  return (
    <>
      <DoctorAppointmentCalender />
      <DoctorAppointmentRequestsStatus />
    </>
  );
}

export default DoctorAppointment;
