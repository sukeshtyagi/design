import React, { useEffect } from "react";
import * as d3 from "d3";

const CircularChart = ({ width, height, dataChart }) => {
  useEffect(() => {
    const thickness = 25;
    const radius = Math.min(width, height) / 2;
    const innerRadius = radius - thickness;

    const svg = d3.select("#chart").attr("width", width).attr("height", height);

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Data including the color
    const data = [
      { category: "Female", value: dataChart.female, color: "#FEA805" },
      { category: "Child", value: dataChart.child, color: "#25A7FA" },
      { category: "Male", value: dataChart.male, color: "#7A6EFE" },
    ];

    // Pie chart configuration
    const pie = d3
      .pie()
      .value((d) => d.value)
      .sort(null)
      .startAngle(-Math.PI / 2)
      .endAngle(1.5 * Math.PI);

    const arc = d3.arc().innerRadius(innerRadius).outerRadius(radius);

    const updateArcs = () => {
      const arcs = g.selectAll(".arc").data(pie(data), (d) => d.data.category);

      arcs
        .enter()
        .append("g")
        .attr("class", "arc")
        .append("path")
        .attr("d", arc)
        .attr("fill", (d) => d.data.color)
        .style("stroke", "rgba(255, 255, 255, 0)")
        .style("stroke-width", "0px")
        .transition()
        .duration(750)
        .attrTween("d", function (d) {
          const i = d3.interpolate(this._current, d);
          this._current = i(0);
          return (t) => arc(i(t));
        });

      arcs
        .select("path")
        .transition()
        .duration(750)
        .attrTween("d", function (d) {
          const i = d3.interpolate(this._current, d);
          this._current = i(0);
          return (t) => arc(i(t));
        });

      arcs
        .exit()
        .select("path")
        .transition()
        .duration(750)
        .attrTween("d", function (d) {
          const i = d3.interpolate(d, { ...d, endAngle: d.startAngle });
          return (t) => arc(i(t));
        })
        .remove();
    };

    updateArcs();

    // Cleanup function
    return () => {
      svg.selectAll("*").remove();
    };
  }, [width, height, dataChart]);

  return (
    <svg
      id="chart"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
      }}
    ></svg>
  );
};

export default CircularChart;
