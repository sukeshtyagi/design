import React, { useState } from "react";
import styles from "../../../AllDashboardPages/teacherDashboardPages/teacherDashboard/TeacherDashboard.module.css";
import style from "../../../commonComponents/dashboardComponents/DashboardPagesCommonStyle.module.css";
import DashboardLeftSide from "../../../commonComponents/dashboardComponents/DashboardLeftSide";
import SearchBarDashboard from "../../../commonComponents/dashboardComponents/SearchBarDashboard";
import DashboardFooter from "../../../commonComponents/dashboardComponents/DashboardFooter";
import AppointmentList from "../../../commonComponents/dashboardComponents/AppointmentList";
import LeftSideMenuBar from "../../../commonComponents/dashboardComponents/LeftSideMenuBar";

import GraphComponent from "../../../AllDashboardPages/teacherDashboardPages/teacherDashboard/GraphComponent";
import { getAppointmentsByDate } from "./AppointmentData";

const getCurrentMonthAndYear = () => {
  const date = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
};

function TeacherDashboard() {
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentMonthAndYear = getCurrentMonthAndYear();
  const appointmentsByDate = getAppointmentsByDate();

  const cardDetails = [
    { title: "Tutoring Hours", count: "242", percentage: "3.15%" },
    { title: "Students", count: "104", percentage: "3.15%" },
    { title: "Classes", count: "20", percentage: "3.15%" },
  ];

  return (
    <div
      className={style.doctorDashboardOuter}
      style={{ background: "url(/images/Bcg.svg)" }}
    >
      <div className="">
        <div className="block md2:hidden">
          <LeftSideMenuBar
            name="Ronald Richards"
            menuItem1="Dashboard"
            menuItem2="Schedules"
            menuItem3="Students"
            menuItem4="Messages"
            menuItem5="Assignments"
            menuItem6="Payments"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div className="hidden md2:block">
          <DashboardLeftSide
            name="Ronald Richards"
            menuItem1="Dashboard"
            menuItem2="Schedules"
            menuItem3="Students"
            menuItem4="Messages"
            menuItem5="Assignments"
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
                <div className={styles.topSectionContainer}>
                  <div className={styles.topSection}>
                    <div className={styles.innerSection}>
                      <div className={styles.imgContainer}>
                        <img
                          src="/images/teacherDashboard/calender.svg"
                          alt=""
                        />
                      </div>

                      <div className={styles.upcomingClassContainer}>
                        <p className={styles.totalCount}>12</p>
                        <div className={styles.scheduleContainer}>
                          <p className={styles.upcoming}>Upcoming Class</p>
                          <p className={styles.week}>This Week</p>
                        </div>
                      </div>
                    </div>

                    <button className={styles.schedule}>See Schedule</button>
                  </div>
                </div>

                <div className={styles.midContainer}>
                  {cardDetails.map((card) => (
                    <div className={styles.cardOuter} key={card.title}>
                      <p className={styles.title}>{card.title}</p>

                      <div className={styles.detailsContainer}>
                        <p className={styles.count}>{card.count}</p>
                        <img
                          src="/images/teacherDashboard/indicator.svg"
                          alt=""
                        />
                        <p className={styles.percentage}>{card.percentage}</p>
                      </div>
                      <p className={styles.month}>in {currentMonthAndYear}</p>
                    </div>
                  ))}
                </div>

                <div className="">
                  <GraphComponent />
                </div>
              </div>
              <div className={style.rightArea}>
                <AppointmentList
                  heading="Schedules"
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  appointmentsByDate={appointmentsByDate}
                />
              </div>
            </div>
          </>
        )}
        <DashboardFooter />
      </div>
    </div>
  );
}

export default TeacherDashboard;
