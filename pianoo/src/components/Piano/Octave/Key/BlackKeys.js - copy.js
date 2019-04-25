



import React from 'react';
import classes from './BlackKeys.module.css';


// a list of black keys instead of single black keys
// using nth-child to fix the issue of positioning.
const blackKeys = (props) => {
  
	const keys = [];

	for (var i = 0; i < 5; i++) {
		keys.push(<button style={blackKeyStyle} key={props.octaveID + "bk" + i}> A black key. </button>)
	}


	const blackKeyStyle = {
		position: "absolute",
		height: "65%",
		width: "8%",
		cursor: "pointer"
	}


// 	.a button:nth-child(1) {
//   	left: 10.1%;
// }

// .a button:nth-child(2) {
//   	left: 24.5%;
// }

// .a button:nth-child(3) {
//   	left: 52.9%;
// }

// .a button:nth-child(4) {
//   	left: 67.5%;
// }

// .a button:nth-child(5) {
//   	left: 81.6%;
// }

    return (
      <div className={blackKeyStyle}>
      	{keys}
      </div>
    );
}

export default blackKeys;
