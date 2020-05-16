const initialState = {
	userName: "",
	password: "",
};

const reducer = (state = initialState, action) => {
	console.log(".....data....", state, action);
	switch (action.type) {
		case "USERNAME":
			return {
				...state,
				userName: action.payload,
			};
		case "PASSWORD":
			return {
				...state,
				password: action.payload,
			};
		case "AUTH_REQUEST":
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
