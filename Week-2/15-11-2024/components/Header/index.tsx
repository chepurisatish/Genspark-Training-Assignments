import React from 'react';
import '../styles/Header.css';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return <div className="HeaderContainer">{title}</div>;
};

export default Header;
