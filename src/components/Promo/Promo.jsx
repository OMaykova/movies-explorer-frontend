import React from 'react';
import globus from '../../images/globus.svg';
import './Promo.css';

function Promo({handlePromoButton}) {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__caption'>
          <h1 className='promo__title'>Учебный проект студента факультета Веб&zwj;-&zwj;разработки.</h1>
          <p className='promo__description'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className='globus' src={globus} alt='Изображение глобуса' />
      </div>
      <button className='promo__button' type='button' title='Узнать больше' aria-label='Кнопка узнать больше' onClick={handlePromoButton}>Узнать больше</button>
    </section>
  )
}
export default Promo;