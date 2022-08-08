import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__bar' noValidate>
        <input className='search-form__input' placeholder='Фильм' type='text' />
        <button className='search-form__button' type='submit' title='Поиск' aria-label='Кнопка поиска'>Поиск</button>
      </form>
      <label className='checkbox'>
        <input className='checkbox__input' type='checkbox' />
        <span className='checkbox-switch'>Короткометражки</span>
      </label>
    </section>
  )
}
export default SearchForm;
