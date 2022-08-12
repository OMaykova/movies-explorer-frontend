import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({hundleSignIn, isLoggedIn }) {
  const headerClassName = `header ${isLoggedIn ? '' : 'header_landing'}`;
  let header__container;
  if (!isLoggedIn) {
    header__container =
    <div className='header__container'>
      <Link to = '/signup' className='header__registration'>Регистрация</Link>
      <button className='header__autorization' onClick={hundleSignIn} title='Войти'>Войти</button>
    </div>
  } else {
    header__container =
    <div className='header__container'>
      <Navigation />
    </div>
  }

  return (
    <header className={headerClassName}>
      <img className='header__logo rotation' src={logo} alt='Логотип сайта фильмотека' />
      {header__container}
    </header>
  )
}
export default Header;