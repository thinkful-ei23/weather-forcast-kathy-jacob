import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Cards from './components/cards'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainCard: '',
      hovered: ''
    };
  }

  componentWillMount() {
    document.addEventListener('click', this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }
  handleClick = e => { 
    if(!ReactDOM.findDOMNode(this).contains(e.target)) {
    this.setState({ mainCard: '' })
    }
  }
  render() {
    const weather = this.props.weather;
    
    return (
      <div className="App" >
        <h1>Hello Weather App</h1>
        <Cards weather={weather} onChange={clicked => this.setState({ mainCard: clicked, hovered: '' })} onHover={hover => this.setState({hovered: hover})} main={ this.state.mainCard } hover={ this.state.hovered }/>
      </div>
    );
  }
}

