const ROWS = [
  { id: 1, product: 'Product A', sales: 1243, revenue: '$62,150', status: 'Active' },
  { id: 2, product: 'Product B', sales: 987, revenue: '$49,350', status: 'Active' },
  { id: 3, product: 'Product C', sales: 654, revenue: '$32,700', status: 'Paused' },
  { id: 4, product: 'Product D', sales: 432, revenue: '$21,600', status: 'Active' },
  { id: 5, product: 'Product E', sales: 321, revenue: '$16,050', status: 'Discontinued' },
];
export default function DataTable() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-5">
      <h2 className="text-lg font-semibold mb-4">Product Performance</h2>
      <table className="w-full text-sm">
        <thead><tr className="border-b border-gray-800 text-gray-400">
          <th className="text-left py-2">Product</th><th className="text-right py-2">Sales</th>
          <th className="text-right py-2">Revenue</th><th className="text-right py-2">Status</th>
        </tr></thead>
        <tbody>{ROWS.map(row => (
          <tr key={row.id} className="border-b border-gray-800/50 hover:bg-gray-800/30">
            <td className="py-3">{row.product}</td>
            <td className="text-right text-gray-300">{row.sales}</td>
            <td className="text-right text-gray-300">{row.revenue}</td>
            <td className="text-right">
              <span className={`px-2 py-1 rounded-full text-xs ${row.status === 'Active' ? 'bg-green-900/50 text-green-400' : row.status === 'Paused' ? 'bg-yellow-900/50 text-yellow-400' : 'bg-red-900/50 text-red-400'}`}>{row.status}</span>
            </td>
          </tr>
        ))}</tbody>
      </table>
    </div>
  );
}
