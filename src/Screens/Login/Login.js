import React from "react";

export const LoginScreen = ({
	data,
	handleFormSubmit,
	handleUserNameChange,
	handlePasswordChange,
}) => {
	return (
		<div className="main-card">
			<form onSubmit={handleFormSubmit}>
				<input
					type="text"
					name="userName"
					onChange={handleUserNameChange}
					value={data.userName}
					placeholder="User name"
					autoFocus="true"
				/>
				<input
					type="password"
					name="password"
					onChange={handlePasswordChange}
					value={data.password}
					placeholder="Password"
					autoComplete="on"
				/>
				<button
					type="submit"
					disabled={!data.userName || !data.password}
					className="btn"
					style={{ margin: "auto" }}
				>
					Login
				</button>
				<small>
					<pre>Credentials : admin , 123456</pre>
				</small>
				{/* <small style={{ color: "#888" }}>
					<pre>mayurmorey@gmail.com</pre>
				</small> */}
			</form>
		</div>
	);
};
