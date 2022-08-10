import React from "react";
import './Movie.css'
import like from '../../images/like.svg';

function Movie({movie}) {
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
          <button className='movie__like' type='button' title='Нравится' aria-label="Кнопка нравится"><img className='movie__like-image' src={like} alt='Нравится' /></button>
        </div>
        <p className='movie__duration'>{getTimeFromMins(movie.duration)}</p>
      </figcaption>
    </figure>
  )
}
export default Movie;