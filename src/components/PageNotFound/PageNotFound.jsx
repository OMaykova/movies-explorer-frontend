import React from 'react';
import { useHistory } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  const history = useHistory();
  function handleGoBack() {
    history.goBack()
  }
  return (
    <section className='pageNotFound'>
      <div className='error__container'>
      <h2 className='error__code'>404</h2>
      <p className='error__text'>Страница не найдена</p>
      </div>
      <button onClick={handleGoBack} className='pageNotFound__link'>Назад</button>
    </section>
  )
}
export default PageNotFound;