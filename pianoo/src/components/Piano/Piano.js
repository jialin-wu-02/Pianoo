import React from 'react';
import classes from './Piano.module.css';
import Octave from './Octave/Octave';
import WhiteKey from './Octave/Key/WhiteKey'


// piano contains at least one octave.
const piano = (props) => {

    return (
    	// props.keyPressed, i.e. "0wk3"
		<div className={classes.Piano}>
			<Octave 
				keyPressed={props.keyPressed} 
				mouseDown={props.mouseDown}
				mouseUp={props.mouseUp}
				id="0" key="1"/>
			<Octave 
				keyPressed={props.keyPressed} 
				mouseDown={props.mouseDown}
				mouseUp={props.mouseUp}
				id="1" key="2"/>
			<WhiteKey className="LastWhiteKey"/>
		</div>
    );
}

export default piano;
