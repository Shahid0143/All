import React from "react";
import "./ExpirationTimeline.css";

const ExpirationTimeline = () => {
  // Values representing the percentage of each distribution (adjust these as needed)
  const distributions = [
    { value: 40, color: "#000000" }, // Black for 40%
    { value: 30, color: "#808080" }, // Grey for 30%
    { value: 30, color: "#d3d3d3" }, // Light Grey for 30%
  ];

  const radiusValues = [50, 40, 30]; // Different radii for stacking circles
  const strokeWidth = 10; // Stroke width for each circle

  return (
    <div className="expiration-timeline-card">
      <h3 className="expiration-title">Expiration Timeline</h3>
      <div className="progress-circle-container">
        <svg width="120" height="120">
          {distributions.map((dist, index) => {
            const radius = radiusValues[index];
            const circumference = 2 * Math.PI * radius;
            const arcLength = (dist.value / 100) * circumference;

            return (
              <circle
                key={index}
                cx="60" // Center of the SVG
                cy="60" // Center of the SVG
                r={radius} // Radius changes for each circle
                stroke={dist.color} // Different color per distribution
                strokeWidth={strokeWidth}
                strokeDasharray={`${arcLength} ${circumference}`} // Proportional segment
                strokeDashoffset={0} // Start at the top
                fill="none"
                className="stacked-circle"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default ExpirationTimeline;
