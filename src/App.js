import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;

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
      const result = await axios.get('https://raw.githubusercontent.com/yourusername/netflix-dashboard/main/src/data/financialData.json');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-red-600">Netflix Financial Dashboard</h1>
      
      <div className="grid grid-cols-2 gap-4">
        <ChartCard title="Liquidity Ratios">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="currentRatio" stroke="#E50914" name="Current Ratio" />
              <Line type="monotone" dataKey="cashConversionCycle" stroke="#B20710" name="Cash Conversion Cycle" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Efficiency Ratios">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="arTurnover" stroke="#E50914" name="AR Turnover" />
              <Line type="monotone" dataKey="ppeTurnover" stroke="#B20710" name="PP&E Turnover" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Profitability Margins">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="grossProfitMargin" fill="#E50914" name="Gross Profit Margin" />
              <Bar dataKey="operatingProfitMargin" fill="#B20710" name="Operating Profit Margin" />
              <Bar dataKey="netIncomeMargin" fill="#831010" name="Net Income Margin" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Return Ratios">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="roa" stroke="#E50914" name="Return on Assets" />
              <Line type="monotone" dataKey="roe" stroke="#B20710" name="Return on Equity" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Leverage Ratios">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="debtRatio" stroke="#E50914" name="Debt Ratio" />
              <Line type="monotone" dataKey="debtToEquity" stroke="#B20710" name="Debt-to-Equity Ratio" />
              <Line type="monotone" dataKey="timesInterestEarned" stroke="#831010" name="Times Interest Earned" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Working Capital Management">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="arDays" stroke="#E50914" name="AR Days" />
              <Line type="monotone" dataKey="apDays" stroke="#B20710" name="AP Days" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
    </div>
  );
};

export default Dashboard;
