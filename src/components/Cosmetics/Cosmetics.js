import React from "react";
import { add } from "../../utilities/calculate";
// import add from "../../utilities/calculate";

const Cosmetics = () => {
	const first = 23;
	const last = 34;
	const total = add(first, last);
	return (
		<div>
			<h1>Welcome to my Cosmetics Home</h1>
			<p>{total}</p>
		</div>
	);
};

export default Cosmetics;
