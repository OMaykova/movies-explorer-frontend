import React from 'react';
import { useLocation } from 'react-router-dom';
import './Form.css';

function Form({formName, buttonTitle}) {
  const location = useLocation();
  return (
    <form className='form' name={formName}>
      <div className='form__container'>
        {location.pathname === '/signup' &&
        <>
          <div className='form-input'>
            <p className='form-input__title'>Имя</p>
            <input className='form-input__value' id="name-input" type='text'></input>
          </div>
          <span className='name-input-error' />
        </>
        }
        <div className='form-input'>
          <p className='form-input__title'>E-mail</p>
          <input className='form-input__value' id="email-input" type='email'></input>
        </div>
        <span className='email-input-error' />
        <div className='form-input'>
          <p className='form-input__title'>Пароль</p>
          <input className='form-input__value' id="password-input" type='password'></input>
        </div>
        <span className='password-input-error' />
      </div>
      <div className='form__button-container'>
        <span className='form__error'></span>
        <button className='form__button'>{buttonTitle}</button>
      </div>
    </form>
  )
}
export default Form;