import React from 'react';
import './index.css';
import Sidebar from './components/sidebar';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';

const Homepage = () => (
    <div className="parent">
        <div className="sidebar">
            <Sidebar />
        </div>
        <div className="content">
                        <div className="navbar">
                <Navbar />
            </div>
            <div className="sonola">
                <Herosection />
            </div>
        </div>
    </div>
);

export default Homepage;