import React, { useState } from "react";
import './Movie.css'
import like from '../../images/like.svg';
import like_active from '../../images/like_active.svg'
import deleted from '../../images/delete.svg';
import { useLocation } from "react-router-dom";
import { getTimeFromMins } from "../../utils/utils";
import { mainApi } from '../../utils/mainApi';

function Movie({movie, setStateSavedMovies, onMovieLike, onMovieDelete, isLikedMovie}) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(location.pathname === '/movies' ? JSON.parse(localStorage.getItem('likedMovies')).includes(movie.id) : false);
  // const isLiked = isLikedMovie(movie)
  // console.log('isLiked', isLiked)

  // function handleLikeClick() { 
  //   onMovieLike(movie, isLiked);
  // }
  // function handleDeleteClick() {
  //   onMovieDelete(movie, isLiked)
  // }
  // const likedMovies = JSON.parse(localStorage.getItem('likedMovies'))

  function handleCardLike() {
    // if (location.pathname === '/movies') {
    //   setIsLiked(JSON.parse(localStorage.getItem('likedMovies')).includes(movie.id))
    // }
    if (!isLiked) {
      mainApi.addSavedMovies({
        country: (movie.country ? movie.country : 'Empty'),
        director: (movie.director ? movie.director : 'Empty'),
        duration: (movie.duration ? movie.duration : 0),
        year: (movie.year ? movie.year : 'Empty'),
        description: (movie.description ? movie.description : 'Empty'),
        image: (movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : 'https://filmoteka.nomoredomains.xyz/pagenotfound'),
        trailerLink: (movie.trailerLink ? movie.trailerLink : 'https://filmoteka.nomoredomains.xyz/pagenotfound'),
        nameRU: (movie.nameRU ? movie.nameRU : 'Empty'),
        nameEN: (movie.nameEN ? movie.nameEN : 'Empty'),
        thumbnail: (movie.image.formats.thumbnail.url ? `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}` : 'https://filmoteka.nomoredomains.xyz/pagenotfound'),
        movieId: movie.id,
      })
      .then((movie) => {
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        savedMovies.push(movie);
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        const likedMovies = JSON.parse(localStorage.getItem('likedMovies'));
        likedMovies.push(movie.movieId);
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
        setIsLiked(true);
      })
      .catch((err) => console.log(err))
    } else {
      handleDeleteCardLike(movie)
      setIsLiked(false);        
    }
  }
  function handleDeleteCardLike(movie) {
    JSON.parse(localStorage.getItem('savedMovies')).forEach((m) => {
      if (m.movieId === movie.id) {
        mainApi.removeSavedMovies(m._id)
        .then(() => {
          const likedMovies = JSON.parse(localStorage.getItem('likedMovies')).filter((id) => id !== m.movieId);
          localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
          const savedMovies = JSON.parse(localStorage.getItem('savedMovies')).filter((s) => s._id !== m._id)
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
          setStateSavedMovies(savedMovies)
        })
        .catch((err) => console.log(err))
      }
    })
  }
  function handleDeleteSavedMovie() {
    mainApi.removeSavedMovies(movie._id)
      .then(() => {
        const likedMovies = JSON.parse(localStorage.getItem('likedMovies')).filter((id) => id !== movie.movieId);
        localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
        const savedMovies = JSON.parse(localStorage.getItem('savedMovies')).filter((s) => s._id !== movie._id)
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        setStateSavedMovies(savedMovies)
          
      })
      .catch((err) => console.log(err))
  }

  return(
    <figure className='movie-template'>
      <a className='movie__trailler' href={movie.trailerLink} target='_blank' rel="noreferrer"><img className='movie__image' src={location.pathname==='/movies'? `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt='Обложка фильма'/></a>
      <figcaption className='movie__caption'>
        <div className='movie__container'>
          <h3 className='movie__title'>{movie.nameRU}</h3>
          {location.pathname === '/movies' &&
            <button className='movie__button' onClick={handleCardLike} type='button' title='Нравится' aria-label="Кнопка нравится"><img className='movie__button-image' src={isLiked ? like_active : like} alt='Нравится' /></button>
          }
          {location.pathname === '/saved-movies' &&
            <button className='movie__button movie__button_hidden' onClick={handleDeleteSavedMovie} type='button' title='Удалить' aria-label="Кнопка удалить"><img className='movie__button-image' src={deleted} alt='Удалить' /></button>
          }
            </div>
        <p className='movie__duration'>{getTimeFromMins(movie.duration)}</p>
      </figcaption>
    </figure>
  )
}
export default Movie;