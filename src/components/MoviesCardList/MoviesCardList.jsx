import React from "react";
import Movie from '../Movie/Movie';
import './MoviesCardList.css';
// import movies from '../../utils/movies';
import savedMovies from '../../utils/savedMovies';
import { useLocation } from "react-router-dom";

function MoviesCardList({movies, isLoading, nothingFound, searchError}) {
  const location = useLocation()
  const classNameMoviesList = isLoading || nothingFound || searchError ? 'movies-card-list movies-card-list_hidden' : 'movies-card-list';

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
                  movies.map(movie => 
                    <li className='movies-grid__container'>
                      <Movie 
                        key={movie.id}
                        movie={movie}
                      />
                    </li>
                  )
                }
              </ul>
              <button className='movies__button-more' type='button' title='Ещё' aria-label='Кнопка ещё'>Ещё</button>
            </>
          }
          {location.pathname === '/saved-movies' &&
            <>
              <ul className='movies-grid movies-grid_saved-movies'>
                {
                  savedMovies.map(movie => 
                    <li className='movies-grid__container'>
                      <Movie 
                        key={movie._id}
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
