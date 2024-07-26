import React, { useState } from "react";
import style from "./WeeklyCases.module.css";

const allCases = [
  {
    date: "2024-07-15",
    image: "/images/advocateDashboard/client.png",
    name: "Gina Davis",
    caseCategory: "Family",
    lastHearing: "2024-07-10",
    opposition: "Lisa White",
  },

  {
    date: "2024-07-16",
    image: "/images/advocateDashboard/client.png",
    name: "Gina Davis",
    caseCategory: "Family",
    lastHearing: "2024-07-10",
    opposition: "Lisa White",
  },
  {
    date: "2024-07-17",
    image: "/images/advocateDashboard/client.png",
    name: "Gina Davis",
    caseCategory: "Family",
    lastHearing: "2024-07-10",
    opposition: "Lisa White",
  },
  {
    date: "2024-07-18",
    image: "/images/advocateDashboard/client.png",
    name: "Mark Wilson",
    caseCategory: "Civil",
    lastHearing: "2024-07-12",
    opposition: "Tom Green",
  },
  {
    date: "2024-07-22",
    image: "/images/advocateDashboard/client.png",
    name: "Alice Johnson",
    caseCategory: "Family",
    lastHearing: "2024-07-15",
    opposition: "Robert Brown",
  },
  {
    date: "2024-07-23",
    image: "/images/advocateDashboard/client.png",
    name: "Alice Johnson",
    caseCategory: "Family",
    lastHearing: "2024-07-15",
    opposition: "Robert Brown",
  },
  {
    date: "2024-07-23",
    image: "/images/advocateDashboard/client.png",
    name: "M Johnson",
    caseCategory: "Family",
    lastHearing: "2024-07-15",
    opposition: "Robert Key",
  },
  {
    date: "2024-07-24",
    image: "/images/advocateDashboard/client.png",
    name: "Bob Smith",
    caseCategory: "Civil",
    lastHearing: "2024-07-18",
    opposition: "Sarah Davis",
  },
  
  {
    date: "2024-07-31",
    image: "/images/advocateDashboard/client.png",
    name: "Daisy Miller",
    caseCategory: "Family",
    lastHearing: "2024-07-25",
    opposition: "John Wilson",
  },
  {
    date: "2024-08-01",
    image: "/images/advocateDashboard/client.png",
    name: "Ethan Scott",
    caseCategory: "Civil",
    lastHearing: "2024-07-30",
    opposition: "Anna Lee",
  },
  {
    date: "2024-08-02",
    image: "/images/advocateDashboard/client.png",
    name: "Fiona Green",
    caseCategory: "Criminal",
    lastHearing: "2024-07-31",
    opposition: "James Taylor",
  },
  {
    date: "2024-08-03",
    image: "/images/advocateDashboard/client.png",
    name: "Shane Warne",
    caseCategory: "Criminal",
    lastHearing: "2024-07-31",
    opposition: "J. Anderson",
  },
];

function WeeklyCases() {
  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek());

  function getCurrentWeek() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));
    startOfWeek.setHours(0, 0, 0, 0); 
    return startOfWeek;
  }

  function getWeekCases(startOfWeek) {
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    return allCases.filter((caseItem) => {
      const caseDate = new Date(caseItem.date);
      return caseDate >= startOfWeek && caseDate <= endOfWeek;
    });
  }

  function getWeekLabel(startOfWeek) {
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    return `${startOfWeek.toDateString()} - ${endOfWeek.toDateString()}`;
  }

  function handleNextWeek() {
    const nextWeek = new Date(currentWeek);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCurrentWeek(nextWeek);
  }

  function handlePreviousWeek() {
    const previousWeek = new Date(currentWeek);
    previousWeek.setDate(previousWeek.getDate() - 7);
    setCurrentWeek(previousWeek);
  }

  const cases = getWeekCases(currentWeek);

  return (
    <div className={style.outer}>
      <div className={style.topDiv}>
        <h1 className={style.heading}>
          {currentWeek.toDateString() === getCurrentWeek().toDateString()
            ? "This Week"
            : getWeekLabel(currentWeek)}
        </h1>
        <div className={style.btnContainer}>
          <div className={style.back}>
            <img
              src="/images/advocateDashboard/back.svg"
              alt="Back"
              onClick={handlePreviousWeek}
            />
          </div>
          <button className={style.week} onClick={handleNextWeek}>
            Next Week
          </button>
          <div className={style.next}>
            <img
              src="/images/advocateDashboard/next.svg"
              alt="Next"
              onClick={handleNextWeek}
            />
          </div>
        </div>
      </div>

      <div className={style.casesContainer}>
        {cases.length === 0 ? (
          <p className={style.noCases}>No cases available</p>
        ) : (
          cases.map((caseItem, index) => (
            <div key={index} className={style.case}>
              <h1 className={style.date}>
                {new Date(caseItem.date).toDateString()}
              </h1>

              <div className={style.imageContainer}>
                <img src={caseItem.image} alt={caseItem.name} />
                <p className={style.name}>{caseItem.name}</p>
              </div>

              <div className={style.detailsContainer}>
                <div className={style.left}>
                  <p className={style.about}>Case</p>
                  <p className={style.value}>{caseItem.caseCategory}</p>
                </div>

                <div className={style.left}>
                  <p className={style.about}>Last Hearing</p>
                  <p className={style.value}>{caseItem.lastHearing}</p>
                </div>

                <div className={style.left}>
                  <p className={style.about}>V/S</p>
                  <p className={style.value}>{caseItem.opposition}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WeeklyCases;
