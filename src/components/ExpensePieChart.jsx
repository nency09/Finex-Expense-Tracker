// import React from 'react';
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// const ExpensePieChart = ({ expenses }) => {
//   // Process expenses to get total amounts per category
//   const data = expenses.reduce((acc, expense) => {
//     const { name, amount } = expense;
//     acc[name] = (acc[name] || 0) + amount;
//     return acc;
//   }, {});

//   // Convert object to array for the PieChart
//   const chartData = Object.entries(data).map(([name, value]) => ({ name, value }));

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6699'];

//   return (
//     <PieChart width={400} height={400}>
//       <Pie
//         data={chartData}
//         cx={200}
//         cy={200}
//         labelLine={false}
//         label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
//         outerRadius={80}
//         fill="#8884d8"
//         dataKey="value"
//       >
//         {chartData.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//       <Tooltip />
//       <Legend />
//     </PieChart>
//   );
// };

// export default ExpensePieChart;

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import '../static/Dashboard.css'; // import the CSS file

const ExpensePieChart = ({ expenses, budgets }) => {
  if (!budgets || !Array.isArray(budgets)) {
    return null; // or a fallback UI
  }

  const data = budgets.map(budget => {
    const totalAmount = expenses
      .filter(expense => expense.budgetId === budget.id)
      .reduce((acc, expense) => acc + expense .amount, 0);

    return { name: budget.name, value: totalAmount };
  });

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6699'];

  return (
    <div className="chart-container">
      <PieChart width={650} height={400} className="chart">
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend className="legend" />
      </PieChart>




      
    </div>
  );
};

export default ExpensePieChart;



