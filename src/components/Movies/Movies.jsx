import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies({movies, isLoading, nothingFound, handlSearchMovie, searchError, setSearchError}) {
  // const [moviesOfSearch, setMoviesOfSearch] = useState([]);
  // const [searchValue, setSearchValue] = useState('');
  // const [checkbox, setCheckbox] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem('moviesOfSearch', JSON.stringify(moviesOfSearch));
  // }, [moviesOfSearch, checkbox, searchValue])
  // useEffect(() => {
  //   localStorage.setItem('searchValue', JSON.stringify(searchValue));
  // }, [searchValue])
  // useEffect(() => {
  //   localStorage.setItem('checkbox', JSON.stringify(checkbox));
  // }, [checkbox])

  // function handlSearchMovie(e) {
  //   setIsLoading(true);
  //   e.preventDefault();
  //   const resultOfSearchByValue = movies.filter(movie =>
  //     isCyrillic(searchValue.toLowerCase()) ?
  //       movie.nameRU.toLowerCase().includes(searchValue.toLowerCase())
  //       :
  //       movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
  //   )
  //   const resultOfSearchByCheck = resultOfSearchByValue.filter(movie => 
  //     checkbox === true ?
  //       movie.duration <= 40
  //       :
  //       movie
  //     )
  //   setMoviesOfSearch(resultOfSearchByCheck);
  //   setIsLoading(false);
  // }
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