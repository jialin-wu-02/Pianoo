import React from 'react';
import classes from './WhiteKey.module.css';

const whiteKey = (props) => {

	let lastOrNot = classes.WhiteKey;

	if (props.className === "LastWhiteKey") {
		lastOrNot = classes.LastWhiteKey;
	}

	return (
		<div className={lastOrNot}>
			<button> this is a key. </button>
		</div>
	);
}

export default whiteKey;
