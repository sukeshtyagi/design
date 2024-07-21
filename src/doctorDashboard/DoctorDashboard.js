import React from "react";
import style from "./DoctorDashboard.module.css";
import SearchBarDashboard from "../commonComponents/SearchBarDashboard";
import DashboardLeftSide from "../commonComponents/DashboardLeftSide";
import PatientAppointmentTable from "./PatientAppointmentTable";
import Gender from "./Gender";
import PatientAppointmentList from "./PatientAppointmentList";

function DoctorDashboard() {
  const cardsData = [
    {
      title: "Patients",
      qty: 666,
      icon: "/images/doctorDashboard/patientIcon.svg",
      bgColor: "rgba(246, 221, 255, 1)",
    },
    {
      title: "Appointments",
      qty: 120,
      icon: "/images/doctorDashboard/appointment.svg",
      bgColor: "rgba(199, 221, 254, 1)",
    },
    {
      title: "Clinic Consulting",
      qty: 340,
      icon: "/images/doctorDashboard/clinic.svg",
      bgColor: "rgba(153, 255, 212, 1)",
    },
    {
      title: "Overall Ratings",
      qty: 4.5,
      icon: "/images/doctorDashboard/star.svg",
      bgColor: "rgba( 255,220,152, 1)",
    },
  ];

  return (
    <div className={style.doctorDashboardOuter} style={{background:"url(/images/Bcg.svg)"}}>
      <DashboardLeftSide />
      <div className={style.rightPart}>
        <SearchBarDashboard />

        <div className={style.locationFilterPara}>
          <p className={style.para}>Home</p>
          <img src="/images/doctorDashboard/rightArrow.svg" alt="" />
          <p className={style.paraSpan}>Dashboard</p>
        </div>

        <div className={style.mainSection}>
          <div className={style.leftArea}>
            <div className={style.cardsContainer}>
              {cardsData.map((card, index) => (
                <div key={index} className={style.cardOuter}>
                  <div
                    className={style.iconDiv}
                    style={{ backgroundColor: card.bgColor }}
                  >
                    <img src={card.icon} alt="" />
                  </div>
                  <div className={style.detailDiv}>
                    <p className={style.title}>{card.title}</p>
                    <p className={style.qty}>{card.qty}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={style.midSection}>
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
              <div className="gender">
                <Gender />
              </div>
            </div>
            <PatientAppointmentTable />
          </div>

          <div className="rightArea">
            <PatientAppointmentList />
          </div>
        </div>

        <p className={style.dashboardFooter}>
          Copyrights 2008-24. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default DoctorDashboard;
