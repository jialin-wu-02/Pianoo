import React from 'react';
import classes from './Octave.module.css';
import WhiteKey from './Key/WhiteKey';
import BlackKey from './Key/BlackKey';

// an octave contains seven white keys and five black keys.
const octave = (props) => {

	const keys = [];

	for (var i = 0; i < 7; i++) {
		keys.push(
			<WhiteKey 
			keyPressed={props.keyPressed} 
			keyID={props.id + "wk" + i} 
			key={props.id + "wk" + i} />
		)
	}

	for (var j = 0; j < 5; j++) {
		keys.push(
			<BlackKey 
			keyPressed={props.keyPressed} 
			keyID={props.id + "bk" + j} 
			key={props.id + "bk" + j} />
		)
	}
	
	return (
		<div className={classes.Octave}>
			{keys}
		</div>
	);
}

export default octave;
