import React from "react";
import './Movie.css'
import like from '../../images/like.svg';
import like_active from '../../images/like_active.svg'
import deleted from '../../images/delete.svg';
import { useLocation } from "react-router-dom";
import { getTimeFromMins } from "../../utils/utils";

function Movie({movie, onMovieLike, onMovieDelete, isLiked}) {
  const location = useLocation();
  
  function handleLikeClick() {
    onMovieLike(movie);
  }
  function handleDeleteClick() {
    onMovieDelete(movie)
  }

  return(
    <figure className='movie-template'>
      <img className='movie__image' src={`https://api.nomoreparties.co${movie.image.url}`} alt='Обложка фильма'/>
      <figcaption className='movie__caption'>
        <div className='movie__container'>
          <h3 className='movie__title'>{movie.nameRU}</h3>
          {location.pathname === '/movies' &&
            <button className='movie__button' onClick={handleLikeClick} type='button' title='Нравится' aria-label="Кнопка нравится"><img className='movie__button-image' src={isLiked? like : like_active} alt='Нравится' /></button>
          }
          {location.pathname === '/saved-movies' &&
            <button className='movie__button movie__button_hidden' onClick={handleDeleteClick} type='button' title='Удалить' aria-label="Кнопка удалить"><img className='movie__button-image' src={deleted} alt='Удалить' /></button>
          }
            </div>
        <p className='movie__duration'>{getTimeFromMins(movie.duration)}</p>
      </figcaption>
    </figure>
  )
}
export default Movie;