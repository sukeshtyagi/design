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

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showMonthView, setShowMonthView] = useState(false);
  const monthViewRef = useRef(null);

  const startOfWeekDate = startOfWeek(currentDate, { weekStartsOn: 0 });
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

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

  const isToday = (date) => {
    return format(date, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
  };

  const isSelectedDate = (date) => {
    return format(date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
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
        <span>{format(currentDate, "MMMM yyyy")}</span>
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
                isToday(date) && !isSelectedDate(date)
                  ? styles.currentDateWeekView
                  : ""
              } ${isSelectedDate(date) ? styles.selectedDateWeekView : ""}`}
              onClick={() => handleDateClick(date)}
            >
              {format(date, "d")}
            </div>
          ))}
        </div>
      </div>

      {showMonthView && (
        <div ref={monthViewRef} className={styles.monthView}>
          <h3 className={styles.monthViewHeader}>
            {format(currentDate, "MMMM yyyy")}
          </h3>
          <div className={styles.monthViewDates}>
            {daysInMonth.map((date, index) => (
              <div
                key={index}
                className={`${styles.monthViewDate} ${
                  isToday(date) && !isSelectedDate(date)
                    ? styles.currentDateMonthView
                    : ""
                } ${isSelectedDate(date) ? styles.selectedDateMonthView : ""}`}
                onClick={() => handleDateClick(date)}
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
