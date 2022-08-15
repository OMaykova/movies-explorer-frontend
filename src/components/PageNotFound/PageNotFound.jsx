import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <section className='pageNotFound'>
			<div className='error__container'>
			<h2 className='error__code'>404</h2>
			<p className='error__text'>Страница не найдена</p>
			</div>
			<Link to='/' className='pageNotFound__link'>Назад</Link>
		</section>
	)
}
export default PageNotFound;