import axios from "axios";
import headers from "./header";

axios.defaults.baseURL = "https://apertum-interview.herokuapp.com/api";

export function getUserAuthentication(login, password) {
	const data = {
		accountId: login,
		pswd: password,
	};

	return axios.post("/user/login", data, { headers });
}

export const getUserProfile = (userId) => {
	return axios.get("/users", {
		headers,
	});
};
