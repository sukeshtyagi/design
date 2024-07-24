import React from "react";
import style from "./WeeklyCases.module.css";

function WeeklyCases() {
  const cases = [
    {
      date: "23 August 2021, Monday",
      image: "/images/advocateDashboard/client.png",
      name: "Leslie Alexander",
      caseCategory: "Family",
      lastHearing: "16/08/2021",
      opposition: "Jenny Wilson",
    },
    {
      date: "23 August 2021, Monday",
      image: "/images/advocateDashboard/client.png",
      name: "Leslie Alexander",
      caseCategory: "Family",
      lastHearing: "16/08/2021",
      opposition: "Jenny Wilson",
    },
    {
      date: "23 August 2021, Monday",
      image: "/images/advocateDashboard/client.png",
      name: "Leslie Alexander",
      caseCategory: "Family",
      lastHearing: "16/08/2021",
      opposition: "Jenny Wilson",
    },
    {
      date: "23 August 2021, Monday",
      image: "/images/advocateDashboard/client.png",
      name: "Leslie Alexander",
      caseCategory: "Family",
      lastHearing: "16/08/2021",
      opposition: "Jenny Wilson",
    },
  ];

  return (
    <div className={style.outer}>
      <div className={style.topDiv}>
        <h1 className={style.heading}>This Week Cases</h1>
        <div className={style.btnContainer}>
          <div className={style.back}>
            <img src="/images/advocateDashboard/back.svg" alt="Back" />
          </div>
          <button className={style.week}>Next Week</button>
          <div className={style.next}>
            <img src="/images/advocateDashboard/next.svg" alt="Next" />
          </div>
        </div>
      </div>

      <div className={style.casesContainer}>
        {cases.map((caseItem, index) => (
          <div key={index} className={style.case}>
            <h1 className={style.date}>{caseItem.date}</h1>

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
        ))}
      </div>
    </div>
  );
}

export default WeeklyCases;
