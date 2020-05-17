import { call, put, takeLatest } from "redux-saga/effects";

import { getUserAuthentication } from "../../../api";

function* workerGetAuthentication({ payload: { login, password, history } }) {
	try {
		const res = yield call(getUserAuthentication, login, password);

		if (!res.data.error_message) {
			localStorage.setItem("token", res.data.token);
			yield put({ type: "AUTH_SUCCESS", payload: res.data.token });
			history.push("/user");
		} else {
			yield put({ type: "AUTH_FAILURE", payload: res.data.error_message });
			history.push("/");
		}
	} catch (error) {
		yield put({ type: "AUTH_FAILURE", payload: "error" });
	}
}

function* watchGetAuthentication() {
	yield takeLatest("AUTH_REQUEST", workerGetAuthentication);
}

export default watchGetAuthentication;
