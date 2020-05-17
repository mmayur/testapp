import React from "react";

const Card = (data) => {
	console.log("single card====", data);
	return (
		<div>
			{" "}
			{data &&
				data.data.map((u) => <div key={u.accountId}>{u.firstName}</div>)}{" "}
		</div>
	);
	// return <div>card</div>;
};

export default Card;
