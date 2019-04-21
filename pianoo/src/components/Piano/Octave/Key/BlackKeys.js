import React from 'react';
import classes from './BlackKeys.module.css';


// a list of black keys instead of single black keys
// using nth-child to fix the issue of positioning.
const blackKeys = (props) => {
  
	const keys = [];

	for (var i = 0; i < 5; i++) {
		keys.push(<button key={"bk" + i}> A black key. </button>)
	}

    return (
      <div className={classes.BlackKeys}>
      	{keys}
      </div>
    );
}

export default blackKeys;
