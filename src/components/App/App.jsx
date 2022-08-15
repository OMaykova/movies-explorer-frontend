import React from 'react';
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

function App() {

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
          <Movies />
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