import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const ExpenseChart = ({ expenses, budgets }) => {
  // Initialize data for the chart
  const data = budgets.map(budget => {
    const totalAmount = expenses
      .filter(expense => expense.budgetId === budget.id)
      .reduce((acc, expense) => acc + expense.amount, 0);

    return { name: budget.name, value: totalAmount };
  });

  // return (
  //   <ResponsiveContainer width="100%" height={300}>
  //     <BarChart data={data}>
  //       <CartesianGrid strokeDasharray="3 3" />
  //       <XAxis dataKey="name" />
  //       <YAxis />
  //       <Tooltip />
  //       <Legend />
  //       <Bar dataKey="value" fill="#8884d8" />
  //     </BarChart>
  //   </ResponsiveContainer>
  // );

  return (
    <ResponsiveContainer width="100%" height={300} style={{ marginTop: '40px' }}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpenseChart;
