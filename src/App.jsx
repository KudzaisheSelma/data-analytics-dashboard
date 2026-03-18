import { useState } from 'react';
import MetricCard from './components/MetricCard';
import RevenueChart from './components/RevenueChart';
import UserActivityChart from './components/UserActivityChart';
import TopProductsChart from './components/TopProductsChart';
import DataTable from './components/DataTable';

const METRICS = [
  { label: 'Total Revenue', value: '$128,450', change: '+12.5%', up: true },
  { label: 'Active Users', value: '24,318', change: '+8.2%', up: true },
  { label: 'Conversion Rate', value: '3.64%', change: '-0.3%', up: false },
  { label: 'Avg Order Value', value: '$52.80', change: '+4.1%', up: true },
];

export default function App() {
  const [dateRange, setDateRange] = useState('30d');

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <select value={dateRange} onChange={e => setDateRange(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm">
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {METRICS.map(m => <MetricCard key={m.label} {...m} />)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <RevenueChart />
          <UserActivityChart />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2"><DataTable /></div>
          <TopProductsChart />
        </div>
      </div>
    </div>
  );
}
