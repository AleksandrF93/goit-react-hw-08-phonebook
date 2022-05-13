import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css'

const satActive = ({ isActive }) =>isActive ? `${s.activeLink}` : `${s.link}`;

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        className={satActive}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className={satActive}
      >
        Login
      </NavLink>
    </div>
  );
}