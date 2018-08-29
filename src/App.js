import React from 'react';
import './App.css';
import Card from './components/card'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainCard: ''
    };
  }

  render() {
    const weather = this.props.weather;
    
    return (
      <div className="App">
        <h1>Hello Weather App</h1>
        <Card weather={weather} onChange={clicked => this.setState({ mainCard: clicked })} main={ this.state.mainCard } />
      </div>
    );
  }
}

