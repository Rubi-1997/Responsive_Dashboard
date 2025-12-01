import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Day 1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Day 2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Day 3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Day 4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Day 5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Day 6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Day 7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// #endregion
const SimpleBarChart = () => {
  return (
    <BarChart
    width={400} height={300}
      style={{  maxWidth: '600px', maxHeight: '70vh', aspectRatio: 1.618}}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="" stroke="blue" />} />
      {/* <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
    </BarChart>
  );
};

export default SimpleBarChart;