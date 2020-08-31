import React from 'react';
import App from './App'
//import SearchBox from './SearchBox';

const SearchBox=({searchField, searchChange}) =>{
	return(
		<div class='pa2'>
			<input 
			 class='pa3 ba b--yellow bg-light-yellow'
			 type='search'
			 placeholder="search robots"
			 onChange={searchChange}/>

		</div>	
		);
}
export default SearchBox;