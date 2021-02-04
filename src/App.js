import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {id: "as", name: 'Frankenstein'},
        {id: "cb", name: 'Dracula'},
        {id: "fg", name: 'Zombie'}, 
      ]
    }
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then( response => response.json())
    .then( users => this.setState( {monsters: users})) 
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.monsters.map( monster => <h2 key={monster.id}>{monster.name}</h2>)}
      </div>
    )
  }
} 

export default App;
