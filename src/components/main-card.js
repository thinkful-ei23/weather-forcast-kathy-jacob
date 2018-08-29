import React from 'react';
import './main-card.css'


export default function MainCard(props) {
  return (
    <li className={`${props.day.day} main-card`} >
      <h1>{props.day.day}</h1>
      <h1>{props.day.weatherImage}</h1>
      <h1>{props.day.hiTemp}/{props.day.lowTemp}</h1>
    </li>
    )
}