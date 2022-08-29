import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile({user, handleSignOut, handleReqest}) {
  const [editing, setEditing] = useState(false);
  const [formValuesProfile, setFormValuesProfile] = useState({name:'', email:''})

  function handleEditButtonProfile() {
    setEditing(true)
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setFormValuesProfile((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmitProfile(e) {
    e.preventDefault(e);
    handleReqest({name:formValuesProfile.name, email: formValuesProfile.email });
    setEditing(false)
  }

  const disabled = editing ? '' : 'disabled';
  const displayFormButton = { 
    display: `${editing ? 'block' : 'none'}`
  };
  const displayEditButtonClassName = `profile__edit-container ${editing ? 'profile__edit-container_hidden' : ''}`;

  return (
    <section className='profile'>
      <h2 className='profile__title'>Привет, {user.name}!</h2>
      <form className='profile__form' name='profile-form'>
        <div className='form__container'>
          <div className='profile__form-input'>
            <p className='profile-input__title'>Имя</p>
            <input className='profile-input__value' onChange={handleChange} type='text' name='name' placeholder={user.name} disabled={disabled}></input>
          </div>
          <div className='profile__form-input'>
            <p className='profile-input__title'>E-mail</p>
            <input className='profile-input__value' onChange={handleChange} type='email' name='email' placeholder={user.email} disabled={disabled}></input>
          </div>
        </div>
        <div className='form__button-container'>
          <div className='form__button-confirm-container' style={displayFormButton}>
            <span className='form__error'></span>
            <button className='form__button-profile' onClick={handleSubmitProfile}>Сохранить</button>
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

