import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import './SavedMovies.css';

function SavedMovies({savedMovies}) {
  return(
    <section className='movies'>
      <SearchForm />
      <MoviesCardList />
      {/* <Preloader /> */}
    </section>
  )
}

export default SavedMovies;