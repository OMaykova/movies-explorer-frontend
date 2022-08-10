import React from "react";
import './Movie.css'
import like from '../../images/like.svg';
import deleted from '../../images/delete.svg';
import { useLocation } from "react-router-dom";


function Movie({movie}) {
  const location = useLocation();

  function getTimeFromMins(mins, movie) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  };
  return(
    <figure className='movie-template'>
      <img className='movie__image' src={movie.image.url} alt='Обложка фильма'/>
      <figcaption className='movie__caption'>
        <div className='movie__container'>
          <h3 className='movie__title'>{movie.nameRU}</h3>
          {location.pathname === '/movies' &&
            <button className='movie__button' type='button' title='Нравится' aria-label="Кнопка нравится"><img className='movie__button-image' src={like} alt='Нравится' /></button>
          }
          {location.pathname === '/saved-movies' &&
            <button className='movie__button movie__button_hidden' type='button' title='Удалить' aria-label="Кнопка удалить"><img className='movie__button-image' src={deleted} alt='Удалить' /></button>
          }
            </div>
        <p className='movie__duration'>{getTimeFromMins(movie.duration)}</p>
      </figcaption>
    </figure>
  )
}
export default Movie;