import React, { useState } from "react";
import style from "./GraphComponent.module.css";
import MonthlyGraph from "./MonthlyGraph";

function GraphComponent() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("Month");

  return (
    <div className={style.outer}>
      <div className={style.dataContainer}>
        <div className={style.top}>
          <p className={style.stats}>Performance Stat</p>
          <div className={style.chartFilter}>
            <button
              className={`${style.timeFrameButton} ${
                selectedTimeFrame === "Week" ? style.selected : ""
              }`}
              onClick={() => setSelectedTimeFrame("Week")}
            >
              Weeks
            </button>
            <button
              className={`${style.timeFrameButton} ${
                selectedTimeFrame === "Month" ? style.selected : ""
              }`}
              onClick={() => setSelectedTimeFrame("Month")}
            >
              Month
            </button>
            <button
              className={`${style.timeFrameButton} ${
                selectedTimeFrame === "Year" ? style.selected : ""
              }`}
              onClick={() => setSelectedTimeFrame("Year")}
            >
              Year
            </button>
          </div>
        </div>

        <ul className={style.legendContainer}>
          <li className={style.legend}>
            <div
              className={style.colorSquare}
              style={{ backgroundColor: "rgba(26, 186, 119, 1)" }}
            ></div>
            Tutoring Hours
          </li>
          <li className={style.legend}>
            <div
              className={style.colorSquare}
              style={{ backgroundColor: "rgba(240, 198, 108, 1)" }}
            ></div>
            Number of Students
          </li>
          <li className={style.legend}>
            <div
              className={style.colorSquare}
              style={{ backgroundColor: "rgba(90, 179, 241, 1)" }}
            ></div>
            Classes
          </li>
        </ul>
      </div>

      <div className="graphContainer">
        {selectedTimeFrame === "Month" && <MonthlyGraph />}
        {selectedTimeFrame === "Week" && <p>No data available.</p>}
        {selectedTimeFrame === "Year" && <p>No data available.</p>  }
      </div>
    </div>
  );
}

export default GraphComponent;
