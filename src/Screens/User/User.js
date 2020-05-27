import React from "react";
import { connect } from "react-redux";
import { getUsersSaga } from "../../Redux/actions/index.js";
import CardList from "./CardList";
import "./styles/style.css";
import { useSelector, useDispatch } from "react-redux";

const User = () => {
	const [showFiltere, setFilter] = React.useState(false);

	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getUsersSaga());
	});

	const filtere = () => {
		//	this.setState({ showFiltere: true });
		setFilter(true);
	};
	const clear = () => {
		// this.setState({ showFiltere: false });
		setFilter(false);
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.clear();
		window.location.reload();
	};

	const users = useSelector((state) => state.usersReducer.users);

	const filtered =
		users &&
		users.filter(function (u) {
			return (
				u.age >= 20 &&
				u.age < 30 &&
				u.firstName.length + u.lastName.length >= 10
			);
		});

	return (
		<div style={{ textAlign: "center" }}>
			<h2>User Data</h2>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<button onClick={handleLogout} className="btn">
					Logout
				</button>
				{!showFiltere && (
					<button onClick={filtere} className="btn">
						Filter
					</button>
				)}
				{showFiltere && (
					<button
						onClick={clear}
						className="btn"
						style={{ border: "1px solid #888" }}
					>
						Clear
					</button>
				)}
			</div>

			{users && !showFiltere && <CardList data={users} />}
			{users && showFiltere && <CardList data={filtered} />}
			{users && users.length <= 0 && (
				<div style={{ textAlign: "center" }}>
					<h6>Loading ....</h6>
				</div>
			)}
		</div>
	);
};

// const mapStateToProps = (state) => ({
// 	users: state.usersReducer,
// });

const mapDispatchToProps = (dispatch) => ({
	getUsersSaga: () => dispatch(getUsersSaga()),
});

export default connect(mapDispatchToProps)(User);
