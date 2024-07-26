import React, { useState } from "react";
import style from "../../doctorDashboardPages/doctorDashboard/PatientAppointmentTable.module.css";

function CaseRequests() {
  const initialPatientData = [
    {
      img: "/images/doctorDashboard/nextPatient.png",
      name: "Wade Warren",
      disease: "Scaling",
      date: "8/12/2022",
      time: "10:00 AM",
      status: "",
    },
    {
      img: "/images/doctorDashboard/nextPatient.png",
      name: "Wade Warren",
      disease: "Scaling",
      date: "8/12/2022",
      time: "10:00 AM",
      status: "",
    },
    {
      img: "/images/doctorDashboard/nextPatient.png",
      name: "Wade Warren",
      disease: "Scaling",
      date: "12/12/2022",
      time: "10:00 AM",
      status: "",
    },
    {
      img: "/images/doctorDashboard/nextPatient.png",
      name: "Wade Warren",
      disease: "Scaling",
      date: "25/12/2022",
      time: "10:00 AM",
      status: "",
    },
  ];

  const [patientData, setPatientData] = useState(initialPatientData);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const handleStatusChange = (index, status) => {
    const updatedPatientData = [...patientData];
    updatedPatientData[index].status = status;
    setPatientData(updatedPatientData);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    sortData(key, direction);
  };

  const sortData = (key, direction) => {
    const sortedData = [...patientData].sort((a, b) => {
      let aValue = a[key];
      let bValue = b[key];

      if (key === "date") {
        aValue = new Date(aValue.split("/").reverse().join("-"));
        bValue = new Date(bValue.split("/").reverse().join("-"));
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) {
        return direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setPatientData(sortedData);
  };

  return (
    <>
      <div className={style.topContainer}>
        <h1 className={style.heading}>Case Requests</h1>
        <button className={style.view}>View All</button>
      </div>
      <table className={style.tableContainer} style={{ height: "fit-content" }}>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              <div className={style.tableHeader}>
                <p className={style.tableHeaderText}>Name</p>
                <img
                  src="/images/doctorDashboard/filter.svg"
                  alt=""
                  className={`${style.sortIcon} ${
                    sortConfig.key === "name" && style[sortConfig.direction]
                  }`}
                />
              </div>
            </th>
            <th onClick={() => handleSort("disease")}>
              <div className={style.tableHeader}>
                <p className={style.tableHeaderText}>Disease</p>
                <img
                  src="/images/doctorDashboard/filter.svg"
                  alt=""
                  className={`${style.sortIcon} ${
                    sortConfig.key === "disease" && style[sortConfig.direction]
                  }`}
                />
              </div>
            </th>
            <th onClick={() => handleSort("date")}>
              <div className={style.tableHeader}>
                <p className={style.tableHeaderText}>Date</p>
                <img
                  src="/images/doctorDashboard/filter.svg"
                  alt=""
                  className={`${style.sortIcon} ${
                    sortConfig.key === "date" && style[sortConfig.direction]
                  }`}
                />
              </div>
            </th>
            <th
              onClick={() => handleSort("time")}
              className={style.hideOnSmall2}
            >
              <div className={style.tableHeader}>
                <p className={style.tableHeaderText}>Time</p>
                <img
                  src="/images/doctorDashboard/filter.svg"
                  alt=""
                  className={`${style.sortIcon} ${
                    sortConfig.key === "time" && style[sortConfig.direction]
                  }`}
                />
              </div>
            </th>
            <th className={style.hideOnSmall}>
              <div className={style.tableHeader}>
                <p className={style.tableHeaderText}>Status</p>
                <img src="/images/doctorDashboard/filter.svg" alt="" />
              </div>
            </th>
            <th className={style.hideOnSmall}></th>
          </tr>
        </thead>
        <tbody>
          {patientData.map((patient, index) => (
            <tr key={index} className={style.tableRow}>
              <td>
                <div className={style.tableCell}>
                  <img
                    src={patient.img}
                    alt={patient.name}
                    className={style.patientImg}
                  />
                  <p className={style.patientName}>{patient.name}</p>
                </div>
              </td>
              <td className={style.patientDisease}>{patient.disease}</td>
              <td className={style.patientDisease}>{patient.date}</td>
              <td className={`${style.patientDisease} ${style.hideOnSmall2}`}>
                {patient.time}
              </td>
              <td className={style.hideOnSmall}>
                {patient.status ? (
                  <p
                    className={`${style.updatedStatus} ${
                      patient.status === "Accept"
                        ? style.accepted
                        : style.rejected
                    }`}
                  >
                    {patient.status}
                  </p>
                ) : (
                  <div className={style.statusIcons}>
                    <img
                      src="/images/doctorDashboard/accept.svg"
                      alt="Accept"
                      className={style.statusIcon}
                      onClick={() => handleStatusChange(index, "Accept")}
                    />
                    <img
                      src="/images/doctorDashboard/reject.svg"
                      alt="Reject"
                      className={style.statusIcon}
                      onClick={() => handleStatusChange(index, "Reject")}
                    />
                  </div>
                )}
              </td>
              <td className={style.hideOnSmall}>
                <div className={style.detailsContainer}>
                  <p className={style.detailsText}>Details</p>
                  <img src="/images/doctorDashboard/details.svg" alt="" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CaseRequests;
