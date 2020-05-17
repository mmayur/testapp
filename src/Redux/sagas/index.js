import { all, fork } from "redux-saga/effects";

import watchGetUsersSaga from "./watchers/getUsers";

import watchGetAuthentication from "./watchers/getAuthenticationSaga";

function* root() {
	yield all([fork(watchGetUsersSaga), fork(watchGetAuthentication)]);
}

export default root;
