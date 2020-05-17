import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersSaga } from "../../Redux/actions/index.js";
// function handleLogout() {
//   localStorage.removeItem('access_token');
//   localStorage.clear();
//   window.location.reload();
// }

// const User = () => {
// 	return (
// 		<div>
// 			<h2>user screen...</h2>
// 		</div>
// 	);
// };
class User extends Component {
	componentDidMount() {
		this.props.getUsersSaga();
	}
	render() {
		const { users, error } = this.props.users;
		return (
			<div>
				<h2>user screen...</h2>
				<button
					onClick={() => {
						this.props.getUsersSaga();
					}}
				>
					click
				</button>
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
