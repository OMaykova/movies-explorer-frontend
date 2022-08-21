import React from 'react';
import BlockOfMain from '../BlockOfMain/BlockOfMain';
import './Techs.css';

function Techs() {

  return (
    <BlockOfMain
    classSection={'techs'}
    title={'Технологии'}
    >
      <h3 className='techs__title'>7 технологий</h3>
      <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__list'>
        <li className='techs__unit rectangle'>HTML</li>
        <li className='techs__unit rectangle'>CSS</li>
        <li className='techs__unit rectangle'>JS</li>
        <li className='techs__unit rectangle'>React</li>
        <li className='techs__unit rectangle'>Git</li>
        <li className='techs__unit rectangle'>Express.js</li>
        <li className='techs__unit rectangle'>mongoDB</li>
      </ul>
    </BlockOfMain>
  )
}
export default Techs;