import React from 'react';
import './deck.css'
import Card from './card.js';

export default classfunction Deck(props) {
  const weather = props.weather;
  return (
    <div>
      <Card weather={ weather }/> 
    </div>
  )
}