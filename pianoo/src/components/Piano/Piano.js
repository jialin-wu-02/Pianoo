import React from 'react';
import classes from './Piano.module.css';
import Octave from './Octave/Octave';
import WhiteKey from './Octave/Key/WhiteKey'


// piano contains at least one octave.
const piano = (props) => {

    return (
		<div className={classes.Piano}>
			<Octave id="1" key="1"/>
			<Octave id="2" key="2"/>
			<WhiteKey className="LastWhiteKey"/>
		</div>
    );
}

export default piano;
