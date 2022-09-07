import React, {useState} from "react";
import Movie from '../Movie/Movie';
import './MoviesCardList.css';
import { useLocation } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useEffect } from "react";
import {
  desktop,
  mobile,
  totalDesktop,
  totalTablet,
  totalMobile,
  moreDesktop,
  moreTablet,
  moreMobile
} from '../../utils/constants'

function MoviesCardList({movies, savedMovies, isLoading, nothingFound, searchError, setStateSavedMovies}) {
  const location = useLocation()
  const classNameMoviesList = isLoading || nothingFound || searchError ? 'movies-card-list movies-card-list_hidden' : 'movies-card-list';
  const screenWidth = useWindowDimensions();
  const [counter, setCounter] = useState({total: 0, more: 0})
  const [showMovie, setShowMovie] = useState([]);
  
  useEffect(() => {
    if (location.pathname === '/movies') {
    if (screenWidth.width > desktop) {
      setCounter({total: totalDesktop, more: moreDesktop})
    } else if (screenWidth.width < desktop && screenWidth.width > mobile) {
      setCounter({total: totalTablet, more: moreTablet})
    } else if (screenWidth.width < mobile) {
      setCounter({total: totalMobile, more: moreMobile})
    }
    }
  }, [location.pathname, screenWidth])

  useEffect(() => {
    if (location.pathname === '/movies') {
      if (movies.length) {
        const list = movies.slice(0, counter.total);
        setShowMovie(list);
      }
    }
  }, [movies, counter.total])

  function handleMoreButton() {
    let start = counter.total + counter.more
    setCounter({total: start, more: counter.more})
  }

  return(
    <>
    {nothingFound ? 
      <p className='movies-card-list__nothing'>Ничего не найдено</p>
      :
      searchError ?
        <p className='movies-card-list__error'>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>
        :
        <section className={classNameMoviesList}>
          {location.pathname === '/movies' &&
            <>
              <ul className='movies-grid'>
                {
                  showMovie.map(movie => 
                    <li className='movies-grid__container' key={movie.id}>
                      <Movie 
                        setStateSavedMovies={setStateSavedMovies}
                        movie={movie}
                      />
                    </li>
                  )
                }
              </ul>
              {movies.length > 3 && counter.total < movies.length ?
                <button className='movies__button-more' onClick={handleMoreButton} type='button' title='Ещё' aria-label='Кнопка ещё'>Ещё</button>
                :
                ''
              }
            </>
          }
          {location.pathname === '/saved-movies' &&
            <>
              <ul className='movies-grid movies-grid_saved-movies'>
                {
                  savedMovies.map(movie => 
                    <li className='movies-grid__container' key={movie.movieId}>
                      <Movie 
                        setStateSavedMovies={setStateSavedMovies}
                        movie={movie}
                      />
                    </li>
                  )
                }
              </ul>
            </>
          }
        </section>
    }
    </>
  )
}
export default MoviesCardList;
