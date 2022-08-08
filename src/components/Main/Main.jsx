import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Movies from '../Movies/Movies';
import './Main.css';
import { Route, Switch } from 'react-router-dom';

function Main({handlePromoButton}) {
  return (
    <main className='main'>
      <Switch>
        <Route exact path='/'>
          <Promo handlePromoButton={handlePromoButton}/>
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </Route>
        <Route exact path='/movies'>
          <Movies />
        </Route>
        {/* <Route exact path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route> */}
      </Switch>
    </main>
  )
}

export default Main;