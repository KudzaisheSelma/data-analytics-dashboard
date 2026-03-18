import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
  { name: 'Product A', value: 35 }, { name: 'Product B', value: 25 },
  { name: 'Product C', value: 20 }, { name: 'Product D', value: 12 }, { name: 'Other', value: 8 },
];
const COLORS = ['#6366f1','#10b981','#f59e0b','#ef4444','#8b5cf6'];
export default function TopProductsChart() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <h2 className="text-lg font-semibold mb-4">Top Products</h2>
      <ResponsiveContainer width="100%" height={180}>
        <PieChart><Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
          {data.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
        </Pie><Tooltip contentStyle={{ background: '#111827', border: '1px solid #374151' }} /></PieChart>
      </ResponsiveContainer>
      <div className="space-y-2 mt-2">
        {data.map((d, i) => (
          <div key={d.name} className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ background: COLORS[i] }} /><span className="text-gray-300">{d.name}</span></div>
            <span className="font-medium">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
