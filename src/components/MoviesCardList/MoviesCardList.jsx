import React from "react";
import Movie from '../Movie/Movie';
import './MoviesCardList.css';
import movies from '../../utils/movies';

function MoviesCardList() {
  return(
    <section className='movies-card-list'>
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
    </section>
  )
}
export default MoviesCardList;
