export const GET_AUTH_SAGA = "GET_AUTH_SAGA";
export const SET_AUTH = "SET_AUTH";

export const GET_USERS_SAGA = "GET_USERS_SAGA";
export const SET_USERS = "SET_USERS";

export function setUsers(users) {
	return {
		type: SET_USERS,
		users,
	};
}
// Sagas
export function getUsersSaga() {
	return {
		type: GET_USERS_SAGA,
	};
}

export function setAuth(auth) {
	return {
		type: SET_AUTH,
		auth,
	};
}

// Sagas
export function getAuthSaga() {
	return {
		type: GET_AUTH_SAGA,
	};
}
