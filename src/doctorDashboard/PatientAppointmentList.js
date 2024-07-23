import React from "react";
import style from "./PatientAppointmentList.module.css";
import Calendar from "../commonComponents/CalenderComponent";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
  }).format(date);
};

function PatientAppointmentList({ heading, selectedDate, setSelectedDate }) {
  const appointmentsByDate = {
    "2024-07-23": [
      {
        name: "Esther Howard",
        visitTime: "08:00 - 09:00",
        timeColor: "rgba(133, 133, 133, 1)",
        image: "/images/doctorDashboard/patient1.png",
      },
      {
        name: "Leslie Alexander",
        visitTime: "09:30 - 11:00",
        backgroundColor: "rgba(11, 219, 182, 1)",
        height: "104px",
        timeColor: "rgba(0,0,0,1)",
        image: "/images/doctorDashboard/patient.png",
      },
      {
        name: "Esther Howard",
        visitTime: "13:00 - 14:00",
        timeColor: "rgba(133, 133, 133, 1)",
        image: "/images/doctorDashboard/patient1.png",
      },
      {
        name: "Esther Howard",
        visitTime: "14:00 - 15:00",
        timeColor: "rgba(133, 133, 133, 1)",
        image: "/images/doctorDashboard/patient1.png",
      },
    ],
    "2024-07-24": [
      {
        name: "John Doe",
        visitTime: "08:30 - 09:30",
        timeColor: "rgba(133, 133, 133, 1)",
        image: "/images/doctorDashboard/patient1.png",
      },
      {
        name: "Jane Smith",
        visitTime: "10:00 - 11:30",
        backgroundColor: "",
        height: "104px",
        timeColor: "rgba(0,0,0,1)",
        image: "/images/doctorDashboard/patient1.png",
      },
      {
        name: "Emily Clark",
        visitTime: "14:00 - 15:00",
        timeColor: "rgba(133, 133, 133, 1)",
        image: "/images/doctorDashboard/patient1.png",
      },
      {
        name: "Michael Johnson",
        visitTime: "15:00 - 16:00",
        timeColor: "rgba(133, 133, 133, 1)",
        image: "/images/doctorDashboard/patient1.png",
      },
    ],
    defaultSchedule: [
      {},
      {},
      {
        name: "Lunch Break",
        visitTime: "",
        height: "91px",
        backgroundImage: "/images/doctorDashboard/lunchBreak.png",
        textAlign: "center",
      },
      {},
      {},
    ],
  };

  const formattedSelectedDate = formatDate(selectedDate);
  const formattedFullDate = selectedDate.toLocaleDateString("en-CA");
  const appointments =
    appointmentsByDate[formattedFullDate] || appointmentsByDate.defaultSchedule;

  const ensureLunchBreak = (appointments) => {
    const lunchBreak = {
      name: "Lunch Break",
      visitTime: "",
      height: "91px",
      backgroundImage: "/images/doctorDashboard/lunchBreak.png",
      textAlign: "center",
    };

    if (appointments[2]?.name !== "Lunch Break") {
      const updatedAppointments = [...appointments];
      updatedAppointments.splice(2, 0, lunchBreak);
      return updatedAppointments;
    }

    return appointments;
  };

  const finalAppointments = ensureLunchBreak(appointments);

  const realAppointmentsCount = finalAppointments.filter(
    (appointment) => appointment.name && appointment.name !== "Lunch Break"
  ).length;

  console.log(realAppointmentsCount);

  return (
    <div className={style.outer}>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <div className={style.appointment}>
        <p className={style.todayAppointment}>
          {formattedSelectedDate === formatDate(new Date("2024-07-23"))
            ? "Today"
            : formattedSelectedDate}{" "}
          {heading}
        </p>
        <img src="/images/doctorDashboard/appointmentDots.svg" alt="" />
      </div>

      <p className={style.totalAppointment}>
        {realAppointmentsCount} {heading}
      </p>

      <div className={style.timeAndCard}>
        <div className={style.timeDiv}>
          <p className={style.time}>08:00</p>
          <p className={style.time}>09:00</p>
          <p className={style.time}>09:00</p>
          <p className={style.time}>10:00</p>
          <p className={style.time}>11:00</p>
          <p className={style.time}>12:00</p>
          <p className={style.time}>13:00</p>
          <p className={style.time}>14:00</p>
          <p className={style.time}>15:00</p>
          <p className={style.time}>16:00</p>
        </div>

        <div className={style.cardDiv}>
          {finalAppointments.map((appointment, index) => (
            <div
              key={index}
              className={style.cardouter}
              style={{
                height: appointment.height || "78px",
                backgroundColor: appointment.backgroundColor || "",
                backgroundImage: appointment.backgroundImage
                  ? `url(${appointment.backgroundImage})`
                  : "none",
              }}
            >
              {appointment.image && (
                <img
                  src={appointment.image}
                  alt=""
                  className={style.patientImage}
                />
              )}
              <div className={style.nameContainer} style={{ width: "100%" }}>
                <p
                  className={style.name}
                  style={{ textAlign: appointment.textAlign || "left" }}
                >
                  {appointment.name}
                </p>
                <p
                  className={style.visitTime}
                  style={{ color: appointment.timeColor || "inherit" }}
                >
                  {appointment.visitTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PatientAppointmentList;
