import React from 'react';
import './Form.css';

function Form({formName, title}) {
  return (
    <div className={formName}>
      <h2 className={`${formName}__title`}>{title}</h2>
      <form className={`${formName}__form`}>
        <div className='form__container'>
          <div className={`${formName}__form-input`}>
            <p className='form-input__title'>Имя</p>
            <input className='form-input__value' id="name-input">{user.name}</input>
          </div>
          <span className='name-input-error' />
          <div className={`${formName}__form-input`}>
            <p className='form-input__title'>E-mail</p>
            <input className='form-input__value' id="email-input"></input>
            <span className='email-input-error' />
          </div>
          <div className={`${formName}__form-input`}>
            <p className='form-input__title'>Пароль</p>
            <input className='form-input__value' id="password-input"></input>
            <span className='password-input-error' />
          </div>
        </div>
        <div className='form__button-container'>
          <span className='form__error'></span>
          <button className='form__button'>{titleButton}</button>
        </div>
      </form>
    </div>
  )
}
export default Form;