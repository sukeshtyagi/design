import React from "react";
import style from "./MyPatients.module.css";
import styles from "../../../commonComponents/dashboardComponents/DashboardPagesCommonStyle.module.css";

function MyPatients() {
  const headingData = [
    {
      title: "Patient ID",
      image: "/images/doctorAppointmentPatientData/sortArrow.svg",
    },
    {
      title: "Patient Name",
      image: "/images/doctorAppointmentPatientData/sortArrow.svg",
    },
    {
      title: "Date",
      image: "/images/doctorAppointmentPatientData/sortArrow.svg",
    },
    {
      title: "Gender",
      image: "/images/doctorAppointmentPatientData/sortArrow.svg",
    },
    {
      title: "Disease",
      image: "/images/doctorAppointmentPatientData/sortArrow.svg",
    },
    {
      title: "Status",
      image: "/images/doctorAppointmentPatientData/sortArrow.svg",
    },
    {
      title: "Action",
    },
  ];

  const patientData = [
    {
      patientId: "1234",
      name: "John Doe",
      date: "12/12/2022",
      gender: "Male",
      disease: "Scaling",
      status: "Recovered",
    },
  ];

  return (
    <div className={style.myPatientsOuter}>
      <div className={styles.locationFilterPara}>
        <p className={styles.para}>Home</p>
        <img src="/images/doctorDashboard/rightArrow.svg" alt="" />
        <p className={styles.paraSpan}>Dashboard</p>
      </div>

      <div className={style.uprContainer}>
        <div className={style.leftContainer}>
          <div className={style.patientContainer}>
            <p className={style.title}>Patient</p>
            <div
              className={style.searchContainer1}
              style={{ padding: "0 12px ", gap: "18px" }}
            >
              <img
                src="/images/doctorAppointmentPatientData/search.svg"
                alt=""
                className={style.image}
              />
              <input
                type="text"
                placeholder="Patient Name, ID...."
                className={style.input}
              />
            </div>
          </div>

          <div className={style.statusContainer}>
            <p className={style.title}>Status</p>

            <div
              className={style.searchContainer1}
              style={{ padding: "0 12px ", justifyContent: "space-between" }}
            >
              <input
                className={style.input}
                type="text"
                placeholder="Recovered, In-Treatment...."
              />

              <img
                src="/images/doctorAppointmentPatientData/downArrow.svg"
                alt=""
                className={style.image}
              />
            </div>
          </div>
        </div>
        <button className={style.addPatient}>+ Add Patient</button>
      </div>

      <div className={style.dataContainer}>
        <div className={style.headingContainer}>
          {headingData.map((item, index) => (
            <div key={index} className={style.headingItemsContainer}>
              <p className={style.headingTitle}>{item.title}</p>
              {item.image && <img src={item.image} alt="" />}
            </div>
          ))}
        </div>
        <div className={style.patientDetailsContainer}>
          {patientData.map((item, index) => (
            <div key={index} className={style.patientDetailsItemsContainer}>
              <p className={style.patientDetailsTitle}>{item.patientId}</p>
              <p className={style.patientDetailsTitle}>{item.name}</p>
              <p className={style.patientDetailsTitle}>{item.date}</p>
              <p className={style.patientDetailsTitle}>{item.gender}</p>
              <p className={style.patientDetailsTitle}>{item.disease}</p>
              <p className={style.patientDetailsTitle}>{item.status}</p>
              <div className={style.actionDiv}>
                <img
                  src="/images/doctorAppointmentPatientData/dots.svg"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPatients;
