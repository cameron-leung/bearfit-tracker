import './App.css';
import React, { useState } from "react";
import { Menu as AntdMenu, Card, Row, Col, Progress } from "antd";
// import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";


import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

import Menu from './components/Menu';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/login' element={<Login />} />
    //     <Route path='/' element={<Home />}/>
        
    //   </Routes>
    // </Router>

    // <Home />
    <Menu />
  );
}

export default App;

