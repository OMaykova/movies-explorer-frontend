import React from 'react';
import './Footer.css';

function Footer() {
  const date= new Date();
  return(
    <footer className='footer'>
      <h3 className='footer__title'>Учебный проект х BeatFilm.</h3>
      <div className='footer__container'>
        <p className='footer__date'>{`© ${date.getFullYear()}`}</p>
        <ul className='footer__links'>
          {/* <li><a className='footer__link' href='https://practicum.yandex.ru' target='blank'>Яндекс.Практикум</a></li> */}
          <li><a className='footer__link' href='https://github.com/OMaykova' target='blank'>Github</a></li>
          <li><a className='footer__link' href='https://www.linkedin.com/in/olga-maykova/' target='blank'>LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
