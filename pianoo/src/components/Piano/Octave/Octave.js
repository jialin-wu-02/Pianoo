import React from 'react';
import classes from './Octave.module.css';
import WhiteKey from './Key/WhiteKey';
import BlackKeys from './Key/BlackKeys';

// an octave contains seven white keys and five black keys.
const octave = (props) => {

	const keys = [];

	for (var i = 0; i < 7; i++) {
		keys.push(<WhiteKey key={props.id + "wk" + i} />)
	}
	
	return (
		<div className={classes.Octave}>
			{keys}
			<BlackKeys octaveID={props.id} />
		</div>
	);
}

export default octave;
