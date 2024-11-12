import React from 'react';
import logo from '../assets/logo.png';
import './chat.css';

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-content">
                <img src={logo} alt="Logo del sitio" className="main-logo" />
                <h1 className="site-title">Chatbot de Finanzas</h1>
            </div>
        </header>
    );
};

export default Header;
