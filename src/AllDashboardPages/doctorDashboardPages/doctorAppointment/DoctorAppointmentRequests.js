import React, { useState } from "react";
import style from "./DoctorAppointmentRequests.module.css";

function DoctorAppointmentRequests() {
  const [patients, setPatients] = useState([
    {
      name: "Wade Warren",
      image: "/images/doctorAppointmentPatientData/patient.png",
      disease: "Scaling",
      date: "5/12/2022",
      time: "10:00 AM",
      status: "",
    },
    {
      name: "Wade Warren",
      image: "/images/doctorAppointmentPatientData/patient.png",
      disease: "Scaling",
      date: "5/12/2022",
      time: "10:00 AM",
      status: "",
    },
    {
      name: "Wade Warren",
      image: "/images/doctorAppointmentPatientData/patient.png",
      disease: "Scaling",
      date: "5/12/2022",
      time: "10:00 AM",
      status: "",
    },
    {
      name: "Wade Warren",
      image: "/images/doctorAppointmentPatientData/patient.png",
      disease: "Scaling",
      date: "5/12/2022",
      time: "10:00 AM",
      status: "",
    },
    {
      name: "Wade Warren",
      image: "/images/doctorAppointmentPatientData/patient.png",
      disease: "Scaling",
      date: "5/12/2022",
      time: "10:00 AM",
      status: "",
    },
    {
      name: "Wade Warren",
      image: "/images/doctorAppointmentPatientData/patient.png",
      disease: "Scaling",
      date: "5/12/2022",
      time: "10:00 AM",
      status: "",
    },
  ]);

  const handleStatusChange = (index, status) => {
    const updatedPatients = [...patients];
    updatedPatients[index].status = status;
    setPatients(updatedPatients);
  };

  return (
    <div className={style.outerMostContainer}>
      <h1 className={style.heading}>Appointment Requests</h1>

      <div className={style.containerDiv}>
        {patients.map((patient, index) => (
          <div key={index} className={style.outerDiv}>
            <div className={style.topDiv}>
              <div className={style.imgDiv}>
                <img
                  src={patient.image}
                  alt={patient.name}
                  className={style.img}
                />
                <p className={style.name}>{patient.name}</p>
              </div>
              <p className={style.disease}>{patient.disease}</p>
            </div>

            <div className={style.btmDiv}>
              <p className={style.date}>{patient.date}</p>
              <p className={style.time}>{patient.time}</p>
              <div className={style.statusDiv}>
                {patient.status ? (
                  <p
                    className={`${style.updatedStatus} ${
                      patient.status === "Accept"
                        ? style.accepted
                        : style.rejected
                    }`}
                  >
                    {patient.status}
                  </p>
                ) : (
                  <div className={style.statusIcons}>
                    <img
                      src="/images/doctorDashboard/accept.svg"
                      alt="Accept"
                      className={style.statusIcon}
                      onClick={() => handleStatusChange(index, "Accept")}
                    />
                    <img
                      src="/images/doctorDashboard/reject.svg"
                      alt="Reject"
                      className={style.statusIcon}
                      onClick={() => handleStatusChange(index, "Reject")}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorAppointmentRequests;
