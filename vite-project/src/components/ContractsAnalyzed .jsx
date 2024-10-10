import React from "react";
import "./ContractsAnalyzed.css";

const ContractsAnalyzed = () => {
  // Data for contracts analyzed each day (adjust the numbers as needed)
  const data = [
    { day: "Fri", value: 2 },
    { day: "Sat", value: 0 },
    { day: "Sun", value: 0 },
    { day: "Mon", value: 2 },
    { day: "Tue", value: 1 },
  ];

  return (
    <div className="contracts-analyzed-container">
      <h2>Contracts Analyzed</h2>
      <div className="chart">
        {data.map((item, index) => (
          <div className="bar-container" key={index}>
            <div
              className="bar"
              style={{ height: `${item.value * 50}px` }} // Adjust bar height based on value
            >
              <span className="bar-label">{item.value}</span>
            </div>
            <span className="day-label">{item.day}</span>
          </div>
        ))}
      </div>
      <div className="legend">
        <span className="legend-dot"></span> Last 5 days
      </div>
    </div>
  );
};

export default ContractsAnalyzed;
