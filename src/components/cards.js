import React from 'react';
import './card.css'
import MainCard from './main-card.js';

export default function Cards(props) {
  
  const allWeather = props.weather.map((day, index) => {
    const classNames = props.hover === day.day ? 'hovered' : ''
    if (day.day === props.main) {
      return <MainCard day={day} key={index} />
    } else {
      return <li 
        className={`${day.day} ${classNames}`} 
        key={index} 
        onClick={(e) => props.onChange(day.day)} 
        onMouseOver={(e) => props.onHover(day.day)} 
        onMouseLeave={(e) => props.onHover('')}>
          <p>{day.day}</p>
          <p>{day.weatherImage}</p>
          <p>{day.hiTemp}/{day.lowTemp}</p>
      </li>
      }
    }) 
  return (
    <ul className="cards">

      {allWeather}
    </ul>
  )
}
