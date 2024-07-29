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
import PatientAppointmentCardDetail from "./PatientAppointmentCardDetail";

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

const appointments = [
  // Previous Week
  {
    name: "Alice Johnson",
    disease: "Consultation",
    date: "2024-07-15",
    time: "09:00",
    timings: "09:00 - 10:00",
  },
  {
    name: "Bob Smith",
    disease: "Checkup",
    date: "2024-07-15",
    time: "10:00",
    timings: "10:00 - 11:00",
  },
  {
    name: "Charlie Davis",
    disease: "Follow-up",
    date: "2024-07-16",
    time: "11:00",
    timings: "11:00 - 12:00",
  },
  {
    name: "David Evans",
    disease: "Scaling",
    date: "2024-07-17",
    time: "11:00",
    timings: "11:00 - 12:00",
  },
  {
    name: "Eva White",
    disease: "Consultation",
    date: "2024-07-18",
    time: "16:00",
    timings: "16:00 - 17:00",
  },
  {
    name: "Frank Harris",
    disease: "Emergency",
    date: "2024-07-19",
    time: "13:00",
    timings: "13:00 - 14:00",
  },
  {
    name: "Grace Johnson",
    disease: "Consultation",
    date: "2024-07-20",
    time: "12:00",
    timings: "12:00 - 13:00",
  },

  // Current Week
  {
    name: "Wade Warren",
    disease: "Scaling",
    date: "2024-07-22",
    time: "09:00",
    timings: "09:00 - 10:00",
  },
  {
    name: "Hannah Moore",
    disease: "Checkup",
    date: "2024-07-22",
    time: "10:00",
    timings: "10:00 - 11:00",
  },
  {
    name: "Irene Lee",
    disease: "Consultation",
    date: "2024-07-22",
    time: "11:00",
    timings: "11:00 - 12:00",
  },
  {
    name: "Jack Brown",
    disease: "Follow-up",
    date: "2024-07-23",
    time: "11:00",
    timings: "11:00 - 12:00",
  },
  {
    name: "Kara Clark",
    disease: "Emergency",
    date: "2024-07-25",
    time: "16:00",
    timings: "16:00 - 17:00",
  },
  {
    name: "Liam Scott",
    disease: "Checkup",
    date: "2024-07-27",
    time: "13:00",
    timings: "13:00 - 14:00",
  },
  {
    name: "Mia Davis",
    disease: "Consultation",
    date: "2024-07-28",
    time: "12:00",
    timings: "12:00 - 13:00",
  },

  // Next Week
  {
    name: "Nina Taylor",
    disease: "Follow-up",
    date: "2024-07-29",
    time: "09:00",
    timings: "09:00 - 10:00",
  },
  {
    name: "Oliver Brown",
    disease: "Scaling",
    date: "2024-07-29",
    time: "10:00",
    timings: "10:00 - 11:00",
  },
  {
    name: "Paula Martinez",
    disease: "Consultation",
    date: "2024-07-29",
    time: "11:00",
    timings: "11:00 - 12:00",
  },
  {
    name: "Quinn Anderson",
    disease: "Emergency",
    date: "2024-07-30",
    time: "11:00",
    timings: "11:00 - 12:00",
  },
  {
    name: "Ryan Wilson",
    disease: "Checkup",
    date: "2024-08-01",
    time: "16:00",
    timings: "16:00 - 17:00",
  },
  {
    name: "Sophia Martinez",
    disease: "Follow-up",
    date: "2024-08-03",
    time: "13:00",
    timings: "13:00 - 14:00",
  },
  {
    name: "Tom Clark",
    disease: "Consultation",
    date: "2024-08-04",
    time: "12:00",
    timings: "12:00 - 13:00",
  },
];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(
    startOfWeek(new Date(), { weekStartsOn: 1 })
  );

  const startWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const endWeek = endOfWeek(currentDate, { weekStartsOn: 1 });

  const daysOfWeek = eachDayOfInterval({ start: startWeek, end: endWeek });

  const handlePreviousWeek = () => {
    setCurrentDate(subWeeks(currentDate, 1));
  };

  const handleNextWeek = () => {
    setCurrentDate(addWeeks(currentDate, 1));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleRefresh = () => {
    const today = new Date();
    setCurrentDate(today);
    setSelectedDate(startOfWeek(today, { weekStartsOn: 1 }));
  };

  const getAppointmentForSlot = (date, time) => {
    const formattedDate = format(date, "yyyy-MM-dd");
    console.log("Formatted Date:", formattedDate);
    console.log("Time:", time);
    return appointments.find((appointment) => {
      console.log("Checking appointment:", appointment);
      return appointment.date === formattedDate && appointment.time === time;
    });
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
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className={styles.currentWeek}>
              <p
                style={{ margin: "0px", padding: "0px", width: "fit-content" }}
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
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          <div className={styles.btnContainer}>
            <div className={styles.refreshDiv} onClick={handleRefresh}>
              <img
                src="/images/doctorAppointmentPatientData/refresh.svg"
                alt="Refresh"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className={styles.printDiv}>
              <img
                src="/images/doctorAppointmentPatientData/print.svg"
                alt="Print"
                style={{ cursor: "pointer" }}
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
              <p
                key={index}
                className={`${styles.dateItem} ${
                  format(day, "yyyy-MM-dd") ===
                  format(currentDate, "yyyy-MM-dd")
                    ? styles.curentDate
                    : ""
                } ${format(day, "EEEE") === "Sunday" ? styles.sunday : ""}`}
                onClick={() => handleDateClick(day)}
              >
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

            <div className={styles.gridsContainer}>
              <div className={styles.gridContainer2}>
                {daysOfWeek.map((day, index) => (
                  <div key={index} className={styles.gridItem2}></div>
                ))}
              </div>

              <div className={styles.gridContainer}>
                {times.map((time, timeIndex) =>
                  daysOfWeek.map((day, dayIndex) => {
                    const appointment = getAppointmentForSlot(day, time);
                    const cellId = `${format(day, "yyyy-MM-dd")}-${time}`;
                    console.log("Appointment data:", appointment);
                    return (
                      <div key={cellId} id={cellId} className={styles.gridItem}>
                        {appointment ? (
                          <PatientAppointmentCardDetail
                            name={appointment.name}
                            disease={appointment.disease}
                            timings={appointment.timings}
                          />
                        ) : ""}
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyCalender;
