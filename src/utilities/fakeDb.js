// Use local storage to manage cart data
const addToDb = (id) => {
	let shoppingCart;
	// get the shopping Cart
	const storedCart = localStorage.getItem("_cart");
	if (storedCart) {
		shoppingCart = JSON.parse(storedCart);
	} else {
		shoppingCart = {};
	}
	// add quantity
	const quantity = shoppingCart[id];

	if (quantity) {
		const newQuantity = quantity + 1;
		shoppingCart[id] = newQuantity;
	} else {
		shoppingCart[id] = 1;
	}
	localStorage.setItem("_cart", JSON.stringify(shoppingCart));
};

// Remove Local storage
const removeFromDb = (id) => {
	// get the shopping Cart
	const storedCart = localStorage.getItem("_cart");
	if (storedCart) {
		const shoppingCart = JSON.parse(storedCart);
		if (id in shoppingCart) {
			delete shoppingCart[id];
			localStorage.setItem("_cart", JSON.stringify(shoppingCart));
		}
	}
};

const getTotalPrice = (products) => {
	const reducer = (previous, current) => previous + current.price;
	const total = products.reduce(reducer, 0);
	return total;
};
export { addToDb, removeFromDb, getTotalPrice as total};
