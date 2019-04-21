import React from 'react';
import classes from './Octave.module.css';
import WhiteKey from './Key/WhiteKey';
import BlackKeys from './Key/BlackKeys';

// an octave contains eight white keys and five black keys.
const octave = (props) => {

	const keys = [];

	for (var i = 0; i < 8; i++) {
		keys.push(<WhiteKey key={"wk" + i} />)
	}
	
	return (
		<div className={classes.Octave}>
			{keys}
			<BlackKeys />
		</div>
	);
}

export default octave;
