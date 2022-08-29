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
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import './App.css';
import {movieApi} from '../../utils/movieApi'
import { isCyrillic } from '../../utils/utils';
import { mainApi } from '../../utils/mainApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import * as auth from '../../utils/auth'

function App() {

  const location = useLocation();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [nothingFound, setNothingFound] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });
  const [savedMoviesOfSearch, setSavedMoviesOfSearch] = useState ([])
  const [isLiked, setIsLiked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setSavedMoviesOfSearch(JSON.parse(localStorage.getItem('savedMoviesOfSearch')) ?
      JSON.parse(localStorage.getItem('savedMoviesOfSearch')) : [])
  }, [])


// БЛОК ФУНКЦИЙ ПОИСКА ФОРМ
// =================================================
// 1. Поиск по фильмам
  function handlSearchMovie() {
    setIsLoading(true);
    mainApi.getSavedMovies()
      .then((res) => {
        localStorage.setItem('savedMovies', JSON.stringify(res))
        const likedMovies = [];
        res.forEach((movie) => {
          likedMovies.push(movie._id)
        })
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
      })
      .catch(err => console.log(err));
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

// 2. Поиск по сохраненным фильмам
  function handleSearchSavedMovies() {
    setIsLoading(true);
    mainApi.getSavedMovies()
      .then((savedMovies) => {
        const stateOfValue = localStorage.getItem('searchValueOfSavedMovie');
        const stateOfCheckbox = JSON.parse(localStorage.getItem('checkboxOfSaved'));
        const resultOfSearchByValue = savedMovies.filter(movie =>
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
        localStorage.setItem('savedMoviesOfSearch', JSON.stringify(resultOfSearch))
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
  // =================================================
  // БЛОК РАБОТЫ С ФИЛЬМОМ
  // =================================================
   function handleCardLike(movie) {
    if (location.pathname === '/movies') {
      setIsLiked(JSON.parse(localStorage.getItem('likedMovies')).includes(movie._id))
    }
    if (!isLiked) {
      mainApi.addSavedMovies({
        country: (movie.country ? movie.country : 'Empty'),
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: (movie.nameEN ? movie.nameEN : 'Empty'),
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
        _id: movie.id,
      })
      .then((movie) => {
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        savedMovies.push(movie);
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        const likedMovies = JSON.parse(localStorage.getItem('likedMovies'));
        likedMovies.push(movie._id);
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
        setIsLiked(true);
      })
      .catch((err) => console.log(err))
    } else {
      handleDeleteSavedMovie(movie._id)
      setIsLiked(false);        
    }
  }

  function handleDeleteSavedMovie(movie) {
    mainApi.removeSavedMovies(movie._id)
      .then(() => {
        const savedMoviesOfSearch = JSON.parse(localStorage.getItem('savedMoviesOfSearch')).filter((m) => m._id !== movie._id)
        localStorage.setItem('savedMoviesOfSearch', JSON.stringify(savedMoviesOfSearch))
        setSavedMoviesOfSearch(savedMoviesOfSearch);
        const likedMovies = JSON.parse(localStorage.getItem('likedMovies')).filter((m) => m._id !== movie._id);
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
      })
      .catch((err) => console.log(err))
  }
// =================================================
// БЛОК АУТЕНТИФИКАЦИИ И АВТОРИЗАЦИИ
// =================================================
  function handleRegister({name, password, email}) {
    return auth.register(name, password, email)
    .then((res) => {
      if(res) {
        setTimeout(() => {history.push('/signin')}, 2000);
        console.log('Регистрация успешна, res: ', res)
        } 
    })
    .catch((err) => {
      console.log(err)
    });
  }

  function handleLogin({email, password}) {
    return auth.authorize(email, password)
    .then((data) => {
      console.log('Вы успешно авторизовались, res: ', data)
      if (data) {
        setIsLoggedIn(true);
      } 
    })
    .catch((err) => {
      console.log(err)
    });
  }
  function handleSignOut() {
    auth.signout()
      .then(console.log('Куки удален!'))
      setIsLoggedIn(false);
      history.push('/signup');
  }

  function changeProfileData({name, email}) {
    mainApi.editProfile(name, email)
    .then((res) => {
      setCurrentUser(res)
    })
    .catch(console.log)
  }

  const checkAuth = () => {
    auth.getContent()
      .then((data) => {
        if (data) {
          setCurrentUser({
            name: data.name,
            email: data.email,
            _id: data._id
          })
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        console.log(`Пользователь не авторизован ${err}`);
      });
  };

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/movies");
      mainApi.getUserInfo()
        .then((res) => {
          setCurrentUser({
            name: res.name,
            email: res.email,
            _id: res._id
          })
        })
        .catch((err) => console.log(err))}
  }, [isLoggedIn])
// =================================================
  return (
    <CurrentUserContext.Provider value ={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path ='/'>
            <Header 
              isLoggedIn={isLoggedIn}
            />
            <Main />
            <Footer />
          </Route>
          <Route path='/movies'>
            <ProtectedRoute exact path='/movies' isLoggedIn={isLoggedIn}>
            <Header isLoggedIn={isLoggedIn}/>
            <Movies 
              movies={JSON.parse(localStorage.getItem('moviesOfSearch')) ?
                JSON.parse(localStorage.getItem('moviesOfSearch')) : []}
              isLoading={isLoading}
              nothingFound={nothingFound}
              handlSearchMovie={handlSearchMovie}
              searchError={searchError}
              setSearchError={setSearchError}
              onMovieLike={handleCardLike}
              onMovieDelete={handleDeleteSavedMovie}
              isLiked={isLiked}
            />
            <Footer />
            </ProtectedRoute>
          </Route>
          <Route path='/saved-movies'>
          <ProtectedRoute exact path='/saved-movies' isLoggedIn={isLoggedIn}>
            <Header isLoggedIn={isLoggedIn}/>
            <SavedMovies 
              savedMovies={JSON.parse(localStorage.getItem('savedMovies')) ?
                JSON.parse(localStorage.getItem('savedMovies')) : []}
              isLoading={isLoading}
              nothingFound={nothingFound}
              handleSearchSavedMovies={handleSearchSavedMovies}
              searchError={searchError}
              setSearchError={setSearchError}
              onMovieLike={handleCardLike}
              onMovieDelete={handleDeleteSavedMovie}
              isLiked={isLiked}
            />
            <Footer />
            </ProtectedRoute>
          </Route>
          <Route path='/profile'>
            <ProtectedRoute exact path='/profile' isLoggedIn={isLoggedIn}>
            <Header isLoggedIn={isLoggedIn} />
            <Profile 
              user={{name: currentUser.name, email: currentUser.email}}
              handleSignOut={handleSignOut}
              handleReqest={changeProfileData}
            />
            </ProtectedRoute>
          </Route>
          <Route exact path='/signup'>
            <Register 
              handleReqest={handleRegister}
            />
          </Route>
          <Route exact path='/signin'>
            <Login 
              handleReqest={handleLogin}
            />
          </Route>
          <Route exact path='*'>
            <PageNotFound/>
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;