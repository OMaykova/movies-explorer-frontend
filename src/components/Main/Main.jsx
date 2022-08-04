import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs';
import './Main.css';

function Main({handlePromoButton}) {
  return (
    <div>
      <Promo handlePromoButton={handlePromoButton}/>
      <AboutProject />
      <Techs />
      {/* <AboutMe />
      <Portfolio /> */}
    </div>
  )
}

export default Main;