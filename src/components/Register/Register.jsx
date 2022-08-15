import React from 'react';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';
import './Register.css';

function Register() {
  return (
    <section className='register-page'>
      <header className='register-header'>
        <Link to = '/' className='header__logo-link'>
          <img className='header__logo rotation' src={logo} alt='Логотип сайта фильмотека' />
        </Link>
      </header>
      <Form 
        formName={'register'}
        title={'Добро пожаловать!'}
        buttonTitle={'Зарегистрироваться'}
        />
      <div className="register__container">
        <p className='register__already'>Уже зарегистрированы?</p>
        <Link to="/signin" className="register__login-link">Войти</Link>
      </div>
    </section>
  )
}
export default Register;
