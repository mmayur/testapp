import React, { useState } from "react";
import Card from "./Card";

const CardList = (data) => {
	const [count, setCount] = useState(data.data);
	// setCount(() => ({ count: data.data }));
	console.log("data===> ", data.data);
	console.log("initialData===> ", count);

	const filtered = data.data.filter(function (hero) {
		return (
			hero.age >= 20 &&
			hero.age < 30 &&
			hero.firstName.length + hero.lastName.length >= 10
		);
	});

	console.log("filtered data ==> ", filtered);

	let cardData = data.data;

	const filterResult = () => {
		cardData = filtered;
		console.log("card data on filter ", cardData);
	};
	return (
		<div>
			<Card data={cardData} />
		</div>
	);
};

export default CardList;
