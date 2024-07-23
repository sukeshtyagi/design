import React, { useState } from "react";
import style from "../commonComponents/CommonDashboard.module.css";
import styles from "../teacherDashboard/TeacherDashboard.module.css";
import DashboardLeftSide from "../commonComponents/DashboardLeftSide";
import SearchBarDashboard from "../commonComponents/SearchBarDashboard";
import GraphComponent from "../teacherDashboard/GraphComponent";
import ScheduleList from "../teacherDashboard/ScheduleList";
import DashboardFooter from "../commonComponents/DashboardFooter";

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
      <DashboardLeftSide
        menuItem1="Dashboard"
        menuItem2="Schedules"
        menuItem3="Students"
        menuItem4="Messages"
        menuItem5="Assignments"
        menuItem6="Payments"
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className={style.rightPart}>
        <SearchBarDashboard width="1061px" />
        {selectedOption === "Dashboard" && (
          <>
            <div className={style.locationFilterPara}>
              <p className={style.para}>Home</p>
              <img src="/images/doctorDashboard/rightArrow.svg" alt="" />
              <p className={style.paraSpan}>Dashboard</p>
            </div>

            <div
              className={style.mainSection}
              style={{
                width: "100%",
                gap: "10px",
              }}
            >
              <div
                className={style.leftArea}
                style={{
                  width: "728px",
                }}
              >
                <div className={styles.topSection}>
                  <div className={styles.imgContainer}>
                    <img src="/images/teacherDashboard/calender.svg" alt="" />
                  </div>

                  <div className={styles.upcomingClassContainer}>
                    <p className={styles.totalCount}>12</p>
                    <div className={styles.scheduleContainer}>
                      <p className={styles.upcoming}>Upcoming Class</p>
                      <p className={styles.week}>This Week</p>
                    </div>
                  </div>

                  <button className={styles.schedule}>See Schedule</button>
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
              <div className="rightArea">
                <ScheduleList
                  heading="Schedules"
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
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
