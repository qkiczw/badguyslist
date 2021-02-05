import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list-component';

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
        <CardList monsters={this.state.monsters} >
        {this.state.monsters.map( monster => <h2 key={monster.id}>{monster.name}</h2>)}
        </CardList>
      </div>
    )
  }
} 

export default App;
