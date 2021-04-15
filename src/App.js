import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

// Components
import {Header} from './components/header/header-component';
// import {CardList} from './components/card-list/card-list-component';
// import {SearchBox} from './components/search-box/search-box-component';
// import {AddGuy} from './components/add-guy/Add-guy-component';
import { HomePage } from './pages/home-page/Home-page.page';
import { BadguyProfile } from './pages/badguy-profile-page/Badguy-profile.page';

class App extends Component {
  constructor() {
    super();

    this.state = {
      badGuys: [],
      searchField: '',
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

    const newGuyObj = {
      id: this.state.badGuys.length + 1 ,
      name: e.target.name.value,
      address: {
        city: e.target.city.value
      },
      company: {
        name: e.target.gang.value
      }
    }
    this.setState({ badguys: this.state.badGuys.push(newGuyObj)});

    e.target.name.value = "";
    e.target.city.value = "";
    e.target.gang.value = "";
 
  }
  
  
  render() {

    const { badGuys, searchField } = this.state;
    const filteredBadGuys = badGuys.filter( guy => guy.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <BrowserRouter>
        <div className="wrapper">
            <Header title={'Bad Guys List'} />
            {/* <SearchBox  placeholder={`Enter a guy name`} handleChange={ this.filterBadGuys }/>
            <CardList badGuys={filteredBadGuys} handleRelease={this.releaseBadGuy} />
            <AddGuy addGuy={this.addGuyHandler}/> */}
          <Switch>
            {/* <Route path="/" exact component={HomePage} /> */}
            <Route path="/" exact render={(props)=> (<HomePage {...props} badGuys={this.state.badGuys} handleRelease={this.releaseBadGuy}/>)} />
            <Route path="/badguy/:id" render={(props)=> (<BadguyProfile {...props}  />)} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
} 

export default App;
