import React from "react";

const User = (props) => {
	return (
		<div>
			<h1>User List</h1>
			<div>
				<button
					onClick={() => {
						props.history.push("/");
					}}
				>
					Logout
				</button>
			</div>
		</div>
	);
};
export default User;
