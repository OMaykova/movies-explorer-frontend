import React from 'react';
import globus from '../../images/globus.svg';
import { HashLink as Link } from 'react-router-hash-link';
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__caption'>
          <h1 className='promo__title'>Фильмотека - сервис поиска и просмотра фильмов</h1>
          <p className='promo__description'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className='globus' src={globus} alt='Изображение глобуса' />
      </div>
      <Link to='#aboutProject' className='promo__button-link'>
        <button className='promo__button' type='button' title='Узнать больше' aria-label='Кнопка узнать больше'>Узнать больше</button>
      </Link>
    </section>
  )
}
export default Promo;