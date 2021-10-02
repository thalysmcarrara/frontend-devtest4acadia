import React from 'react';
import logo from '../../assets/logo.png';
import BurguerMenu from '../../assets/menu_black_36dp.svg';
import Button from '../Button';
import './index.css';

export default function Header() {
  return (
    <>
      <nav>
        <img id="logo" src={ logo } alt="logo" />
        <button
          type="button"
          id="button-menu"
        >
          <img id="menu-mobile" src={ BurguerMenu } alt="menu icon" />
        </button>
        <Button buttonTitle="Signin" styleClass="signin-button" />
      </nav>

      <Button buttonTitle="Signin" styleClass="menu-open" />
    </>
  );
}
