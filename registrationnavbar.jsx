import React from 'react'
import { NavLink } from 'react-router-dom'
import './registrationnavbar.css'

export default function RegistrationNavbar() {
  return (
    <div className="registration-nav" role="navigation" aria-label="Registration menu">
      <div className="reg-menu-inner">
        <ul className="reg-menu-list">
          <li>
            <NavLink to="/registration/new-student" className={({ isActive }) => (isActive ? 'active' : '')}>
              New Student
            </NavLink>
          </li>
          <li>
            <NavLink to="/registration/requirements" className={({ isActive }) => (isActive ? 'active' : '')}>
              Requirements
            </NavLink>
          </li>
          <li>
            <NavLink to="/registration/fees" className={({ isActive }) => (isActive ? 'active' : '')}>
              Fees
            </NavLink>
          </li>
          <li>
            <NavLink to="/registration/help" className={({ isActive }) => (isActive ? 'active' : '')}>
              Help
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
