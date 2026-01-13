import React from 'react'
import { NavLink } from 'react-router-dom'
import './mainnavbar.css'

export default function MainNavbar() {

  return (
    <header className="main-nav" role="banner">
      <div className="nav-inner">
        <div className="brand">
          <div>
            <div className="brand-title">APPEC TSS</div>
            <div className="brand-sub">Online registration</div>
          </div>
        </div>

        <nav className="menu" role="navigation" aria-label="Main menu">
          <ul className="menu-list">
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.5L12 4l9 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/program" className={({ isActive }) => (isActive ? 'active' : '')}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 7h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Programs
              </NavLink>
            </li>
            <li>
              <NavLink to="/registration" className={({ isActive }) => (isActive ? 'active' : '')}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18v13H3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 7v-2a2 2 0 012-2h6a2 2 0 012 2v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Registration
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10v6a2 2 0 01-2 2h-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 6v6a2 2 0 002 2h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
