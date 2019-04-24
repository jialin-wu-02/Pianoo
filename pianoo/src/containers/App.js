import React, { Component } from 'react';
import classes from './App.module.css';
import Piano from '../components/Piano/Piano';

class App extends Component {

  constructor(props) {
    
    super(props);
    console.log("[App.js] constructor");
    
    this.state = {
      numberOfOctave: 2,
      whiteKeys: [
        // {id:"", buttonPressed:"", name:""}
        // filled by the for loop.
      ],
      blackKeys: [
        // {id:"", buttonPressed:"", name:""}
        // filled by the for loop.
      ],
      whiteButtonsOrder: [
        // "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"
        "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Enter"
      ],
      blackButtonsOrder: [
        "1", "2", "4", "5", "6", "8", "9", "-", "=", "Backspace" 
      ], 
      nameOfWhiteKeys: [
        "C", "D", "E", "F", "G", "A", "B" 
      ], 
      nameOfBlackKeys: [
        "C#", "D#", "F#", "G#", "A#"
      ]
    }

    // adding numberOfOctave * 7 white keys + the last key
    for (var i = 0; i < this.state.numberOfOctave * 7 + 1; i++) {
      const id = Math.floor(i / 7) + "wk" + i % 7;
      this.state.whiteKeys.push({
        id: id, 
        buttonPressed: this.state.whiteButtonsOrder[i],
        name: this.state.nameOfWhiteKeys[i % 7] + Math.floor(i / 7)
      })
    }

    // adding numberOfOctave * 5 black keys
    for (var j = 0; j < this.state.numberOfOctave * 5; j++) {
      const id = Math.floor(j / 5) + "bk" + j % 5;
      this.state.blackKeys.push({
        id: id, 
        buttonPressed: this.state.blackButtonsOrder[j],
        name: this.state.nameOfBlackKeys[j % 5] + Math.floor(j / 5)
      })
    }

    console.log(this.state.blackKeys);

  }

  keyDownHandler = (event) => {
    console.log(event.key);
    if (this.state.whiteButtonsOrder.includes(event.key)) {
      for (var m = 0; m < this.state.numberOfOctave * 7 + 1; m++) {

        if (this.state.whiteKeys[m].buttonPressed === event.key) {
          console.log(this.state.whiteKeys[m].id);
        }
      }
    } else if (this.state.blackButtonsOrder.includes(event.key)) {
      for (var n = 0; n < this.state.numberOfOctave * 5; n++) {
        if (this.state.blackKeys[n].buttonPressed === event.key) {
          console.log(this.state.blackKeys[n].id);
        }
      }
    }
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
