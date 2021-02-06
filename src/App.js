import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/card-list/card-list-component';
import {SearchBox} from './components/search-box/search-box-component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      badGuys: [],
      searchField: ''
    }
  };
  
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then( response => response.json()) 
    .then( guys => this.setState( {badGuys: guys})) 
  }

  
  render() {

    const { badGuys, searchField } = this.state;
    const filterBadGuys = badGuys.filter( guy => guy.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="wrapper">
        <SearchBox  placeholder={`Enter a guy name`} handleChange={ e => this.setState({ searchField: e.target.value }) }/>
        <CardList badGuys={filterBadGuys} />
      </div>
    )
  }
} 

export default App;
