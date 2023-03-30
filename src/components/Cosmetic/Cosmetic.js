import React from "react";

const Cosmetic = (props) => {
	const { name, price } = props.cosmetic;
	return (
		<div>
			<h3>Name of Cosmetics: {name}</h3>
			<p>Cosmetic Price: {price}</p>
		</div>
	);
};

export default Cosmetic;
