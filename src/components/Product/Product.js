import React from "react";
import "./Product.css";

const Product = (props) => {
	const { product, color, price, name, email, phone, id } = props.product;

	const addToCart = (id) => {
		console.log(id);
	};
	return (
		<div className='product'>
			<h2>Product Name: {product}</h2>
			<h3>Price: {price}$</h3>
			<h3>Color: {color}</h3>
			<h3>Seller Contact Info</h3>
			<p>Name: {name}</p>
			<p>Phone: {phone}</p>
			<p>Email: {email}</p>
			<p>Email: {id}</p>
			<button onClick={() => addToCart(id)}>Purchase.</button>
		</div>
	);
};

export default Product;
