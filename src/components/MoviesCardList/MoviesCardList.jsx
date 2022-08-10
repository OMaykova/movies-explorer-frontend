import React from "react";
import Movie from '../Movie/Movie'
import './MoviesCardList.css'

function MoviesCardList() {
  return(
    <section className='movies-card-list'>
      {/* {
        movies.map(movie => 
          <Movie />
        )
      } */}
      <Movie />
      <button className='movies__button-more' type='button' title='Ещё' aria-label='Кнопка ещё'>Ещё</button>
    </section>
  )
}
export default MoviesCardList;
