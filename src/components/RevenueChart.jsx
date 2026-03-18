import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  { month: 'Jan', revenue: 42000 }, { month: 'Feb', revenue: 53000 },
  { month: 'Mar', revenue: 48000 }, { month: 'Apr', revenue: 61000 },
  { month: 'May', revenue: 55000 }, { month: 'Jun', revenue: 72000 },
  { month: 'Jul', revenue: 68000 }, { month: 'Aug', revenue: 81000 },
];
export default function RevenueChart() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <h2 className="text-lg font-semibold mb-4">Revenue Over Time</h2>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="#4b5563" tick={{ fill: '#9ca3af', fontSize: 12 }} />
          <YAxis stroke="#4b5563" tick={{ fill: '#9ca3af', fontSize: 12 }} tickFormatter={v => `$${v/1000}k`} />
          <Tooltip contentStyle={{ background: '#111827', border: '1px solid #374151' }} formatter={v => [`$${v.toLocaleString()}`, 'Revenue']} />
          <Area type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2} fill="url(#rev)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
