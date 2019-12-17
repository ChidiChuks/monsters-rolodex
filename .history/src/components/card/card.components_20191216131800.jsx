import React from 'react';

import './card.styles.css';

export const Card = props => (
 <div className='card-container'>
  <img alt="monster" src={`https://robohash.org/7?set=set2`} />
  <h1 > { props.monster.name } </h1>
 </div>
)