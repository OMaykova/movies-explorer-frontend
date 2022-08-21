import React from 'react';
import BlockOfMain from '../BlockOfMain/BlockOfMain';
import foto from '../../images/foto2.JPG';
import './AboutMe.css';

function AboutMe() {

  return (
    <BlockOfMain
    classSection={'aboutMe'}
    title={'Студент'}
    >
		<div className='aboutMe__container'>
			<div className='aboutMe__profile'>
				<h3 className='aboutMe__name'>Ольга</h3>
				<p className='aboutMe__profession'>Фронтенд-разработчик, 38 лет</p>
				<p className='aboutMe__description'>Я живу в Москве. Окончила МГТУ им.Баумана. Я замужем, воспитываю сына. А еще последние полтора года занимаюсь изучением веб технологий и разработкой веб-интерфейсов. До декрета работала в головном офисе компании "Мегафон" в отделе инфраструктуры на должности менеджера по управлению проектами SAP. Разработка интересовала меня всегда, но не было возможности изучить ее глубже. Теперь же имею базовые навыки хочу получить реальный опыт и развиваться дальше.</p>
				<div className='aboutMe__links'>
					<a className='aboutMe__link' href='https://www.linkedin.com/in/olga-maykova/' target='blank'>LinkedIn</a>
					<a className='aboutMe__link' href='https://github.com/OMaykova' target='blank'>Github</a>
				</div>
			</div>
			<img className='aboutMe__foto' src={foto} alt='Фото Ольги'></img>
		</div>
    
    </BlockOfMain>
  )
}
export default AboutMe;