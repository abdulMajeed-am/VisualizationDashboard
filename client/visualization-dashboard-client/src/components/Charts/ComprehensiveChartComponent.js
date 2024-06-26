import React from 'react';
import { ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line, Scatter, ResponsiveContainer } from 'recharts';

const ComprehensiveChartComponent = ({ data, gridLayout }) => {
  return (
    <div className='ChartContainer'>
      <h4>Comprehensive Data Chart</h4>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="start_year" label={{ value: 'Year', position: 'insideBottomRight', offset: -5 }} />
          <YAxis yAxisId="left" orientation="left" label={{ value: 'Intensity & Likelihood', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: 'Relevance', angle: -90, position: 'insideRight' }} />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="intensity" fill="#8884d8" name="Intensity" />
          <Line yAxisId="right" type="monotone" dataKey="relevance" stroke="#82ca9d" name="Relevance" />
          <Scatter yAxisId="left" dataKey="likelihood" fill="#ff7300" name="Likelihood" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ComprehensiveChartComponent;
