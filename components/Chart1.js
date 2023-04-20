import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart1 = ({ data, data2 }) => {

  const chartData = data?.map((item, index) => {
    return {
      week: index + 1,
      Guest: parseFloat(item['Close Price']),
      User: data2 && index < data2.length ? parseFloat(data2[index]['Close Price']) : null,
    };
  });

  const formatXAxis = (tickItem) => `Week ${tickItem}`;

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer width="95%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="week" tickFormatter={formatXAxis} />
          <YAxis type="number" domain={[0, 200]} label={{ value: '0-200', angle: -90, position: 'insideLeft' }} />

          <Tooltip />
          <Legend align="right" verticalAlign="top" />
          <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" />
          <Line type="monotone" dataKey="User" stroke="#9BDD7C" />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart1;
