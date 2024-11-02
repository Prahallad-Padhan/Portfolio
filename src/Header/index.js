// src/Header/index.js
import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">PrahalladPadhan_</div>
      <nav className="nav-links">
        <a href="#home">{"<"}Home{"/>"}</a>
        <a href="#skills">{"<"}Skills{"/>"}</a>
        <a href="#work">{"<"}Work{"/>"}</a>
      </nav>
    </header>
  );
};

export default Header;
