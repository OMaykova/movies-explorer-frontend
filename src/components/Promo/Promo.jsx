import React from 'react';
import globus from '../../images/globus.svg';
import './Promo.css';

function Promo({handlePromoButton}) {
  return (
    <section className='promo'>
      <div className=''>
        <h1 className='promo__caption'>Учебный проект студента факультета Веб-разработки.</h1>
        <p className='promo__description'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      </div>
      <img className='globus' src={globus} alt='Изображение глобуса' />
      <button className='promo__button' type='button' title='Узнать больше' aria-label='Кнопка узнать больше' onClick={handlePromoButton}>Узнать больше</button>
    </section>
  )
}
export default Promo;