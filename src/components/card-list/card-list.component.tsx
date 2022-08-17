import React from 'react';
import Card from '../card/card.component';
import { Users } from '../../utils/types'
import './card-list.styles.css';

const CardList = ({ monsters }: {
  monsters: Users[]
}) => (
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
