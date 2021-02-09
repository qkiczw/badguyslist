import React, {Component} from 'react';
import './App.css';

import {Header} from './components/header/header-component';
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
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json()) 
    .then( guys => this.setState( {badGuys: guys})) 
  }

  filterBadGuys = e => this.setState( { searchField: e.target.value } )
 
  releaseBadGuy = ( id ) => {
    const released = id;
    this.setState( {badGuys: this.state.badGuys.filter( guy => guy.id !== released)});
  }
  
  
  render() {

    const { badGuys, searchField } = this.state;
    const filteredBadGuys = badGuys.filter( guy => guy.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="wrapper">
        <Header title={'Bad Guys List'} />
        <SearchBox  placeholder={`Enter a guy name`} handleChange={ this.filterBadGuys }/>
        <CardList badGuys={filteredBadGuys} handleRelease={this.releaseBadGuy} />
      </div>
    )
  }
} 

export default App;
