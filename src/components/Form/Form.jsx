import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import './Form.css';

function Form({formName, buttonTitle, handleReqest}) {
  const location = useLocation();
  const [formValues, setFormValues] = useState({name:'', email:'', password:''})

  function handleChange(e) {
    const {name, value} = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault(e);
    if (location.pathname === '/signup') {
      if (!formValues.name || !formValues.email || !formValues.password) {
        return;
      }
      handleReqest({name:formValues.name, password: formValues.password, email: formValues.email })
        .catch((err) => {
          console.log(err)
        });
    } else if (location.pathname === '/signin') {
      if (!formValues.email || !formValues.password) {
        return;
      }
      handleReqest({password: formValues.password, email: formValues.email })
        .catch((err) => {
          console.log(err)
        });
    }
}

  return (
    <form className='form' onSubmit={handleSubmit} name={formName} noValidate>
      <div className='form__container'>
        {location.pathname === '/signup' &&
        <>
          <div className='form-input'>
            <p className='form-input__title'>Имя</p>
            <input className='form-input__value' onChange={handleChange} id="name-input" name='name' type='text' value={formValues.name} placeholder='Введите ваше имя' required />
          </div>
          <span className='name-input-error' />
        </>
        }
        <div className='form-input'>
          <p className='form-input__title'>E-mail</p>
          <input className='form-input__value' onChange={handleChange} id="email-input" name='email' type='email' value={formValues.email} placeholder='Введите вашу почту' required />
        </div>
        <span className='email-input-error' />
        <div className='form-input'>
          <p className='form-input__title'>Пароль</p>
          <input className='form-input__value' onChange={handleChange} id="password-input" name='password' type='password' value={formValues.password} placeholder='Введите пароль' required />
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