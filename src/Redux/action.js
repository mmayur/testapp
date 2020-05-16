export const UserNameChange = (inputValue) => {
	return {
		type: "USERNAME",
		payload: inputValue,
	};
};

export const PasswordChange = (inputValue) => {
	return {
		type: "PASSWORD",
		payload: inputValue,
	};
};

export const AuthRequest = (inputValue) => {
	return {
		type: "AUTH_REQUEST",
		payload: inputValue,
	};
};

export const AuthSuccess = (token) => {
	return {
		type: "AUTH_SUCCESS",
		payload: token,
	};
};
export const AuthFail = (token) => {
	return {
		type: "AUTH_FAIL",
		payload: token,
	};
};
