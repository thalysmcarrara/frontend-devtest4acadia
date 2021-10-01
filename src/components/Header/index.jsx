import React from 'react';
import logo from '../../assets/logo.png';
import menuHamburguer from '../../assets/menu_black_36dp.svg';
import Button from '../Button';
import './index.css';

export default function Header() {
  return (
    <>
      <nav>
        <img id="logo" src={ logo } alt="logo" />
        <img id="menu-mobile" src={ menuHamburguer } alt="menu icon" />
        <Button buttonTitle="Signin" />
      </nav>

      <div id="menu-open">signin</div>
    </>
  );
}
