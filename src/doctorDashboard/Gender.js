import React, { useRef, useEffect, useState } from "react";
import style from "./Gender.module.css";
import CircularChart from "./CircularChart";

function Gender() {
  const dataChart = {
    male: 45,
    female:30,
    child: 25,
  };
  const chartRef = useRef(null);
  const [chartDimensions, setChartDimensions] = useState({
    width: 180,
    height: 180,
  });

  useEffect(() => {
    if (chartRef.current) {
      const { offsetWidth, offsetHeight } = chartRef.current;
      setChartDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [chartRef.current]);

  return (
    <div className={style.genderDiv}>
      <h1 className={style.heading}>Gender</h1>
      <div
        className={style.pieChart}
        ref={chartRef}
        style={{
          width: "180px",
          height: "180px",
          position: "relative",
        }}
      >
        <CircularChart
          dataChart={dataChart}
          width={chartDimensions.width}
          height={chartDimensions.height}
        />
      </div>
      <ul className={style.list1}>
        <li>Male</li>
        <li>Female</li>
        <li>Child</li>
      </ul>
      <ul className={style.list2}>
        <li>{dataChart.male}%</li>
        <li>{dataChart.female}%</li>
        <li>{dataChart.child}%</li>
      </ul>
    </div>
  );
}

export default Gender;
