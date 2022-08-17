import React, { useState } from 'react';
import logo from '../../images/logo.svg';
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ isLoggedIn }) {

  const[menuOpened, setMenuOpened] = useState(false);
  const toggleClass = () => {
    setMenuOpened(!menuOpened);
  };

  const menuBurgerClassName = `menu-burger ${menuOpened ? 'menu-burger_active' : ''}`
  const menuBurgerButtonClassName = `menu-burger__btn ${menuOpened ? 'menu-burger__btn_active' : ''}`
  const overlayClassName = `menu-burger__overlay ${menuOpened ? 'menu-burger__overlay_active' : ''}`

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
        <div className='menu-burger__container'>
          <button className={menuBurgerButtonClassName} title='Меню' onClick={toggleClass}>
            <span className='menu-burger__line'></span>
          </button>
          <div className={menuBurgerClassName}>
            <h3 className='menu-burger__title'>Главная</h3>
            <Navigation 
              toggleClass={toggleClass}
            />
          </div>
          <div className={overlayClassName} onClick={toggleClass}></div>
        </div>
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