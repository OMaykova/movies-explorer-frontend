import React, {useState} from "react";
import Movie from '../Movie/Movie';
import './MoviesCardList.css';
import { useLocation } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useEffect } from "react";


function MoviesCardList({movies, savedMovies, isLoading, nothingFound, searchError, onMovieLike, onMovieDelete, isLikedMovie, setStateSavedMovies}) {
  const location = useLocation()
  const classNameMoviesList = isLoading || nothingFound || searchError ? 'movies-card-list movies-card-list_hidden' : 'movies-card-list';
  const screenWidth = useWindowDimensions();
  const [counter, setCounter] = useState({total: screenWidth.width, more: 3})
  const [showMovie, setShowMovie] = useState([]);
  
  useEffect(() => {
    if (location.pathname === '/movies') {
    if (screenWidth.width > 1024) {
      setCounter({total:12, more: 3})
    } else if (screenWidth.width < 1024 && screenWidth.width > 480) {
      setCounter({total:8, more: 2})
    } else if (screenWidth.width < 480) {
      setCounter({total:5, more: 2})
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
                        onMovieLike={onMovieLike}
                        isLikedMovie={isLikedMovie}
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
                        onMovieDelete={onMovieDelete}
                        isLikedMovie={isLikedMovie}
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
