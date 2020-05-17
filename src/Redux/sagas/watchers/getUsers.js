import { put, takeLatest, call } from "redux-saga/effects";

//import { GET_USERS_SAGA, SET_ERROR_STATE } from '../../constants';
import { setUsers } from "../../actions/index.js";
import { getUserProfile } from "../../../api";

function* workerGetUsersSaga() {
	try {
		alert("hi..saga called");
		const users = yield call(getUserProfile);
		//yield put({ type: "GET_USERS_SAGA", users });
		console.log("users response from api ===>", users);
		yield put(setUsers(users.data));
	} catch (err) {
		console.log("error in fetching profile");
		yield put({ type: "SET_ERROR_STATE", err });
	}
}

export default function* watchGetUsersSaga() {
	yield takeLatest("GET_USERS_SAGA", workerGetUsersSaga);
}
