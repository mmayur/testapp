import { combineReducers } from "redux";

import authReducer from "./auth";
import usersReducer from "./users";

export default combineReducers({
	usersReducer,

	auth: authReducer,
});
