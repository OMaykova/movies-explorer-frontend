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
  const [isLiked, setIsLiked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const [message, setMessage] = useState('');
  const [stateSavedMovies, setStateSavedMovies] =useState(JSON.parse(localStorage.getItem('savedMovies')) ?
  JSON.parse(localStorage.getItem('savedMovies')) : []);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const localMovies = localStorage.getItem('movies');
    if (localMovies) {
      setMovies(JSON.parse(localMovies))
    } else {
      movieApi.getMovies()
        .then((movies) => {
          setMovies(movies)
          localStorage.setItem('movies', JSON.stringify(movies))
        })
        .catch((err) => console.log(err))
    }
    const localSavedMovies = localStorage.getItem('savedMovies');
    if (localSavedMovies) {
      setSavedMovies(JSON.parse(localSavedMovies))
    } else {
    mainApi.getSavedMovies()
      .then((res) => {
        setStateSavedMovies(res)
        localStorage.setItem('savedMovies', JSON.stringify(res))
        setSavedMovies(res)
      })
    }
    const likedMovies = [];
      savedMovies.forEach((movie) => {
        likedMovies.push(movie.movieId)
      })
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
  }, [])

// БЛОК ФУНКЦИЙ ПОИСКА ФОРМ
// =================================================
// 1. Поиск по фильмам
  function handlSearchMovie() {
    setIsLoading(true);
    mainApi.getSavedMovies()
      .then((res) => {
        setStateSavedMovies(res)
        localStorage.setItem('savedMovies', JSON.stringify(res))
        const likedMovies = [];
        res.forEach((movie) => {
          likedMovies.push(movie.movieId)
        })
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
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
        setStateSavedMovies(resultOfSearch)
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

  useEffect(() => {
    setStateSavedMovies(JSON.parse(localStorage.getItem('savedMovies')) ?
      JSON.parse(localStorage.getItem('savedMovies')) : [])
    setMessage('');
  }, [location])
  // =================================================
  // БЛОК РАБОТЫ С ФИЛЬМОМ
  // =================================================
   function handleCardLike(movie) {
    if (location.pathname === '/movies') {
      setIsLiked(JSON.parse(localStorage.getItem('likedMovies')).includes(movie.id))
    }
    if (!isLiked) {
      mainApi.addSavedMovies({
        country: (movie.country ? movie.country : 'Empty'),
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: (movie.nameEN ? movie.nameEN : 'Empty'),
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      })
      .then((movie) => {
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        savedMovies.push(movie);
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        const likedMovies = JSON.parse(localStorage.getItem('likedMovies'));
        likedMovies.push(movie.movieId);
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
        setIsLiked(true);
      })
      .catch((err) => console.log(err))
    } else {
      handleDeleteCardLike(movie)
      setIsLiked(false);        
    }
  }
  function handleDeleteCardLike(movie) {
    JSON.parse(localStorage.getItem('savedMovies')).forEach((m) => {
      if (m.movieId === movie.id) {
        mainApi.removeSavedMovies(m._id)
        .then(() => {
          const likedMovies = JSON.parse(localStorage.getItem('likedMovies')).filter((id) => id !== m.movieId);
          localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
          const savedMovies = JSON.parse(localStorage.getItem('savedMovies')).filter((s) => s._id !== m._id)
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
          setStateSavedMovies(savedMovies)
        })
        .catch((err) => console.log(err))
      }
    })
  }
  function handleDeleteSavedMovie(movie) {
    mainApi.removeSavedMovies(movie._id)
      .then(() => {
        const likedMovies = JSON.parse(localStorage.getItem('likedMovies')).filter((id) => id !== movie.movieId);
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies')).filter((s) => s._id !== movie._id)
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        setStateSavedMovies(savedMovies)
          
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
        setMessage('Регистрация прошла успешно')
        setTimeout(() => {
          handleLogin({email, password})
        }, 1000);
        } 
    })
    .catch((err) => {
      if (err.includes(409)) {
        setMessage("Пользователь с таким email уже существует");
      } else {
        setMessage("При регистрации пользователя произошла ошибка");
      }
    });
  }

  function handleLogin({email, password}) {
    return auth.authorize(email, password)
    .then((data) => {
      if (data) {
        setMessage('Вы успешно авторизовались')
        setIsLoggedIn(true);
        history.push("/movies");
      } 
    })
    .catch((err) => {
      if (err.includes(401)) {
        setMessage("Неверный логин или пароль");
      } else {
        setMessage("При равторизации произошла ошибка");
      }
    });
  }
  function handleSignOut() {
    auth.signout()
      .then(console.log('Куки удален!'))
      setIsLoggedIn(false);
      localStorage.clear();
      history.push('/');
  }

  function changeProfileData({name, email}) {
    console.log(name, email)
    mainApi.editProfile(name, email)
    .then((res) => {
      setMessage('Данные успешно сохранены!')
      setCurrentUser(res)
    })
    .catch((err) => {
      if (err.includes(409)) {
        setMessage("Пользователь с таким email уже существует");
      } else {
        console.log(err)
        setMessage("При обновлении профиля произошла ошибка");
      }
    })
  }

  const checkAuth = () => {
    auth.getContent()
      .then((data) => {
        if (data) {
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
      mainApi.getUserInfo()
        .then((res) => {
          setCurrentUser({
            name: res.name,
            email: res.email,
            _id: res._id
          })
        })
        .catch((err) => console.log(err));
      }
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
          <Route exact path='/movies'>
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
          <Route exact path='/saved-movies'>
          <ProtectedRoute exact path='/saved-movies' isLoggedIn={isLoggedIn}>
            <Header isLoggedIn={isLoggedIn}/>
            <SavedMovies 
              savedMovies={stateSavedMovies}
              isLoading={isLoading}
              nothingFound={nothingFound}
              handleSearchSavedMovies={handleSearchSavedMovies}
              searchError={searchError}
              setSearchError={setSearchError}
              onMovieDelete={handleDeleteSavedMovie}
              isLiked={isLiked}
            />
            <Footer />
            </ProtectedRoute>
          </Route>
          <Route exact path='/profile'>
            <ProtectedRoute exact path='/profile' isLoggedIn={isLoggedIn}>
            <Header isLoggedIn={isLoggedIn} />
            <Profile 
              handleSignOut={handleSignOut}
              handleReqest={changeProfileData}
              message={message}
              setMessage={setMessage}
            />
            </ProtectedRoute>
          </Route>
          <Route exact path='/signup'>
            <Register 
              handleReqest={handleRegister}
              message={message}
            />
          </Route>
          <Route exact path='/signin'>
            <Login 
              handleReqest={handleLogin}
              message={message}
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