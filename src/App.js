import React, { Component } from "react";
import "./Styles/App.scss";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { UserNameChange, PasswordChange, AuthRequest } from "./Redux/action";

import { LoginScreen } from "./Screens/Login/Login";

class App extends Component {
	handleUserNameChange = (e) => {
		const u = e.target.value;

		this.props.dispatch(UserNameChange(u));
	};
	handlePasswordChange = (e) => {
		const p = e.target.value;

		this.props.dispatch(PasswordChange(p));
	};
	handleFormSubmit = (e) => {
		const { userName, password } = this.props;
		e.preventDefault();

		this.props.dispatch(AuthRequest({ userName, password }));
		this.props.history.push("/user");
	};
	render() {
		return (
			<div className="main-screen">
				<LoginScreen
					data={this.props}
					handleFormSubmit={this.handleFormSubmit}
					handleUserNameChange={this.handleUserNameChange}
					handlePasswordChange={this.handlePasswordChange}
				></LoginScreen>
			</div>
		);
	}
}

App.propTypes = {
	userName: PropTypes.string,
	password: PropTypes.string,
};

const mapStateToProps = (state) => ({
	userName: state.userName,
	password: state.password,
});

// export default withRouter(connect(mapStateToProps)(App));
export default connect(mapStateToProps)(App);
