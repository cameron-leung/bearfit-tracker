import React, { useState } from "react";
import { Menu, Card, Row, Col, Progress } from "antd";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


const Budget = () => {
    const data = [
        {name: 'Monday', moneySpent: 40},
        {name: 'Tuesday', moneySpent: 70},
        {name: 'Wednesday', moneySpent: 20},
        {name: 'Thursday', moneySpent: 100},
        {name: 'Friday', moneySpent: 20},
        {name: 'Saturday', moneySpent: 20},
        {name: 'Sunday', moneySpent: 20},
      ];
    return (
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="moneySpent" fill="green" />
        </BarChart>
      );
}

export default Budget;