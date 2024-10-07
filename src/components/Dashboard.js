import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const ChartCard = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
    <h2 className="text-xl font-bold mb-2 text-red-600">{title}</h2>
    {children}
  </div>
);

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://raw.githubusercontent.com/bethCoderNewbie/netflix-finratio-dashboard/main/src/data/financialData.json');
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Netflix Financial Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Chart components remain the same */}
      </div>
    </div>
  );
};

export default Dashboard;
