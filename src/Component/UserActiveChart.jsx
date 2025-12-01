import { ResponsiveContainer, PieChart, Pie,Cell, Tooltip } from 'recharts';

// #region Sample data
const data = [
  { name: 'Active', value: 400 },
  { name: 'Inactive', value: 300 },
 
];
const COLORS = ['#8884d8', '#6c6b6bff']; 

// #endregion
const UserActiveChart = () => {
  return (
    <PieChart width={400} height={400}>
      <Tooltip/>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={80}
        fill="#8884d8" // This fill will be overridden by Cell colors
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default UserActiveChart;