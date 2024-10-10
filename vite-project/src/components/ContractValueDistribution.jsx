import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "../components/ContractValueDistribution.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const ContractValueDistribution = () => {
  // Dummy data for contract values
  const data = {
    labels: ["< 0.1M", "0.1 - 0.5M", "0.5 - 1M", "> 1M"],
    datasets: [
      {
        label: "Contract Value",
        data: [30, 25, 20, 25], // These values can be dynamic
        backgroundColor: ["#000000", "#BFBFBF", "#8F8F8F", "#D9D9D9"],
        borderColor: ["#FFFFFF"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 10,
          color: "#000",
        },
      },
    },
    cutout: "70%", // Create the inner hole for a doughnut effect
  };

  return (
    <div className="card">
      <h3 className="card-title">Contract Value Distribution</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ContractValueDistribution;
