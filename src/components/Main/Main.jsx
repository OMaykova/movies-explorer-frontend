import React from 'react';
import Promo from '../Promo/Promo';
import './Main.css';

function Main({handlePromoButton}) {
  return (
    <div>
      <Promo handlePromoButton={handlePromoButton}/>
      {/* <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio /> */}
    </div>
  )
}

export default Main;