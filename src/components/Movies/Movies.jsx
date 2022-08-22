import React, {useState} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies({movies}) {
  const [searchValue, setSearchValue] = useState('');
  const [moviesOfSearch, setMoviesOfSearch] = useState([]);
  const isCyrillic = function (text) {
    return /[а-я]/i.test(text);
  }
  function handlSearchMovie(e) {
    e.preventDefault();
    const resultOfSearch = movies.filter((movie) => 
      { 
        console.log(isCyrillic(searchValue.toLowerCase()))
        if (isCyrillic(searchValue.toLowerCase())) {
          return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
        }
        return movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
        
      })
  
    setMoviesOfSearch(resultOfSearch);
  }
  return(
    <section className='movies'>
      <SearchForm 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handlSearchMovie={handlSearchMovie}
      />
      <MoviesCardList movies={moviesOfSearch}/>
      {/* <Preloader /> */}
    </section>
  )
}
export default Movies;