import './App.css';
import React, { useState } from "react";
import { Menu as AntdMenu, Card, Row, Col, Progress } from "antd";
// import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import Menu from './components/Menu';



const { SubMenu } = Menu;

const App = () => {

    return (
      <Menu />
    );
};

export default App;
