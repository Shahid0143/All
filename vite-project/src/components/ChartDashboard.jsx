import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  RadialBarChart,
  RadialBar,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./react-chart-dashboard.module.css";

const ChartDashboard = () => {
  // Chart Data
  const contractValueData = [
    { name: "< 0.1M", value: 30 },
    { name: "0.1 - 0.5M", value: 40 },
    { name: "0.5 - 1M", value: 20 },
    { name: "> 1M", value: 10 },
  ];

  const expirationTimelineData = [
    { name: "This Week", value: 70 },
    { name: "Next Week", value: 50 },
    { name: "This Month", value: 30 },
  ];

  const contractsAnalyzedData = [
    { day: "Fri", contracts: 2 },
    { day: "Sat", contracts: 0 },
    { day: "Sun", contracts: 0 },
    { day: "Mon", contracts: 2 },
    { day: "Tue", contracts: 1 },
  ];

  const contractStatusData = [
    { name: "Active", value: 60 },
    { name: "Pending", value: 30 },
    { name: "Expired", value: 10 },
  ];

  const COLORS = ["#6e6e6e", "#9e9e9e", "#cfcfcf", "#efefef"];

  return (
    <div className={styles.chartsContainer}>
      {/* Contract Value Distribution Chart */}
      <div className={styles.chartCard}>
        <h3 className={styles.chartTitle}>Contract Value Distribution</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={contractValueData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {contractValueData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Expiration Timeline Chart */}
      <div className={styles.chartCard}>
        <h3 className={styles.chartTitle}>Expiration Timeline</h3>
        <ResponsiveContainer width="100%" height={200}>
          <RadialBarChart
            innerRadius="10%"
            outerRadius="80%"
            data={expirationTimelineData}
            startAngle={180}
            endAngle={0}
          >
            <RadialBar
              minAngle={15}
              label={{ fill: "#666", position: "insideStart" }}
              background
              clockWise
              dataKey="value"
            />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>

      {/* Contracts Analyzed Chart */}
      <div className={styles.chartCard}>
        <h3 className={styles.chartTitle}>Contracts Analyzed</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={contractsAnalyzedData}>
            <XAxis dataKey="day" />
            <Bar dataKey="contracts" fill="#8884d8" />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Contract Status Chart */}
      <div className={styles.chartCard}>
        <h3 className={styles.chartTitle}>Contract by Status</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={contractStatusData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {contractStatusData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartDashboard;
