import React from 'react';
import './BlockOfMain.css';

function BlockOfMain({classSection, title, id, ...props}) {

  return (
    <section className={`blockOfMain ${classSection}`} id={id}>
      <h2 className='blockOfMain__title'>{title}</h2>
      {props.children}
    </section>
  )
}
export default BlockOfMain;