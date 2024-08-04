import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar } from "recharts";
import "./ActivityGraph.scss";

const salesData = [
  {
    name: 'Jan',
    revenue: 4000,
    profit: 2400,
  },
  {
    name: 'Feb',
    revenue: 3000,
    profit: 1398,
  },
  {
    name: 'Mar',
    revenue: 9800,
    profit: 2000,
  },
  {
    name: 'Apr',
    revenue: 3908,
    profit: 2780,
  },
  {
    name: 'May',
    revenue: 4800,
    profit: 1890,
  },
  {
    name: 'Jun',
    revenue: 3800,
    profit: 2390,
  },
];

const ActivityGraph = () => {
  return (
    <div className="activity-graph">
      <h1 className="activity-title">Activity</h1>
      <ResponsiveContainer width="99%" height="75%">
      <BarChart
        width={500}
        height={300}
        data={salesData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey="revenue" fill="#2563eb" />
        <Bar dataKey="profit" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  )
}

export default ActivityGraph;