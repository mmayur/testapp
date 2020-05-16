import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import User from "./Screens/User/User";

import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from "./Redux/store";

import { ProtectedRoute } from "./ProtectedRoute";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={App} />
					<ProtectedRoute path="/user" component={User} />
					<Route
						path="*"
						component={() => <h2>Sorry.... Page not found :( </h2>}
					/>
				</Switch>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
