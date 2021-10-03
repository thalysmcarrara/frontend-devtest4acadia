import React from 'react';
import logo from '../../assets/logo.png';
import profileicon from '../../assets/profileicon.svg';
import './index.css';

export default function HeaderDashboard() {
  return (
    <nav>
      <img id="logo" src={ logo } alt="logo" />
      <img id="profile-icon" src={ profileicon } alt="profile icon" />
    </nav>
  );
}
