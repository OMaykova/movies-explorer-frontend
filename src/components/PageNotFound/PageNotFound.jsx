import React from 'react';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <section className='pageNotFound'>
			<div className='error__container'>
			<h2 className='error__code'>404</h2>
			<p className='error__text'>Страница не найдена</p>
			</div>
			<a className='pageNotFound__link'>Назад</a>
		</section>
	)
}
export default PageNotFound;