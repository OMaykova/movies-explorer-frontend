import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <div className='portfolio__container'>
        <a className='portfolio__link'>Статичный сайт</a>
        <a className='portfolio__arrow'></a>
      </div>
      <div className='portfolio__container'>
        <a className='portfolio__link'>Адаптивный сайт</a>
        <a className='portfolio__arrow'></a>
      </div>
      <div className='portfolio__container'>
        <a className='portfolio__link'>Одностраничное приложение</a>
        <a className='portfolio__arrow'></a>
      </div>
    </section>
  )
}
export default Portfolio;