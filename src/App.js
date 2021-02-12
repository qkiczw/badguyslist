import React, {Component} from 'react';
import './App.css';

import {Header} from './components/header/header-component';
import {CardList} from './components/card-list/card-list-component';
import {SearchBox} from './components/search-box/search-box-component';
import {AddGuy} from './components/add-guy/Add-guy-component';

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
  
  addGuyHandler = (e) => {
    e.preventDefault();
    let newGuyname = e.target.name.value;
    let newGuyCity = e.target.city.value;
    let newGuyGang = e.target.gang.value;
    
    const newGuyObj = {
      id: this.state.badGuys.length + 1 ,
      name: newGuyname,
      address: {
        city: newGuyCity
      },
      company: {
        name: newGuyGang
      }
    }
    console.log(newGuyObj)
    this.setState({ badguys: this.state.badGuys.push(newGuyObj)})
  }
  
  
  render() {

    const { badGuys, searchField } = this.state;
    const filteredBadGuys = badGuys.filter( guy => guy.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="wrapper">
        <Header title={'Bad Guys List'} />
        <SearchBox  placeholder={`Enter a guy name`} handleChange={ this.filterBadGuys }/>
        <CardList badGuys={filteredBadGuys} handleRelease={this.releaseBadGuy} />
        <AddGuy addGuy={this.addGuyHandler}/>
      </div>
    )
  }
} 

export default App;
