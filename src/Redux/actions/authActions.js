export const AUTH_FAILURE = "AUTH_FAILURE";
export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";

// Added for Auth
export function setAuthRequestSaga(basic_token) {
	return {
		type: AUTH_REQUEST,
		basic_token,
	};
}

// Added for Auth
export function setAuthSuccessSaga(access_token) {
	return {
		type: AUTH_SUCCESS,
		access_token,
	};
}

// Added for Auth
export function setAuthFailureSaga(access_token) {
	return {
		type: AUTH_FAILURE,
		access_token,
	};
}

export function authorize(login, password, history) {
	return {
		type: AUTH_REQUEST,
		payload: { login, password, history },
	};
}
