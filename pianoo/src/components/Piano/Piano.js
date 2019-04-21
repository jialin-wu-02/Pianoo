import React from 'react';
import classes from './Piano.module.css';
import WhiteKey from './Key/WhiteKey';
import BlackKey from './Key/BlackKey';

const piano = (props) => {

	const keys = [];

	for (var i = 0; i < props.numberOfKeys; i++) {
		keys.push(<WhiteKey />)
	}

    return (
		<div className={classes.Piano}>
			{keys}
			<BlackKey />

		</div>
    );
}

export default piano;
