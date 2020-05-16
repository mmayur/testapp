import React from "react";

export const LoginScreen = ({
	data,
	handleFormSubmit,
	handleUserNameChange,
	handlePasswordChange,
}) => {
	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input
					type="text"
					name="userName"
					onChange={handleUserNameChange}
					value={data.userName}
				/>
				<input
					type="password"
					name="password"
					onChange={handlePasswordChange}
					value={data.password}
				/>
				<button type="submit" disabled={!data.userName || !data.password}>
					Login
				</button>
			</form>
		</div>
	);
};
