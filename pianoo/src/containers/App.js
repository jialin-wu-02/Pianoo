import React, { Component } from 'react';
import classes from './App.module.css';
import Piano from '../components/Piano/Piano';

class App extends Component {

  constructor(props) {
    
    super(props);
    console.log("[App.js] constructor");
    
    this.state = {
      keys: [
        // {id:"", buttonPressed:"", name:""}
      ],
      whiteButtonsOrder: [
        // "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"
        // backslash should not work -> "\" cannot be escaped?
        "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "Backslash", "Enter"
      ],
      blackButtonsOrder: [
        "1", "2", "4", "5", "6", "8", "9", "-", "=", "Backspace" 
      ], 
      numberOfOctave: 2,
      nameOfKeys: [
        "C", "D", "E", "F", "G", "A", "B" 
      ]
    }

    // adding numberOfOctave * 7 white keys
    for (var i = 0; i < this.state.numberOfOctave * 7 + 1; i++) {
      const id = Math.floor(i / 7) + "wk" + i % 7;
      this.state.keys.push({
        id: id, 
        buttonPressed: this.state.whiteButtonsOrder[i],
        name: this.state.nameOfKeys[i % 7] + Math.floor(i / 7)
      })
    }

    console.log(this.state.keys);

    // adding numberOfOctave * 5 black keys



  }

  keyDownHandler = (event) => {
    console.log(event.key);
  }

  render() {
    return (
      <div tabIndex={-1} 
           onKeyDown={this.keyDownHandler}
           className={classes.App}>

        <h1>  Pianoooo ■  ■  ■  ■  ■ </h1>
        <Piano
        	numberOfOctave={this.state.numberOfOctave}
         />
      </div>
    );
  }
}

export default App;
