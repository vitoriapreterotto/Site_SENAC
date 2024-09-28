import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src="/images/logo.png" alt="Logo do Blog" className="logo" />
          <div className="site-title-container">
            <span className="site-title">Diário de Viagem</span>
          </div>
        </Link>
      </div>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-toggle">
              Viagens
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/chile">Chile</Link></li>
                <li><Link to="/peru">Peru</Link></li>
                <li><Link to="/bahia">Bahia</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
