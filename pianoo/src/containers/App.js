import React, { Component } from 'react';
import classes from './App.module.css';
import Piano from '../components/Piano/Piano';
// import Tone from 'tone';
// import StartAudioContext from 'startaudiocontext';

// white keys
import a2 from '../assets/sounds/A2.mp3';
import a3 from '../assets/sounds/A3.mp3';
import b2 from '../assets/sounds/B2.mp3';
import b3 from '../assets/sounds/B3.mp3';
import c2 from '../assets/sounds/C2.mp3';
import c3 from '../assets/sounds/C3.mp3';
import c4 from '../assets/sounds/C4.mp3';
import d2 from '../assets/sounds/D2.mp3';
import d3 from '../assets/sounds/D3.mp3';
import e2 from '../assets/sounds/E2.mp3';
import e3 from '../assets/sounds/E3.mp3';
import f2 from '../assets/sounds/F2.mp3';
import f3 from '../assets/sounds/F3.mp3';
import g2 from '../assets/sounds/G2.mp3';
import g3 from '../assets/sounds/G3.mp3';

// black keys
import as2 from '../assets/sounds/AS2.mp3';
import as3 from '../assets/sounds/AS3.mp3';
import cs2 from '../assets/sounds/CS2.mp3';
import cs3 from '../assets/sounds/CS3.mp3';
import ds2 from '../assets/sounds/DS2.mp3';
import ds3 from '../assets/sounds/DS3.mp3';
import fs2 from '../assets/sounds/FS2.mp3';
import fs3 from '../assets/sounds/FS3.mp3';
import gs2 from '../assets/sounds/GS2.mp3';
import gs3 from '../assets/sounds/GS3.mp3';

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
      buttonIDMap: new Map(),
      keySound: {
        // white keys
        "0wk0": c2,
        "0wk1": d2,
        "0wk2": e2,
        "0wk3": f2,
        "0wk4": g2,
        "0wk5": a2,
        "0wk6": b2,
        "1wk0": c3,
        "1wk1": d3,
        "1wk2": e3,
        "1wk3": f3,
        "1wk4": g3,
        "1wk5": a3,
        "1wk6": b3,
        "1wk7": c4,
        
        // black keys
        "0bk0": cs2,
        "1bk0": cs3,
        "0bk1": ds2,
        "1bk1": ds3,
        "0bk2": fs2,
        "1bk2": fs3,
        "0bk3": gs2,
        "1bk3": gs3,
        "0bk4": as2,
        "1bk4": as3
      }
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

  // 
  mouseDownHandler = (event) => {

  }

  // 1. key pressed (keyboard) add to the list
  // 2. play the matching sound
  keyDownHandler = (event) => {
    console.log(event.key + " Down");
    // StartAudioContext(Tone.context, 'div');
    if (this.state.buttonIDMap.has(event.key) && 
      !(this.state.keyPressed.includes(this.state.buttonIDMap.get(event.key)))) {
      this.playSound(this.state.buttonIDMap.get(event.key));
      this.setState({
        keyPressed: [...this.state.keyPressed, this.state.buttonIDMap.get(event.key)]
      })
    }
  }

  // release the key pressed by deleting it from the list.
  keyUpHandler = (event) => {
    console.log(event.key + " up");
    if (this.state.buttonIDMap.has(event.key) && 
      (this.state.keyPressed.includes(this.state.buttonIDMap.get(event.key)))) {
        this.setState({keyPressed: this.state.keyPressed.filter(id => {
          return id !== this.state.buttonIDMap.get(event.key);
        })});
    }
  }

  // play the mp3 according to the matched ID of the key.
  playSound = (id) => {
    var sound = new Audio(this.state.keySound[id]);
    sound.play();
  }

  try = (event) => {
    // react context?
    console.log("try triggered");
    console.log(event.key + " try!");
  }

  render() {
    return (
      <div tabIndex={-1} 
           onKeyDown={this.keyDownHandler}
           onKeyUp={this.keyUpHandler}
           className={classes.App}>
        <h1> Pianoooo ■  ■  ■  ■  ■ </h1>
        <Piano
          mouseDown={this.try}
          // mouseUp={this.keyUpHandler}
        	numberOfOctave={this.state.numberOfOctave}
          keyPressed={this.state.keyPressed}
         />
      </div>
    );
  }
}

export default App;
