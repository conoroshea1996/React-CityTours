import React, { Component } from 'react';
import NavBar from './compontents/NavBar/NavBar';
import './App.scss';
import TourList from './compontents/Tour List';



class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <TourList/>
      </div>
    );
  }
}

export default App;
