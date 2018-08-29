import React from 'react';
import './card.css'

export default function Card(props) {
  
 

  const allWeather = props.weather.map((day, index) => {
    if (day.day === props.main) {
      return <li className={day.day} key={index} onClick={(e) => props.onChange(e.currentTarget.className)}>
      <h1>{day.day}</h1>
      <h1>{day.weatherImage}</h1>
      <h1>{day.hiTemp}/{day.lowTemp}</h1>
    </li>
    } else {
    return <li className={day.day} key={index} onClick={(e) => props.onChange(e.currentTarget.className)}>
      <p>{day.day}</p>
      <p>{day.weatherImage}</p>
      <p>{day.hiTemp}/{day.lowTemp}</p>
    </li>
    }
  }) 
  return (
    <ul className="card">
      {allWeather}
    </ul>
  )
}
