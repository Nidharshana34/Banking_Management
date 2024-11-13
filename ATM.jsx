import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS,CategoryScale, LinearScale,  BarElement,  Title,  Tooltip,  Legend,  PointElement,  LineElement,} from "chart.js";
import "./ATM.css";

ChartJS.register(CategoryScale, LinearScale,BarElement,Title,Tooltip,Legend,PointElement,LineElement);

const ATMManagement = () => {
  const totalDeposits = 250000;
  const totalWithdrawals = 150000; 

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log(date.toLocaleDateString()); 
  }, [date]);

  const [atmList, setAtmList] = useState([
    { location: "Main Street", status: "Active" },
    { location: "Downtown", status: "Under Maintenance" },
  ]);

  const dailyData = {
    labels: ["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
    datasets: [
      {
        label: "Deposits",
        data: [5000, 3000, 7000, 15000, 25000, 30000, 40000, 50000],
        backgroundColor: "rgba(33, 150, 243, 0.6)",
        borderColor: "rgba(33, 150, 243, 1)", 
        borderWidth: 1,
      },
      {
        label: "Withdrawals",
        data: [2000, 4000, 5000, 10000, 15000, 20000, 25000, 30000],
        backgroundColor: "rgba(0, 188, 212, 0.6)", 
        borderColor: "rgba(0, 188, 212, 1)", 
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
    datasets: [
      {
        label: "Deposits",
        data: [5000, 3000, 7000, 15000, 25000, 30000, 40000, 50000],
        borderColor: "rgba(33, 150, 243, 1)",
        backgroundColor: "rgba(33, 150, 243, 0.2)", 
        fill: true,
      },
      {
        label: "Withdrawals",
        data: [2000, 4000, 5000, 10000, 15000, 20000, 25000, 30000],
        borderColor: "rgba(0, 188, 212, 1)", 
        backgroundColor: "rgba(0, 188, 212, 0.2)", 
        fill: true,
      },
    ],
  };

  const handleATMStatusChange = (index, status) => {
    const updatedATMList = [...atmList];
    updatedATMList[index].status = status;
    setAtmList(updatedATMList);
    
  };
  
  return (
    <div className="atm-management" style={{marginTop:'600px',marginBottom:'10px', width:'800px'}}>
      <h2><p>ATM Management - Daily Summary {date.toLocaleDateString()}</p>
      </h2>
      <div className="summary-box">
        <div className="summary-item">
          <h3>Total Deposits</h3>
          <p>₹{totalDeposits.toLocaleString()}</p>
        </div>
        <div className="summary-item">
          <h3>Total Withdrawals</h3>
          <p>₹{totalWithdrawals.toLocaleString()}</p>
        </div>
        </div>

      <center><div className="chart-container">
        <h3>Deposits and Withdrawals Over the Day</h3>
        <Bar data={dailyData} options={{ responsive: true }} />
      </div>
      
      </center>
     
      <center>
      <div className="chart-container">
        <h3>Deposit vs Withdrawal Trends</h3>
        <Line data={lineChartData} options={{ responsive: true }} />
      </div>
  </center>
  
      <div className="atm-status-management">
        <h3>ATM Status Management</h3>
        <ul>
          {atmList.map((atm, index) => (
            <li key={index}>
              <span>{atm.location}: {atm.status}</span>
              <select
                value={atm.status}
                onChange={(e) => handleATMStatusChange(index, e.target.value)}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Under Maintenance">Under Maintenance</option>
              </select>
            </li>
          ))}
        </ul>
      </div>
    </div>
   
  );
};

export default ATMManagement;
