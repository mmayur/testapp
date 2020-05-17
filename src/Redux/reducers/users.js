const initialState = { users: [], error: "" };

export default function setBrowserInfo(state = initialState, action) {
	switch (action.type) {
		case "SET_USERS":
			return {
				...state,
				users: action.users,
			};
		case "SET_ERROR_STATE":
			return {
				...state,
				error: action.err.message,
			};

		default:
			return state;
	}
}
