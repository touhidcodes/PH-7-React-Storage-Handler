import React from "react";

const Cosmetics = () => {
	const cosmetics = [
		{ id: 1, name: "alta", price: 120 },
		{ id: 2, name: "balish", price: 1020 },
		{ id: 3, name: "malish", price: 1200 },
		{ id: 4, name: "Palish", price: 60 },
		{ id: 5, name: "nalish", price: 0 },
		{ id: 6, name: "kalish", price: 20 },
	];
	return (
		<div>
			<h1>Welcome to my Cosmetics Home</h1>
			{cosmetics.map((cosmetic) => (
				<Cosmetics cosmetic={cosmetic} key={cosmetic.id}></Cosmetics>
			))}
		</div>
	);
};

export default Cosmetics;
