import React from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';

const LineChartComponent = ({ data, title, dataKeyX, lineKeys }) => {
  return (
    <div className='ChartContainer'>
      <h4>{title}</h4>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKeyX} />
          <YAxis />
          <Tooltip />
          <Legend />
          {lineKeys.map((key, index) => (
            <Line key={index} type="monotone" dataKey={key} stroke={index % 2 === 0 ? "#8884d8" : "#82ca9d"} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartComponent;
