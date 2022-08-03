import React from 'react';
import logo from '../../images/logo.svg';
import { Link, useLocation } from "react-router-dom";
import './Header.css';

function Header({hundleSignIn}) {
  // const location = useLocation()
  return (
    <section className='header'>
      <img className='header__logo rotation' src={logo} alt='Логотип сайта фильмотека' />
      <div className='header__container'>
      {/* {location.pathname === '/' && */}
        <a to = '/signup' className='header__registration'>Регистрация</a>
        <button className='header__autorization' onClick={hundleSignIn} title='Войти'>Войти</button>
      </div>
    </section>
  )
}
export default Header;