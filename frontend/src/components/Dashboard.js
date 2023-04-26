import React, { useState } from "react";
import { Menu, Card, Row, Col, Progress } from "antd";
// import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import UserCard from './UserCard';
import Time from './Time';
import Budget from './Budget';

const Dashboard = () => {
    return (
        <div className="content-wrapper">
            <Row gutter={[16, 16]}>
                <UserCard /> 
                <Time /> 
                <Budget />
            </Row>
        </div>
    );
}

export default Dashboard;