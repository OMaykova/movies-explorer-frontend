import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <a className='portfolio__container' href='https://omaykova.github.io/how-to-learn/' target='blank'>
        <p className='portfolio__link'>Статичный сайт</p>
        <div className='portfolio__arrow'></div>
      </a>
      <a className='portfolio__container' href='https://omaykova.github.io/russian-travel/' target='blank'>
        <p className='portfolio__link'>Адаптивный сайт</p>
        <div className='portfolio__arrow'></div>
      </a>
      <a className='portfolio__container' href='https://omaykova.nomoredomains.xyz' target='blank'>
        <p className='portfolio__link'>Одностраничное приложение</p>
        <div className='portfolio__arrow'></div>
      </a>
    </section>
  )
}
export default Portfolio;