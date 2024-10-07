import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const data = [
  { year: 2019, currentRatio: 0.90, arTurnover: 21.12, arDays: 17.28, ppeTurnover: 40.99, workingCapital: -677192, apDays: 18.15, cashConversionCycle: -0.87, fcfProductivity: 1.26, debtRatio: 0.78, debtToEquity: 3.48, timesInterestEarned: 4.16, grossProfitMargin: 38.28, operatingProfitMargin: 12.92, netIncomeMargin: 9.26, roa: 6.23, roe: 29.12 },
  { year: 2020, currentRatio: 1.25, arTurnover: 18.41, arDays: 19.83, ppeTurnover: 32.77, workingCapital: 1955795, apDays: 15.90, cashConversionCycle: 3.94, fcfProductivity: 1.48, debtRatio: 0.72, debtToEquity: 2.55, timesInterestEarned: 5.97, grossProfitMargin: 38.89, operatingProfitMargin: 18.34, netIncomeMargin: 11.05, roa: 7.54, roe: 29.62 },
  { year: 2021, currentRatio: 0.95, arTurnover: 16.51, arDays: 22.11, ppeTurnover: 26.01, workingCapital: -419141, apDays: 15.73, cashConversionCycle: 6.38, fcfProductivity: 1.11, debtRatio: 0.64, debtToEquity: 1.81, timesInterestEarned: 8.09, grossProfitMargin: 41.64, operatingProfitMargin: 20.86, netIncomeMargin: 17.23, roa: 12.20, roe: 38.02 },
  { year: 2022, currentRatio: 1.17, arTurnover: 12.04, arDays: 30.31, ppeTurnover: 23.23, workingCapital: 1335499, apDays: 14.37, cashConversionCycle: 15.94, fcfProductivity: 1.16, debtRatio: 0.57, debtToEquity: 1.34, timesInterestEarned: 7.98, grossProfitMargin: 39.37, operatingProfitMargin: 17.82, netIncomeMargin: 14.21, roa: 9.64, roe: 24.53 },
  { year: 2023, currentRatio: 1.12, arTurnover: 11.26, arDays: 32.41, ppeTurnover: 23.34, workingCapital: 1057478, apDays: 13.13, cashConversionCycle: 19.27, fcfProductivity: 1.22, debtRatio: 0.58, debtToEquity: 1.37, timesInterestEarned: 9.94, grossProfitMargin: 41.54, operatingProfitMargin: 20.62, netIncomeMargin: 16.04, roa: 11.11, roe: 26.15 }
];

const ChartCard = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
    <h2 className="text-xl font-bold mb-2 text-red-600">{title}</h2>
    {children}
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
