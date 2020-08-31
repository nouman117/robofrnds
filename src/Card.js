import React from 'react';
import robots from './robots';
import 'tachyons';
import CardList from './CardList';

const Card= ({name,email,id}) => {
	return(
		<div class='bg-light-green dib br3 pa3 ma1 grow bw2 shadow-5' >
			<img alt='robots' src={` https://robohash.org/${id}80×50 `} />
			<div>
				<h3>{name}</h3>
				<p>{email}</p>
			</div>
		</div>
	);
}
export default Card;
