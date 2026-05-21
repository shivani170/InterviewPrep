import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/aura-logo.png'
import './Header.css'

export const Header = () => {
  return (
    <header className="header-container glass">
      <div className="header-content">
        <NavLink to="/" className="brand-logo-container">
          <img src={logo} alt="Aura Beauty Logo" className="brand-logo-img" />
          <span className="brand-name">AURA</span>
        </NavLink>

        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
            end
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Contact
          </NavLink>
        </nav>

        <div className="header-actions">
          <button className="bag-btn" aria-label="Shopping bag">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="bag-count">0</span>
          </button>
        </div>
      </div>
    </header>
  )
}
