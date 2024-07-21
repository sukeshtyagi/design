import React, { useState, useRef, useEffect } from "react";
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from "date-fns";
import styles from "./CalenderComponent.module.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showMonthView, setShowMonthView] = useState(false);
  const monthViewRef = useRef(null);

  const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 1 });
  const startOfMonthDate = startOfMonth(currentDate);
  const endOfMonthDate = endOfMonth(currentDate);

  const daysInWeek = Array.from({ length: 7 }, (_, i) =>
    addDays(startOfWeekDate, i)
  );

  const daysInMonth = eachDayOfInterval({
    start: startOfMonthDate,
    end: endOfMonthDate,
  });

  const handleToggleMonthView = () => {
    setShowMonthView(!showMonthView);
  };

  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

  const isToday = (date) => {
    return format(date, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        monthViewRef.current &&
        !monthViewRef.current.contains(event.target)
      ) {
        setShowMonthView(false);
      }
    };

    if (showMonthView) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMonthView]);

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <span>{format(startOfWeekDate, "MMMM yyyy")}</span>
        <div>
          <img
            src="/images/doctorDashboard/calender.svg"
            alt="Open month view"
            className={styles.icon}
            onClick={handleToggleMonthView}
            style={{ width: "16.59px", height: "18px" }}
          />
        </div>
      </div>

      <div className={styles.dates}>
        <div className={styles.dayNames}>
          {dayNames.map((day, index) => (
            <div key={index} className={styles.dayName}>
              {day}
            </div>
          ))}
        </div>

        <div className={styles.dates1}>
          {daysInWeek.map((date, index) => (
            <div
              key={index}
              className={`${styles.date} ${
                isToday(date) ? styles.currentDateWeekView : ""
              }`}
            >
              {format(date, "d")}
            </div>
          ))}
        </div>
      </div>

      {showMonthView && (
        <div ref={monthViewRef} className={styles.monthView}>
          <h3 className={styles.monthViewHeader}>July 2024</h3>
          <div className={styles.monthViewDates}>
            {daysInMonth.map((date, index) => (
              <div
                key={index}
                className={`${styles.monthViewDate} ${
                  isToday(date) ? styles.currentDateMonthView : ""
                }`}
              >
                {format(date, "d")}
              </div>
            ))}
          </div>
          <button onClick={handleToggleMonthView} style={{ marginTop: "10px" }}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
