import React from 'react';
import classes from './WhiteKey.module.css';

const whiteKey = (props) => {

	let lastOrNot = classes.WhiteKey;

	if (props.keyPressed !== undefined && props.keyPressed.includes(props.keyID)) {
		lastOrNot = classes.ActiveWhiteKey;
	}

	if (props.className === "LastWhiteKey") {
		lastOrNot = classes.LastWhiteKey;
	}

	return (
		<div className={lastOrNot}>
			<button>  </button>
		</div>
	);
}

export default whiteKey;
