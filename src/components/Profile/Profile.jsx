import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useEffect } from 'react';


function Profile({handleSignOut, handleReqest, message, setMessage}) {
  const currentUser = useContext(CurrentUserContext);
  const [editing, setEditing] = useState(false);
  const [formValuesProfile, setFormValuesProfile] = useState({name: currentUser.name, email: currentUser.email})
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidName, setIsValidName] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [enableButton, setEnableButton] = useState(false)

  function handleEditButtonProfile() {
    setEditing(true)
    setMessage('')
  }

  function handleChange(e) {
    const {name, value} = e.target;
    if (name === 'email') {
      const validEmail = /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i.test(value);
      setIsValidEmail(validEmail)
      if (!validEmail) {
        setEmailError('Неверный формат почты')
      } else {
        setEmailError('')
      }
    } else if (name === 'name') {
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
    }
    setFormValuesProfile((prev) => ({
      ...prev,
      [name]: value
    }));
  }
  useEffect(() => {
    (formValuesProfile.name !== currentUser.name) || (formValuesProfile.email !== currentUser.email) ? setEnableButton(true) : setEnableButton(false)
  }, [formValuesProfile])


  function handleSubmitProfile(e) {
    e.preventDefault(e);
    setEditing(false)
    setEnableButton(false)
    const nameValue = formValuesProfile.name ? formValuesProfile.name : currentUser.name;
    const emailValue = formValuesProfile.email ? formValuesProfile.email : currentUser.email;
    handleReqest({name: nameValue, email: emailValue });
    setTimeout(() => {setMessage('')}, 1000)
  }

  const disabled = editing ? '' : 'disabled';
  const displayFormButton = { 
    display: `${editing ? 'block' : 'none'}`
  };
  const displayEditButtonClassName = `profile__edit-container ${editing ? 'profile__edit-container_hidden' : ''}`;
  
  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
      <form className='profile__form' name='profile-form'>
        <div className='form__container'>
          <div className={`profile__form-input ${isValidName ? '' : 'profile__form-input_error'}`}>
            <p className='profile-input__title'>Имя</p>
            <input className='profile-input__value' onChange={handleChange} type='text' name='name' defaultValue={currentUser.name} disabled={disabled} minLength='2' maxLength='30'></input>
          </div>
          <span className='profile-input__error'>{nameError}</span>
          <div className={`profile__form-input ${isValidEmail ? '' : 'profile__form-input_error'}`}>
            <p className='profile-input__title'>E-mail</p>
            <input className='profile-input__value' onChange={handleChange} type='email' name='email' defaultValue={currentUser.email} disabled={disabled}></input>
          </div>
          <span className='profile-input__error'>{emailError}</span>
        </div>
        <div className='form__button-container'>
          <span className='form__error'>{message}</span>
          <div className='form__button-confirm-container' style={displayFormButton}>
            <button className={`form__button-profile ${(isValidName || isValidEmail) && enableButton ? '' : 'form__button-profile_disabled'}`} onClick={handleSubmitProfile} disabled={(isValidName || isValidEmail) && enableButton ? '' : 'disabled'}>Сохранить</button>
          </div>
          <div className={displayEditButtonClassName}>
            <button className='profile__edit-button' type='button' title='Редактировать' onClick={handleEditButtonProfile}>Редактировать</button>
            <Link to="/" onClick={handleSignOut} className="profile__logout">Выйти из аккаунта</Link>
          </div>
        </div>
      </form>
    </section>
  )
}
export default Profile;

