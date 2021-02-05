import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list-component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      badGuys: [
        {id: "as", name: 'Frankenstein'},
        {id: "cb", name: 'Dracula'},
        {id: "fg", name: 'Zombie'}, 
      ]
    }
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then( response => response.json()) 
    .then( guys => this.setState( {badGuys: guys})) 
  }

  render() {
    return (
      <div className="wrapper">
        <CardList badGuys={this.state.badGuys} />
      </div>
    )
  }
} 

export default App;
