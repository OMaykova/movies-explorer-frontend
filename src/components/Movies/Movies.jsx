import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies() {
  return(
    <section className='movies'>
      <SearchForm />
      <MoviesCardList />
      {/* <Preloader /> */}
    </section>
  )
}
export default Movies;