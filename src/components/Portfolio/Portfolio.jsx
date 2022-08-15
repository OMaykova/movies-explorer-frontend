import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <div className='portfolio__container'>
        <a className='portfolio__link' href='https://omaykova.github.io/how-to-learn/' target='blank'>Статичный сайт</a>
        <a className='portfolio__arrow' href='https://omaykova.github.io/how-to-learn/' target='blank'></a>
      </div>
      <div className='portfolio__container'>
        <a className='portfolio__link' href='https://omaykova.github.io/russian-travel/' target='blank'>Адаптивный сайт</a>
        <a className='portfolio__arrow' href='https://omaykova.github.io/russian-travel/' target='blank'></a>
      </div>
      <div className='portfolio__container'>
        <a className='portfolio__link' href='https://omaykova.nomoredomains.xyz' target='blank'>Одностраничное приложение</a>
        <a className='portfolio__arrow' href='https://omaykova.nomoredomains.xyz' target='blank'></a>
      </div>
    </section>
  )
}
export default Portfolio;