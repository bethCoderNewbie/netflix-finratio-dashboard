import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartCard = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
    <h2 className="text-xl font-bold mb-2 text-red-600">{title}</h2>
    {children}
  </div>
);

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://raw.githubusercontent.com/bethCoderNewbie/netflix-finratio-dashboard/main/src/data/financialData.json');
        setData(result.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="bg-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Netflix Financial Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartCard title="Revenue Over Time">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Net Income Over Time">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="netIncome" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* You can add more ChartCard components here for other financial metrics */}
      </div>
    </div>
  );
};

export default Dashboard;
