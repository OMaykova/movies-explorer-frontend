import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__container' href='https://omaykova.github.io/how-to-learn/' target='blank'>
        <li className='portfolio__link'>Статичный сайт</li>
        <li className='portfolio__arrow'></li>
      </ul>
      <ul className='portfolio__container' href='https://omaykova.github.io/russian-travel/' target='blank'>
        <li className='portfolio__link'>Адаптивный сайт</li>
        <li className='portfolio__arrow'></li>
      </ul>
      <ul className='portfolio__container' href='https://omaykova.nomoredomains.xyz' target='blank'>
        <li className='portfolio__link'>Одностраничное приложение</li>
        <li className='portfolio__arrow'></li>
      </ul>
    </section>
  )
}
export default Portfolio;