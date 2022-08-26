import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies({movies, isLoading, nothingFound, handlSearchMovie, searchError, setSearchError}) {

  return(
    <section className='movies'>
      <SearchForm 
        handlSearchMovie={handlSearchMovie}
        setSearchError={setSearchError}
      />
      <MoviesCardList 
        nothingFound={nothingFound}
        movies={movies}
        isLoading={isLoading}
        searchError={searchError}
      />
      <Preloader 
        isLoading={isLoading}
      />

    </section>
  )
}
export default Movies;