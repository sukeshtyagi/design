import React, { useState } from "react";
import styles from "./WeeklyCalender.module.css";
import {
  format,
  addWeeks,
  subWeeks,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from "date-fns";
import DropDown from "../../../commonComponents/DropDown";

function WeeklyCalender() {
  const times = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const [currentDate, setCurrentDate] = useState(new Date());

  const startWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endWeek = endOfWeek(currentDate, { weekStartsOn: 1 });

  const daysOfWeek = eachDayOfInterval({ start: startWeek, end: endWeek });

  const handlePreviousWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const handleNextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.topdiv}>
          <div className={styles.weekContainer}>
            <div className={styles.previousWeek} onClick={handlePreviousWeek}>
              <img
                src="/images/doctorAppointmentPatientData/previous.svg"
                alt="Previous Week"
              />
            </div>
            <div className={styles.currentWeek}>
              <p
                style={{
                  margin: "0px",
                  padding: "0px",
                  width: "fit-content",
                }}
              >
                {`${format(startWeek, "MMM dd")} - ${format(
                  endWeek,
                  "MMM dd, yyyy"
                )}`}
              </p>
            </div>
            <div className={styles.nextWeek} onClick={handleNextWeek}>
              <img
                src="/images/doctorAppointmentPatientData/next.svg"
                alt="Next Week"
              />
            </div>
          </div>

          <div className={styles.btnContainer}>
            <div className={styles.refreshDiv}>
              <img
                src="/images/doctorAppointmentPatientData/refresh.svg"
                alt="Refresh"
              />
            </div>
            <div className={styles.printDiv}>
              <img
                src="/images/doctorAppointmentPatientData/print.svg"
                alt="Print"
              />
            </div>

            <div className={styles.dropDownContainer}>
              <DropDown
                filterHeading="Sort By"
                option1="option 1"
                option2="option 2"
                option3="option 3"
                headingBgColor="rgba(235, 235, 235, 1)"
                headingFontSize="12px"
              />
            </div>
          </div>
        </div>

        <div className={styles.dataContainer}>
          <div className={styles.dateContainer}>
            {daysOfWeek.map((day, index) => (
              <p key={index} className={styles.dateItem}>
                {format(day, "dd EEE")}
              </p>
            ))}
          </div>

          <div className={styles.appointmentContainer}>
            <div className={styles.timeColumn}>
              {times.map((time, index) => (
                <p key={index} className={styles.timeItem}>
                  {time}
                </p>
              ))}
            </div>

            {/* */}
            <div className={styles.gridsContainer}>
              <div className={styles.gridContainer2}>
                {[...Array(7)].map((_, index) => (
                  <div key={index} className={styles.gridItem2}></div>
                ))}
              </div>

              <div className={styles.gridContainer}>
                {[...Array(56)].map((_, index) => (
                  <div key={index} className={styles.gridItem}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyCalender;
