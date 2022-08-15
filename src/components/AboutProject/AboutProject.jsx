import React from 'react';
import BlockOfMain from '../BlockOfMain/BlockOfMain';
import './AboutProject.css';

function AboutProject() {
  return (
    <BlockOfMain
    classSection={'aboutProject'}
    title={'О проекте'}
    id={'aboutProject'}
    >
      <>
        <ul className='aboutProject__list'>
          <li className='aboutProject__unit'>
            <h3 className='aboutProject__title'>Дипломный проект включал 5 этапов</h3>       
            <p className='aboutProject__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </li>
          <li className='aboutProject__unit'>
            <h3 className='aboutProject__title'>На выполнение диплома ушло 5 недель</h3>
            <p className='aboutProject__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </li>
        </ul>
        <div className='aboutProject__table'>
          <span className='table__scale-green'><p className='table__scale'>1 неделя</p></span>
          <span className='table__scale-gray'><p className='table__scale'>4 недели</p></span>
          <span className='table__scale-inscription'><p className='table__scale'>Back-end</p></span>
          <span className='table__scale-inscription'><p className='table__scale'>Front-end</p></span>
        </div>
      </>
    </BlockOfMain>
  )
}
export default AboutProject;