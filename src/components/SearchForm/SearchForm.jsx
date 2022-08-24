import React, {useState} from 'react';
import './SearchForm.css';
import {useLocation} from 'react-router-dom'

function SearchForm({handlSearchMovie, setSearchError}) {
  const location = useLocation();
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchValue, setSearchValue] = useState(location.pathname === '/movies' && localStorage.getItem('searchValue') ? localStorage.getItem('searchValue') : '');
  const [searchValueOfSavedMovie, setSearchValueOfSavedMovie] = useState(location.pathname === '/saved-movies' && localStorage.getItem('searchValueOfSavedMovie') ? localStorage.getItem('searchValueOfSavedMovie') : '');
  
  function handleChangeSearchInput(e) {
    setSearchError(false)
    if (location.pathname === '/movies') {
      setSearchValue(e.target.value);
    } else if (location.pathname === '/saved-movies') {
      setSearchValueOfSavedMovie(e.target.value);
    }
  }

  function handleChangeCheckbox(e) {
    setSearchError(false)
    if (location.pathname === '/movies') {
      localStorage.setItem('checkbox', e.target.checked);
    } else if (location.pathname === '/saved-movies') {
      localStorage.setItem('checkboxOfSaved', e.target.checked);
    }
    if (localStorage.getItem('searchValue') || localStorage.getItem('searchValueOfSavedMovie')) {
      handlSearchMovie();
    }
  }

  function handleSearchFormSubmit(e) {
    setSearchError(false)
    e.preventDefault();
    if (location.pathname === '/movies') {
      localStorage.setItem('searchValue', searchValue);
    } else if (location.pathname === '/saved-movies') {
    localStorage.setItem('searchValueOfSavedMovie', searchValueOfSavedMovie);
    }
    if (location.pathname === '/movies') {
      if (searchValue === '') {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
        handlSearchMovie();
      }
    } else if (location.pathname === '/saved-movies') {
      if (searchValueOfSavedMovie === '') {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
        handlSearchMovie();
      }
    }
   }

  return (
    <section className='search-form'>
      <form className='search-form__bar' noValidate>
        <input className='search-form__input' onChange={handleChangeSearchInput} placeholder='Фильм' type='text' required/>
        <button className='search-form__button' onClick={handleSearchFormSubmit} type='submit' title='Поиск' aria-label='Кнопка поиска'>Поиск</button>
      </form>
      <span className='search__error'>{isEmpty ? 'Введите ключевое слово поиска фильма' : ''}</span>
      <div className='checkbox-container'>
        <label className='checkbox'>
          <input className='checkbox__input' type='checkbox' onChange={handleChangeCheckbox}/>
          <span className='checkbox-switch'></span>
        </label>
        <p className='checkbox__title'>Короткометражки</p>
      </div>
      <div className='checkbox__underline'></div>
    </section>
  )
}
export default SearchForm;
