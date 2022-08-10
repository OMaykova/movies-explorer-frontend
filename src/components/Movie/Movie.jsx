import React from "react";
import './Movie.css'
import movie from '../../images/movie.svg';
import like from '../../images/like.svg'

function Movie() {
  return(
    <figure className='movie-template'>
      <img className='movie__image' src={movie} alt='Обложка фильма'/>
      <figcaption className='movie__caption'>
        <div className='movie__container'>
          <h3 className='movie__title'>33 слова о дизайне</h3>
          <button className='movie__like' type='button' title='Нравится' aria-label="Кнопка нравится"><img className='movie__like-image' src={like} alt='Нравится' /></button>
        </div>
        <p className='movie__duration'>1ч 47м</p>
      </figcaption>
    </figure>
  )
}
export default Movie;