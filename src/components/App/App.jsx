import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import {movieApi} from '../../utils/movieApi'
import { isCyrillic } from '../../utils/utils';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [nothingFound, setNothingFound] = useState(false);
  const [searchError, setSearchError] = useState(false);

  function handlSearchMovie() {
    setIsLoading(true);
    movieApi.getMovies()
      .then((movies) => {
      const stateOfValue = localStorage.getItem('searchValue');
      const stateOfCheckbox = JSON.parse(localStorage.getItem('checkbox'));
      const resultOfSearchByValue = movies.filter(movie =>
        isCyrillic(stateOfValue.toLowerCase()) ?
          movie.nameRU.toLowerCase().includes(stateOfValue.toLowerCase())
          :
          movie.nameEN ?
            movie.nameEN.toLowerCase().includes(stateOfValue.toLowerCase())
            :
            ''
      )
      const resultOfSearch = resultOfSearchByValue.filter(movie => 
        stateOfCheckbox ?
          movie.duration <= 40
          :
          movie
      )
      localStorage.setItem('moviesOfSearch', JSON.stringify(resultOfSearch))
      if (resultOfSearch.length === 0) {
        setNothingFound(true);
      } else {
        setNothingFound(false);
      }
      })
      .catch(err => {
        setSearchError(true);
        console.log(err)})
      .finally(() => setIsLoading(false));

  }

  return (
    <div className="page">
      <Switch>
        <Route exact path ='/'>
          <Header 
            isLoggedIn={false}
          />
          <Main />
          <Footer />
        </Route>
        {/* <ProtectedRoute exact path='/movies'> */}
        <Route path='/movies'>
          <Header isLoggedIn='true'/>
          <Movies 
            movies={JSON.parse(localStorage.getItem('moviesOfSearch')) ?
              JSON.parse(localStorage.getItem('moviesOfSearch')) : []}
            isLoading={isLoading}
            nothingFound={nothingFound}
            handlSearchMovie={handlSearchMovie}
            searchError={searchError}
            setSearchError={setSearchError}
          />
          <Footer />
        </Route>
        {/* </ProtectedRoute> */}
        {/* <ProtectedRoute exact path='/saved-movies'> */}
        <Route path='/saved-movies'>
          <Header isLoggedIn='true'/>
          <SavedMovies />
          <Footer />
        </Route>
        {/* </ProtectedRoute> */}
        {/* <ProtectedRoute exact path='/profile'> */}
        <Route path='/profile'>
          <Header isLoggedIn='true' />
          <Profile 
          user={{name: 'Test', email: 'test@ya.ru'}}
          />
        </Route>
        {/* </ProtectedRoute> */}
        <Route exact path='/signup'>
          <Register />
        </Route>
        <Route exact path='/signin'>
          <Login />
        </Route>
        <Route exact path='*'>
          <PageNotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;