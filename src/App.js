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

  render() {
    return (
      <div className="wrapper">
        {this.state.monsters.map( monster => <h2 key={monster.id}>{monster.name}</h2>)}
      </div>
    )
  }
} 

export default App;
