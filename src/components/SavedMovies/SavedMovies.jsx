import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import './SavedMovies.css';

function SavedMovies({savedMovies, isLoading, nothingFound, handleSearchSavedMovies, searchError, setSearchError, onMovieDelete, isLiked}) {
  return(
    <section className='movies'>
      <SearchForm 
        handleSearchSavedMovies={handleSearchSavedMovies}
        setSearchError={setSearchError}      
      />
      <MoviesCardList 
        nothingFound={nothingFound}
        savedMovies={savedMovies}
        isLoading={isLoading}
        searchError={searchError}
        onMovieDelete={onMovieDelete}
        isLiked={isLiked}
      />
      <Preloader 
        isLoading={isLoading}
      />
    </section>
  )
}

export default SavedMovies;