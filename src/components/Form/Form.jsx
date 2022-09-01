import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import './Form.css';

function Form({formName, buttonTitle, handleReqest, message}) {
  const location = useLocation();
  const [formValues, setFormValues] = useState({name:'', email:'', password:''})
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  function handleChange(e) {
    const {name, value} = e.target;
    if (name === 'name') {
      const validName = /^[a-zA-Zа-яА-Я- ]+$/.test(value);
      setIsValidName(validName)
      if (value.length < 1) {
        setNameError('Необходимо заполнить это поле');
      } else if (value.length < 2) {
        setNameError('Длина имени должна быть не менее 2 символов');
        setIsValidName(false)
      } else if (!validName) {
        setNameError('Имя может содержать только буквы, пробел или дефис');
      } else {
        setNameError('');
      }
    } else if (name === 'email') {
      const validEmail = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i.test(value);
      setIsValidEmail(validEmail)
      if (!validEmail) {
        setEmailError('Неверный формат почты')
      } else {
        setEmailError('')
      }
    } else if (name === 'password') {
      const validPassword = /^(?=.*\d)(?=.*[a-z])[a-z0-9]{3,}$/.test(value)
      setIsValidPassword(validPassword)
      if (value.length < 1) {
        setPasswordError('Необходимо заполнить это поле');
      } else if (value.length < 3) {
        setPasswordError('Пароль должен содержать не менее 3 символов');
        setIsValidPassword(false)
      } else if (!validPassword) {
        setPasswordError('Пароль может содержать только буквы a-z, цифры 0-9 и не содержит пробел');
      } else {
        setPasswordError('');
      }
    }
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
      handleReqest({email: formValues.email, password: formValues.password})
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
          <span className='input-error'>{nameError}</span>
        </>
        }
        <div className='form-input'>
          <p className='form-input__title'>E-mail</p>
          <input className='form-input__value' onChange={handleChange} id="email-input" name='email' type='email' value={formValues.email} placeholder='Введите вашу почту' required />
        </div>
        <span className='input-error'>{emailError}</span>
        <div className='form-input'>
          <p className='form-input__title'>Пароль</p>
          <input className='form-input__value' onChange={handleChange} id="password-input" name='password' type='password' value={formValues.password} placeholder='Введите пароль' required />
        </div>
        <span className='input-error'>{passwordError}</span>
      </div>
      <div className='form__button-container'>
        <span className='form__error'>{message}</span>
        {location.pathname === '/signup' &&
          <button className={`form__button ${isValidName && isValidEmail && isValidPassword ? '' : 'form__button_disabled'}`} disabled={isValidName && isValidEmail && isValidPassword ? '' : 'disabled'}>{buttonTitle}</button>
        }
        {location.pathname === '/signin' &&
          <button className={`form__button ${isValidPassword && isValidEmail ? '' : 'form__button_disabled'}`} disabled={isValidPassword && isValidEmail ? '' : 'disabled'}>{buttonTitle}</button>
        }
      </div>
    </form>
  )
}
export default Form;