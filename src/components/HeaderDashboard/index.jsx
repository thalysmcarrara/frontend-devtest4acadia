import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import profileicon from '../../assets/profileicon.svg';
import './index.css';

export default function HeaderDashboard() {
  return (
    <nav>
      <Link to="/">
        <img id="logo" src={ logo } alt="logo" />
      </Link>
      <img id="profile-icon" src={ profileicon } alt="profile icon" />
    </nav>
  );
}
