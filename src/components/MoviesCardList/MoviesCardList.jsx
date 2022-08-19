import React from "react";
import Movie from '../Movie/Movie';
import './MoviesCardList.css';
import movies from '../../utils/movies';
import savedMovies from '../../utils/savedMovies';
import { useLocation } from "react-router-dom";

function MoviesCardList() {
  const location = useLocation()
  return(
    <section className='movies-card-list'>
      {location.pathname === '/movies' &&
        <>
          <div className='movies-grid'>
            {
              movies.map(movie => 
                <div className='movies-grid__container'>
                  <Movie 
                    key={movie.id}
                    movie={movie}
                  />
                </div>
              )
            }
          </div>
          <button className='movies__button-more' type='button' title='Ещё' aria-label='Кнопка ещё'>Ещё</button>
        </>
      }
      {location.pathname === '/saved-movies' &&
        <>
          <div className='movies-grid movies-grid_saved-movies'>
            {
              savedMovies.map(movie => 
                <div className='movies-grid__container'>
                  <Movie 
                    key={movie._id}
                    movie={movie}
                  />
                </div>
              )
            }
          </div>
        </>
      }
    </section>
  )
}
export default MoviesCardList;
