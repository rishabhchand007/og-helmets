import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import {Typography} from '@mui/material'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 400 },
  { name: 'Feb', sales: 300 },
  { name: 'Mar', sales: 200 },
  { name: 'Apr', sales: 258 },
  { name: 'May', sales: 189 },
  { name: 'Jun', sales: 239 },
  { name: 'Jul', sales: 349 },
];
const data01 = [
  { name: "PREDATOR MATT BLACK", value: 40 },
  { name: "DUKE II CREAM", value: 30 },
  { name: "BLADE MATT BLACK", value: 10 },
  { name: "RAGE PREMIUM MATT BLACK ORANGE", value: 50 },
  { name: "RAGE PREMIUM MATT BLACK SILVER", value: 43 },
];


export default function App() {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-md-4 text-center d-flex align-items-center flex-column" >
            <h5>Monthly Sales</h5>
          <PieChart width={300} height={300}>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={data01}
              
              outerRadius={80}
              fill="#f25f55"
              label
            />
            <Tooltip />
          </PieChart>
        </div>

        <div className="col-md-8 text-center d-flex align-items-center flex-column">
        <h5>Total Sales (Year 2022)</h5>
        
        <ResponsiveContainer width="100%" height={200} className='mt-5'>
          
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
