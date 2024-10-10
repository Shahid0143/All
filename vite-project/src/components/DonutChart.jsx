import React from "react";
import "./DonutChart.css";

const DonutChart = () => {
  // Contract distribution values for each segment (adjust percentages as needed)
  const distributions = [
    { value: 40, color: "#000000" }, // Black
    { value: 30, color: "#808080" }, // Grey
    { value: 30, color: "#d3d3d3" }, // Light Grey
  ];

  const radius = 50; // Radius of the donut chart
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="donut-chart-container">
      <svg width="150" height="150" viewBox="0 0 150 150">
        <circle
          cx="75"
          cy="75"
          r={radius}
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="20"
        />
        {
          distributions.reduce(
            (acc, dist, index) => {
              const offset = acc.offset - (dist.value / 100) * circumference;
              const strokeDasharray = `${
                (dist.value / 100) * circumference
              } ${circumference}`;

              return {
                offset,
                elements: [
                  ...acc.elements,
                  <circle
                    key={index}
                    cx="75"
                    cy="75"
                    r={radius}
                    fill="none"
                    stroke={dist.color}
                    strokeWidth="20"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={offset}
                    transform="rotate(-90 75 75)"
                  />,
                ],
              };
            },
            { offset: circumference / 4, elements: [] }
          ).elements
        }
      </svg>
    </div>
  );
};

export default DonutChart;
