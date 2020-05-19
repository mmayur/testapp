export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";
export const AUTH_REQUEST = "AUTH_REQUEST";

const initialState = {
	token: "",
	error: "",
	isLoading: false,
};

export default function setBrowserInfo(state = initialState, action) {
	switch (action.type) {
		case AUTH_REQUEST: {
			return { ...state, isLoading: true };
		}
		case AUTH_SUCCESS: {
			return { ...state, token: action.payload, isLoading: false };
		}
		case AUTH_FAILURE: {
			return { ...state, error: action.payload, isLoading: false };
		}
		default:
			return state;
	}
}
