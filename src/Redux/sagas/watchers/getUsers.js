import { put, takeLatest, call } from "redux-saga/effects";
import { setUsers } from "../../actions/index.js";
import { getUserProfile } from "../../../api";

function* workerGetUsersSaga() {
	try {
		const users = yield call(getUserProfile);

		yield put(setUsers(users.data));
	} catch (err) {
		yield put({ type: "SET_ERROR_STATE", err });
	}
}

export default function* watchGetUsersSaga() {
	yield takeLatest("GET_USERS_SAGA", workerGetUsersSaga);
}
