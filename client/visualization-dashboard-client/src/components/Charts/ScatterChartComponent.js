import React from 'react';
import { ScatterChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Scatter, ResponsiveContainer } from 'recharts';

const ScatterChartComponent = ({ data, title, dataKeyX, dataKeyY }) => {
  return (
    <div className='ChartContainer'>
      <h4>{title}</h4>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKeyX} />
          <YAxis dataKey={dataKeyY} />
          <Tooltip />
          <Legend />
          <Scatter name={title} data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ScatterChartComponent;
