import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import BurguerMenu from '../../assets/menu_black_36dp.svg';
import Button from '../Button';
import ButtonMobile from '../ButtonMobile';
import './index.css';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenClose = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav>
        <img id="logo" src={ logo } alt="logo" />
        <button
          type="button"
          id="button-menu"
          onClick={ handleOpenClose }
        >
          <img id="menu-mobile" src={ BurguerMenu } alt="menu icon" />
        </button>
        <Button buttonTitle="Sign in" styleClass="signin-button" />
      </nav>

      <ButtonMobile
        buttonTitle="Sign in"
        styleClass="menu-open"
        handleOpenClose={ openMenu }
      />
    </>
  );
}
