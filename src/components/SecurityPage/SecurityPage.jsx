import React from 'react';
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import './SecurityPage.css';

function SecurityPage({title, ...props}) {
  const location = useLocation()
  return (
    <div className='security__page'>
      <header className='security-header'>
        <Link to = '/' className='header__logo-link'>
          <img className='header__logo rotation' src={logo} alt='Логотип сайта фильмотека' />
        </Link>
      </header>
      <h2 className='security__title'>{title}</h2>
      {props.children}
      <div className="security__container">
        {location.pathname === '/signup' &&
        <>
          <p className='security__already'>Уже зарегистрированы?</p>
          <Link to="/signin" className="security__link">Войти</Link>
        </>}
        {location.pathname === '/signin' &&
        <>
          <p className='security__already'>Ещё не зарегистрированы?</p>
          <Link to="/signup" className="security__link">Регистрация</Link>
        </>}
      </div>
    </div>
  )
}
export default SecurityPage;
