import React from 'react';
import globus from '../../images/globus.svg';
import { Route, Link, useRouteMatch } from "react-router-dom";
import AboutProject from '../AboutProject/AboutProject'
import './Promo.css';

function Promo() {
  const { path, url } = useRouteMatch();
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__caption'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб&zwj;-&zwj;разработки.</h1>
          <p className='promo__description'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className='globus' src={globus} alt='Изображение глобуса' />
      </div>
      <Link to={`${url}/about-project`}>
        <button className='promo__button' type='button' title='Узнать больше' aria-label='Кнопка узнать больше'>Узнать больше</button>
      </Link>
      <Route path={`${path}/about-project`}>
        <AboutProject />
      </Route>
    </section>
  )
}
export default Promo;