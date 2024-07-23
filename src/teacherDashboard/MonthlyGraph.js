import React from "react";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Tutoring Hours",
    color: "rgba(26, 186, 119, 1)",
    data: [
      { x: "Jan", y: 75 },
      { x: "Feb", y: 74 },
      { x: "Mar", y: 150 },
      { x: "Apr", y: 300 },
      { x: "May", y: 200 },
      { x: "Jun", y: 180 },
      { x: "Jul", y: 220 },
      { x: "Aug", y: 230 },
      { x: "Sep", y: 210 },
      { x: "Oct", y: 400 },
      { x: "Nov", y: 410 },
      { x: "Dec", y: 400 },
    ],
  },
  {
    id: "Number of Students",
    color: "rgba(240, 198, 108, 1)",
    data: [
      { x: "Jan", y: 75 },
      { x: "Feb", y: 100 },
      { x: "Mar", y: 120 },
      { x: "Apr", y: 150 },
      { x: "May", y: 120 },
      { x: "Jun", y: 160 },
      { x: "Jul", y: 150 },
      { x: "Aug", y: 300 },
      { x: "Sep", y: 380 },
      { x: "Oct", y: 340 },
      { x: "Nov", y: 400 },
      { x: "Dec", y: 430 },
    ],
  },
  {
    id: "Number of Classes",
    color: "rgba(90, 179, 241, 1)",
    data: [
      { x: "Jan", y: 60 },
      { x: "Feb", y: 65 },
      { x: "Mar", y: 75 },
      { x: "Apr", y: 90 },
      { x: "May", y: 97 },
      { x: "Jun", y: 108 },
      { x: "Jul", y: 120 },
      { x: "Aug", y: 110 },
      { x: "Sep", y: 120 },
      { x: "Oct", y: 150 },
      { x: "Nov", y: 190 },
      { x: "Dec", y: 220 },
    ],
  },
];

const CustomTooltip = ({ point }) => (
  <div
    style={{
      width: "fit-content",
      height: "fit-content",
      padding: "13px 14px",
      borderRadius:"8px",
      background: "rgba(11, 219, 182, 1)",
    }}
  >
    <p
      style={{
        margin: "0",
        padding: "0",
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: "500",
        lineHeight: "25px",
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
      }}
    >
      {point.serieId}
    </p>
    <p
      style={{
        margin: "0",
        padding: "0",
        fontFamily: "Poppins",
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: "25px",
        textAlign: "left",
        color: "rgba(255, 255, 255, 1)",
      }}
    >
      {point.data.yFormatted}
    </p>
  </div>
);

function MontylyGraph() {
  return (
    <div
      style={{
        width: "702px",
        height: "352px",
        backgroundColor: "rgba(245, 245, 245, 1)",
      }}
    >
      <ResponsiveLine
        data={data}
        margin={{ top: 60, right: 26, bottom: 50, left: 36 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear", stacked: false }}
        curve="natural"
        lineWidth={3}
        colors={data.map((line) => line.color)}
        enablePoints={false}
        enableGridX={false}
        enableGridY={true}
        gridYValues={[0, 100, 200, 300, 400, 500]}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          tickValues: [0, 100, 200, 300, 400, 500],
          legend: "",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        fill={[
          {
            match: { id: "Tutoring Hours" },
            id: "area",
            color: "rgba(255, 0, 0, 0.3)", // Red color with transparency
          },
        ]}
        tooltip={CustomTooltip}
      />
    </div>
  );
}

export default MontylyGraph;
