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
            <p className='aboutProject__title'>Регистрация</p>       
            {/* <p className='aboutProject__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p> */}
            <p className='aboutProject__description'>Для доступа к базе фильмов пройдите простую регистрацию на главной странице.</p>
          </li>
          <li className='aboutProject__unit'>
            {/* <p className='aboutProject__title'>На выполнение диплома ушло 5 недель</p>
            <p className='aboutProject__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p> */}
            <p className='aboutProject__title'>Как пользоваться</p>
            <p className='aboutProject__description'>После регистрации, вы получаете полный доступ к ресурсам "Фильмотеки". Поиск можно делать как на русском, так и на английском языках. Понравившиеся фильмы вы можете сохранить в своем аккаунте и возвращаться к ним снова через пункт меню "Сохраненные фильмы". Нажмите на заставку фильма, чтобы посмотреть его трейлер.</p>
          </li>
        </ul>
        {/* <div className='aboutProject__table'>
          <span className='table__scale-green'><p className='table__scale'>1 неделя</p></span>
          <span className='table__scale-gray'><p className='table__scale'>4 недели</p></span>
          <span className='table__scale-inscription'><p className='table__scale'>Back-end</p></span>
          <span className='table__scale-inscription'><p className='table__scale'>Front-end</p></span>
        </div> */}
      </>
    </BlockOfMain>
  )
}
export default AboutProject;