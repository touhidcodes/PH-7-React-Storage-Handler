import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { total } from "../../utilities/fakeDb";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("fakeData.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const allTotal = total(products);
	return (
		<div>
			<h1>Welcome to Shopping Cart</h1>
			<p>Total Price: {allTotal}</p>
			<div className='products'>
				{products.map((product) => (
					<Product key={product.id} product={product}></Product>
				))}
			</div>
		</div>
	);
};

export default Products;
