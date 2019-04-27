import React from 'react';
import classes from './BlackKey.module.css';


// a list of black keys instead of single black keys
const blackKey = (props) => {
  

  	let bkclass = "";

	if (props.keyPressed !== undefined && props.keyPressed.includes(props.keyID)) {
		switch(props.keyID[3]) {
			case "0":
				bkclass = classes.firstActive;
				break;
			case "1":
				bkclass = classes.secondActive;
				break;
			case "2":
				bkclass = classes.thirdActive;
				break;
			case "3":
				bkclass = classes.fourthActive;
				break;
			case "4":
				bkclass = classes.fifthActive;
				break;
			default:
				break;
		}
	} else {
		switch(props.keyID[3]) {
			case "0":
				bkclass = classes.first;
				break;
			case "1":
				bkclass = classes.second;
				break;
			case "2":
				bkclass = classes.third;
				break;
			case "3":
				bkclass = classes.fourth;
				break;
			case "4":
				bkclass = classes.fifth;
				break;
			default:
				break;
		}
	}

    return (
      <div className={bkclass}>
      	<button> </button>
      </div>
    );
}

export default blackKey;


