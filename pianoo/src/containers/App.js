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
      ],
      keyPressed: [],
      buttonIDMap: new Map()
    }

    // adding numberOfOctave * 7 white keys + the last key
    for (var i = 0; i < this.state.numberOfOctave * 7 + 1; i++) {
      const id = Math.floor(i / 7) + "wk" + i % 7;
      this.state.whiteKeys.push({
        id: id, 
        buttonPressed: this.state.whiteButtonsOrder[i],
        name: this.state.nameOfWhiteKeys[i % 7] + Math.floor(i / 7)
      })
      this.state.buttonIDMap.set(this.state.whiteButtonsOrder[i], id);
    }

    // adding numberOfOctave * 5 black keys
    for (var j = 0; j < this.state.numberOfOctave * 5; j++) {
      const id = Math.floor(j / 5) + "bk" + j % 5;
      this.state.blackKeys.push({
        id: id, 
        buttonPressed: this.state.blackButtonsOrder[j],
        name: this.state.nameOfBlackKeys[j % 5] + Math.floor(j / 5)
      })
      this.state.buttonIDMap.set(this.state.blackButtonsOrder[j], id);
    }
  }

  keyDownHandler = (event) => {
    console.log(event.key + "Down");
    if (this.state.buttonIDMap.has(event.key) && 
      !(this.state.keyPressed.includes(this.state.buttonIDMap.get(event.key)))) {
      this.setState({
        keyPressed: [...this.state.keyPressed, this.state.buttonIDMap.get(event.key)]
      })
    }
  }


  keyUpHandler = (event) => {
    console.log(event.key + "up");
    if (this.state.buttonIDMap.has(event.key) && 
      (this.state.keyPressed.includes(this.state.buttonIDMap.get(event.key)))) {
        this.setState({keyPressed: this.state.keyPressed.filter(id => {
          return id !== this.state.buttonIDMap.get(event.key);
        })});
    }
  }

  render() {

    // console.log(this.state);

    return (
      <div tabIndex={-1} 
           onKeyDown={this.keyDownHandler}
           onKeyUp={this.keyUpHandler}
           className={classes.App}>
        <h1> Pianoooo ■  ■  ■  ■  ■ </h1>
        <Piano
        	numberOfOctave={this.state.numberOfOctave}
          keyPressed={this.state.keyPressed}
         />
      </div>
    );
  }
}

export default App;
