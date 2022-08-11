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
                <Movie 
                  key={movie.id}
                  movie={movie}
                />
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
                <Movie 
                  key={movie._id}
                  movie={movie}
                />
              )
            }
          </div>
        </>
      }
    </section>
  )
}
export default MoviesCardList;
