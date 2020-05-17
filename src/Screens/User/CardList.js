import React from "react";
import Card from "./Card";

const CardList = (data) => {
	return (
		<div>
			<Card data={data.data} />
		</div>
	);
};

export default CardList;
