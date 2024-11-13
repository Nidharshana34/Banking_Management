import React, { useState } from "react";
import { Pie, Doughnut, Radar } from "react-chartjs-2";
import {Chart as ChartJS,ArcElement,RadialLinearScale, CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend,
  PointElement,
  LineElement,
} from "chart.js";
import "./BankingOverview.css";

ChartJS.register(ArcElement,RadialLinearScale,CategoryScale,LinearScale,BarElement, Title, Tooltip,Legend,PointElement,LineElement);

const BankingOverview = () => {
  const totalAccounts = 1200;
  const totalTransactions = 8500;
  const totalDeposits = 7500000; 
  const totalWithdrawals = 5500000; 

  const [recentActivities, setRecentActivities] = useState([
    { account: "Sharini", action: "Deposit", amount: 10000, date: "2024-08-31" },
    { account: "Priyanka", action: "Withdrawal", amount: 5000, date: "2024-08-30" },
    { account: "Arun", action: "Deposit", amount: 20000, date: "2024-08-29" },
  ]);
  const accountTypeData = {
    labels: ["Savings", "Checking", "Business"],
    datasets: [{
        label: "Account Types",
        data: [600, 400, 200],
        backgroundColor: ["#42a5f5", "#66bb6a", "#ffa726"],
        borderColor: ["#1e88e5", "#43a047", "#fb8c00"],
        borderWidth: 1,
      },],
  };
  const transactionTypeData = {
    labels: ["Deposits", "Withdrawals", "Transfers"],
    datasets: [{
        label: "Transaction Types",
        data: [4000, 3000, 1500],
        backgroundColor: ["#29b6f6", "#ef5350", "#ab47bc"],
        borderColor: ["#039be5", "#e53935", "#8e24aa"],
        borderWidth: 1,
      },],
  };
  const performanceMetricsData = {
    labels: ["User Satisfaction", "System Uptime", "Transaction Speed"],
    datasets: [{
        label: "Performance Metrics",
        data: [90, 99, 85],
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },],
  };
  return (
    <div className="banking-overview" style={{marginTop:'700px',marginBottom:'15px'}}>
      <h2>Online Banking Operations Overview</h2>
      <div className="summary-box">
        <div className="summary-item">
          <h3>Total Accounts</h3>
          <p>{totalAccounts.toLocaleString()}</p>
        </div>
        <div className="summary-item">
          <h3>Total Transactions</h3>
          <p>{totalTransactions.toLocaleString()}</p>
        </div>
        <div className="summary-item">
          <h3>Total Deposits</h3>
          <p>₹{totalDeposits.toLocaleString()}</p>
        </div>
        <div className="summary-item">
          <h3>Total Withdrawals</h3>
          <p>₹{totalWithdrawals.toLocaleString()}</p>
        </div>
      </div>
      <div className="charts-grid">
        <div className="chart-container">
          <h3>Account Type Distribution</h3>
          <Pie data={accountTypeData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className="chart-container">
          <h3>Transaction Type Breakdown</h3>
          <Doughnut data={transactionTypeData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className="chart-container">
          <h3>Performance Metrics</h3>
          <Radar data={performanceMetricsData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          {recentActivities.map((activity, index) => (
            <li key={index}>
              <span>{activity.date} - {activity.account}</span>
              <span>{activity.action}: ₹{activity.amount.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BankingOverview;
