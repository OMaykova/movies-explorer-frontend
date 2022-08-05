import React from 'react';
import './Footer.css';

function Footer() {
  const date= new Date();
  return(
    <section className='footer'>
      <h3 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className='footer__container'>
        <p className='footer__date'>{`© ${date.getFullYear()}`}</p>
        <div className='footer__links'>
          <a className='footer__link'>Яндекс.Практикум</a>
          <a className='footer__link'>Github</a>
          <a className='footer__link'>LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default Footer;
