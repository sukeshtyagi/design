// appointmentsData.js
export const getAppointmentsByDate = () => {
  return {
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
};
