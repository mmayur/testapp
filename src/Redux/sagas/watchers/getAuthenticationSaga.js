import { call, put, takeLatest } from "redux-saga/effects";

import { getUserAuthentication } from "../../../api";

function* workerGetAuthentication({ payload: { login, password, history } }) {
	yield put({ type: "AUTH_FAILURE", payload: null }); // payload set to null so that after every wrong login,state is reinitialize.
	console.log("saga ===>", login);
	try {
		const res = yield call(getUserAuthentication, login, password);
		const token = localStorage.setItem("token", res.data.token);
		if (!res.data.error_message) {
			yield put({ type: "AUTH_SUCCESS", payload: res.data.token });
			history.push("/user");
		}
		console.log("from new api : **** ==>", res);
	} catch (error) {
		console.log(error);
		yield put({ type: "AUTH_FAILURE", payload: "error" });
		history.push("/");
	}
}

function* watchGetAuthentication() {
	yield takeLatest("AUTH_REQUEST", workerGetAuthentication);
}

export default watchGetAuthentication;
