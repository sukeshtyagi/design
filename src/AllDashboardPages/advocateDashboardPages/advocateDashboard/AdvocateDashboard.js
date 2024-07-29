import React, { useState } from "react";
import style from "../../../commonComponents/dashboardComponents/DashboardPagesCommonStyle.module.css";
import DashboardLeftSide from "../../../commonComponents/dashboardComponents/DashboardLeftSide";
import SearchBarDashboard from "../../../commonComponents/dashboardComponents/SearchBarDashboard";
import AppointmentList from "../../../commonComponents/dashboardComponents/AppointmentList";
import DashboardFooter from "../../../commonComponents/dashboardComponents/DashboardFooter";
import LeftSideMenuBar from "../../../commonComponents/dashboardComponents/LeftSideMenuBar";

import { getAppointmentsByDate } from "./AppointmentData";
import CaseRequests from "./CaseRequests";
import WeeklyCases from "./WeeklyCases";

function AdvocateDashboard() {
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const appointmentsByDate = getAppointmentsByDate();

  const cardsData = [
    {
      title: "Total Cases",
      qty: 1000,
      icon: "/images/advocateDashboard/casesIcon.svg",
      bgColor: "rgba(246, 221, 255, 1)",
      borderLeft: "5px solid rgba(161, 105, 233, 1)",
    },

    {
      title: "Won Cases",
      qty: 750,
      icon: "/images/advocateDashboard/wonIcon.svg",
      bgColor: "rgba(199, 221, 254, 1)",
      borderLeft: "5px solid rgba(24, 93, 196, 1)",
    },

    {
      title: "Lost Cases",
      qty: 240,
      icon: "/images/advocateDashboard/lostIcon.svg",
      bgColor: "rgba(153, 255, 212, 1)",
      borderLeft: "5px solid rgba(46, 180, 123, 1)",
    },

    {
      title: "Overall Ratings",
      qty: 4.5,
      icon: "/images/advocateDashboard/star.svg",
      bgColor: "rgba(255, 220, 152, 1)",
      borderLeft: "5px solid rgba(230, 152, 0, 1)",
    },
  ];

  return (
    <div
      className={style.doctorDashboardOuter}
      style={{ background: "url(/images/Bcg.svg)" }}
    >
      <div className="">
        <div className="block md2:hidden">
          <LeftSideMenuBar
            name="Ronald Richards"
            menuItem1="Dashboard"
            menuItem2="Appointments"
            menuItem3="My Cases"
            menuItem4="Messages"
            menuItem6="Payments"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div className="hidden md2:block">
          <DashboardLeftSide
            name="Ronald Richards"
            menuItem1="Dashboard"
            menuItem2="Appointments"
            menuItem3="My Cases"
            menuItem4="Messages"
            menuItem6="Payments"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>

      <div className={style.rightPart}>
        <SearchBarDashboard />
        {selectedOption === "Dashboard" && (
          <>
            <div className={style.locationFilterPara}>
              <p className={style.para}>Home</p>
              <img src="/images/doctorDashboard/rightArrow.svg" alt="" />
              <p className={style.paraSpan}>Dashboard</p>
            </div>

            <div className={style.mainSection}>
              <div className={style.leftArea}>
                <div className={style.cardsContainer}>
                  {cardsData.map((card, index) => (
                    <div
                      key={index}
                      className={style.cardOuter}
                      style={{ borderLeft: card.borderLeft }}
                    >
                      <div
                        className={style.iconDiv}
                        style={{ backgroundColor: card.bgColor }}
                      >
                        <img src={card.icon} alt="" />
                      </div>
                      <div className={style.detailDiv}>
                        <p className={style.title}>{card.title}</p>
                        <p className={style.qty}>{card.qty}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <WeeklyCases />
                <CaseRequests />
              </div>

              <div className={style.rightArea}>
                <AppointmentList
                  heading="Appointments"
                  selectedDate={selectedDate}
                  setSelectedDate={setSelectedDate}
                  appointmentsByDate={appointmentsByDate}
                />
              </div>
            </div>
          </>
        )}
        <DashboardFooter />
      </div>
    </div>
  );
}

export default AdvocateDashboard;
