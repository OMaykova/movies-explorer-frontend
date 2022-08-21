import React from 'react';
import { NavLink } from "react-router-dom";
import profile_icon from '../../images/profile_icon.svg';
import './Navigation.css';

function Navigation({ toggleClass }) {
  return(
    <section className='navigation'>
      <div className='navigation-links'>
        <NavLink to = '/movies' className='header-nav__link' activeClassName='header-nav__link_active' onClick={toggleClass}>Фильмы</NavLink>
        <NavLink to = '/saved-movies' className='header-nav__link' activeClassName='header-nav__link_active' onClick={toggleClass}>Сохраненные фильмы</NavLink>
      </div>
      <div className='header-nav__profile'>
        <NavLink to = '/profile' className='header-nav__link header-nav__link_profile' activeClassName='header-nav__link_active' onClick={toggleClass}>Аккаунт</NavLink>
        <div className='header-nav__container'>
          <img className='header-nav__profile-icon' src={profile_icon} alt='Иконка аккаунта в виде человека'/>
        </div>
      </div>
    </section>
  )
}
export default Navigation;
