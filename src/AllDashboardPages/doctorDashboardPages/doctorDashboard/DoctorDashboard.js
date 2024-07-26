import React, { useState } from "react";
import style from "../../../commonComponents/dashboardComponents/DashboardPagesCommonStyle.module.css";
import styles from "./DoctorDashboard.module.css";
import SearchBarDashboard from "../../../commonComponents/dashboardComponents/SearchBarDashboard";
import DashboardLeftSide from "../../../commonComponents/dashboardComponents/DashboardLeftSide";
import DashboardFooter from "../../../commonComponents/dashboardComponents/DashboardFooter";
import AppointmentList from "../../../commonComponents/dashboardComponents/AppointmentList";
import LeftSideMenuBar from "../../../commonComponents/dashboardComponents/LeftSideMenuBar";

import Gender from "../doctorDashboard/Gender";
import NextPatientDetail from "./NextPatientDetail";
import PatientAppointmentTable from "../../../AllDashboardPages/doctorDashboardPages/doctorDashboard/PatientAppointmentTable";
import { getAppointmentsByDate } from "./AppointmentData";
import DoctorAppointment from "../doctorAppointment/DoctorAppointment";

function DoctorDashboard() {
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const appointmentsByDate = getAppointmentsByDate();

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
    <div
      className={style.doctorDashboardOuter}
      style={{ background: "url(/images/Bcg.svg)" }}
    >
      <div className="">
        <div className="block md2:hidden">
          <LeftSideMenuBar
            menuItem1="Dashboard"
            menuItem2="Appointments"
            menuItem3="My Patients"
            menuItem4="Messages"
            menuItem6="Payments"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div className="hidden md2:block">
          <DashboardLeftSide
            menuItem1="Dashboard"
            menuItem2="Appointments"
            menuItem3="My Patients"
            menuItem4="Messages"
            menuItem6="Payments"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>

      <div className={style.rightPart}>
        <SearchBarDashboard />

        {selectedOption === "Dashboard" && (
          <>
            <div className={style.locationFilterPara}>
              <p className={style.para}>Home</p>
              <img src="/images/doctorDashboard/rightArrow.svg" alt="" />
              <p className={style.paraSpan}>Dashboard</p>
            </div>

            <div className={style.mainSection}>
              <div className={style.leftArea}>
                <div className={styles.cardsContainer}>
                  {cardsData.map((card, index) => (
                    <div key={index} className={styles.cardOuter}>
                      <div
                        className={styles.iconDiv}
                        style={{ backgroundColor: card.bgColor }}
                      >
                        <img src={card.icon} alt="" />
                      </div>
                      <div className={styles.detailDiv}>
                        <p className={styles.title}>{card.title}</p>
                        <p className={styles.qty}>{card.qty}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={style.midSection}>
                  <NextPatientDetail />
                  <Gender />
                </div>
                <PatientAppointmentTable />
              </div>

              <div className={style.rightArea}>
                <AppointmentList
                  heading="Appointments"
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  appointmentsByDate={appointmentsByDate}
                />
              </div>
            </div>
          </>
        )}

        {selectedOption === "Appointments" && <DoctorAppointment />}
        <DashboardFooter />
      </div>
    </div>
  );
}

export default DoctorDashboard;
