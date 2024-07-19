import React from "react";

const patientData = [
  {
    img: "/images/doctorDashboard/nextPatient.png",
    name: "Wade Warren",
    disease: "Scaling",
    date: "5/12/2022",
    time: "10:00 AM",
    status: "",
  },
];

function PatientTable() {
  return (
    <table style={{ width: "766px", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                justifyContent: "center",
              }}
            >
              <p className="" style={{ margin: "0px", padding: "" }}>
                Name
              </p>
              <img src="/images/doctorDashboard/filter.svg" alt="" />
            </div>
          </th>
          <th>Disease</th>
          <th>Date</th>
          <th>Time</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {patientData.map((patient, index) => (
          <tr key={index}>
            <td
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={patient.img}
                alt={patient.name}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <span>{patient.name}</span>
            </td>
            <td>{patient.disease}</td>
            <td>{patient.date}</td>
            <td>{patient.time}</td>
            <td>
              <div
                className=""
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: "10px" }}>
                  <img
                    src="/images/doctorDashboard/accept.svg"
                    alt="Accept"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </div>
                <div>
                  <img
                    src="/images/doctorDashboard/reject.svg"
                    alt="Reject"
                    style={{
                      width: "20px",
                      height: "20px",
                    }}
                  />
                </div>
              </div>
            </td>
            <td>
              <div
                className=""
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <p className="" style={{ margin: "0px", padding: "" }}>
                  Details
                </p>
                <img src="/images/doctorDashboard/details.svg" alt="" />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PatientTable;
