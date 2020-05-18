export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";

const initialState = {
	token: "",
	error: "",
};

export default function setBrowserInfo(state = initialState, action) {
	switch (action.type) {
		case AUTH_SUCCESS: {
			return { ...state, token: action.payload };
		}
		case AUTH_FAILURE: {
			return { ...state, error: action.payload };
		}
		default:
			return state;
	}
}
