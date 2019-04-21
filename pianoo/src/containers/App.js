import React, { Component } from 'react';
import classes from './App.module.css';
import Piano from '../components/Piano/Piano';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h1> Pianoooo ■  ■  ■  ■  ■ </h1>
        <Piano
        	numberOfKeys="10"
         />
      </div>
    );
  }
}

export default App;
