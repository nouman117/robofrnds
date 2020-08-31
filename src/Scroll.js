import React from 'react';
//import Scroll from './Scroll';
 
const Scroll= (props)=>{
	return(
		<div style={{overflow:'scroll', border:'5px solid grey', height:'800px' }}>
			{props.children}
		</div>
		);

};
export default Scroll;