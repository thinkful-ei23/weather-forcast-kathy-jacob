import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import weatherList from './weather-list.json';

ReactDOM.render(<App weather={weatherList} />, document.getElementById('root'));
registerServiceWorker();


// &#176