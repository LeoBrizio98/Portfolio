import React from 'react';
import '../../styles/components.css';


const ButtonClear = (props) => (
	<div className='clear-button' onClick={props.driveClear}>
		{props.children}
	</div>
);

export default ButtonClear