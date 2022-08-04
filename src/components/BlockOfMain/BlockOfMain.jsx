import React from 'react';
import './BlockOfMain.css';

function BlockOfMain({classSection, title, ...props}) {

  return (
    <section className={`blockOfMain ${classSection}`} >
			<h2 className='blockOfMain__title'>{title}</h2>
			{props.children}
    </section>
  )
}
export default BlockOfMain;