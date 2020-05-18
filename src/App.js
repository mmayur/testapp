import React, { Component } from "react";
import "./Styles/App.scss";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { authorize } from "./Redux/actions/authActions";

import { LoginScreen } from "./Screens/Login/Login";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: "",
			password: "",
			isLoading: false,
		};
	}

	handleUserNameChange = (e) => {
		const u = e.target.value;

		this.setState({ userName: u });
	};
	handlePasswordChange = (e) => {
		const p = e.target.value;

		this.setState({ password: p });
	};
	handleFormSubmit = (e) => {
		const { history } = this.props;
		e.preventDefault();
		this.setState({ isLoading: true });
		this.props.dispatch(
			authorize(this.state.userName, this.state.password, history)
		);

		this.setState({ userName: "" });
		this.setState({ password: "" });

		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 1000);
	};
	render() {
		const isToken = localStorage.hasOwnProperty("token");
		if (isToken) {
			window.location.href = "/user";
		}

		return (
			<div className="main-screen">
				{this.props.error !== "" && (
					<div className="error-message">{this.props.error}</div>
				)}
				{this.state.isLoading ? (
					<div style={{ textAlign: "center" }}>
						<h6>Loading ....</h6>
					</div>
				) : (
					<LoginScreen
						data={this.state}
						handleFormSubmit={this.handleFormSubmit}
						handleUserNameChange={this.handleUserNameChange}
						handlePasswordChange={this.handlePasswordChange}
					></LoginScreen>
				)}
			</div>
		);
	}
}

App.propTypes = {
	token: PropTypes.string,
	error: PropTypes.string,
};

const mapStateToProps = (state) => ({
	token: state.auth.token,
	error: state.auth.error,
});

export default connect(mapStateToProps)(App);
