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
          <p className='table__scale table__scale_green'>1 неделя</p>
          <p className='table__scale table__scale_gray'>4 недели</p>
          <p className='table__scale table__scale_inscription'>Back-end</p>
          <p className='table__scale table__scale_inscription'>Front-end</p>
        </div>
      </>
    </BlockOfMain>
  )
}
export default AboutProject;