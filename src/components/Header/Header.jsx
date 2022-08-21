import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import './Header.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Header({ isLoggedIn }) {
  const headerClassName = `header ${isLoggedIn ? '' : 'header_landing'}`;
  let header__container;
  if (!isLoggedIn) {
    header__container =
    <div className='header__container'>
      <Link to = '/signup' className='header__registration'>Регистрация</Link>
      <Link to = '/signin' className='header__autorization-link'>
        <button className='header__autorization' title='Войти'>Войти</button>
      </Link>
    </div>
  } else {
    header__container =
      <div className='header__container'>
        <Navigation />
        <BurgerMenu />
      </div>
  }

  return (
    <header className={headerClassName}>
      <Link to = '/' className='header__logo-link'>
        <img className='header__logo rotation' src={logo} alt='Логотип сайта фильмотека' />
      </Link>
      {header__container}
    </header>
  )
}
export default Header;