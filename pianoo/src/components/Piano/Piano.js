import React from 'react';
import classes from './Piano.module.css';
import Octave from './Octave/Octave';


// piano contains at least one octave.
const piano = (props) => {

    return (
		<div className={classes.Piano}>
			<Octave key="1"/>
			<Octave key="2"/>
		</div>
    );
}

export default piano;
