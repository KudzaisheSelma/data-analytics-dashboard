import { TrendingUp, TrendingDown } from 'lucide-react';
export default function MetricCard({ label, value, change, up }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="text-3xl font-bold mb-3">{value}</p>
      <div className={`flex items-center gap-1 text-sm ${up ? 'text-green-400' : 'text-red-400'}`}>
        {up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        <span>{change} vs last period</span>
      </div>
    </div>
  );
}
