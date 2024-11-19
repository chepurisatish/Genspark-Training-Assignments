import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="SidebarContainer">
            <h2>Menu</h2>
            <Link to="/" className="SidebarLink">User Details</Link>
            <Link to="/crud" className="SidebarLink">CRUD Operations</Link>
            <Link to="/todos" className="SidebarLink">Todo Container</Link>
        </div>
    );
};

export default Sidebar;
