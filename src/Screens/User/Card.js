import React from "react";

const Card = (data) => {
	return (
		<div>
			{data && data.data.map((u) => <div key={u.accountId}>{u.firstName}</div>)}{" "}
		</div>
	);
};

export default Card;
