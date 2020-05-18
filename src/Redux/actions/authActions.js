export const AUTH_REQUEST = "AUTH_REQUEST";

export function authorize(login, password, history) {
	return {
		type: AUTH_REQUEST,
		payload: { login, password, history },
	};
}
