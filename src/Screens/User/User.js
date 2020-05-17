import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersSaga } from "../../Redux/actions/index.js";
import CardList from "./CardList";

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showFiltere: false,
		};
	}
	componentDidMount() {
		this.props.getUsersSaga();
	}

	filtere = () => {
		this.setState({ showFiltere: true });
	};
	clear = () => {
		this.setState({ showFiltere: false });
	};

	handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.clear();
		window.location.reload();
	};

	render() {
		const { users, error } = this.props.users;
		console.log("users --- screen--- ", users);

		const filtered =
			this.props.users &&
			this.props.users.users.filter(function (hero) {
				return (
					hero.age >= 20 &&
					hero.age < 30 &&
					hero.firstName.length + hero.lastName.length >= 10
				);
			});

		return (
			<div>
				<h2>user screen...</h2>
				<button onClick={this.handleLogout}>Logout</button>
				{!this.state.showFiltere && (
					<button onClick={this.filtere}>Filter</button>
				)}

				{this.state.showFiltere && <button onClick={this.clear}>Clear</button>}
				{users && !this.state.showFiltere && <CardList data={users} />}
				{users && this.state.showFiltere && <CardList data={filtered} />}
				{!users && <div>Loading</div>}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	users: state.usersReducer,
});

const mapDispatchToProps = (dispatch) => ({
	getUsersSaga: () => dispatch(getUsersSaga()),
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
