import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  { day: 'Mon', users: 1200 }, { day: 'Tue', users: 1800 },
  { day: 'Wed', users: 1400 }, { day: 'Thu', users: 2100 },
  { day: 'Fri', users: 1900 }, { day: 'Sat', users: 900 }, { day: 'Sun', users: 700 },
];
export default function UserActivityChart() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <h2 className="text-lg font-semibold mb-4">Daily Active Users</h2>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data}>
          <XAxis dataKey="day" stroke="#4b5563" tick={{ fill: '#9ca3af', fontSize: 12 }} />
          <YAxis stroke="#4b5563" tick={{ fill: '#9ca3af', fontSize: 12 }} />
          <Tooltip contentStyle={{ background: '#111827', border: '1px solid #374151' }} />
          <Bar dataKey="users" fill="#10b981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
