import React from "react";
import "./styles/style.css";

const Card = ({ data }) => {
	return (
		<ul className="cards">
			{data &&
				data.map((u) => (
					<li className="cards-item" key={u.accountId}>
						<div className="card">
							<div className="card-content">
								<h2 className="card-title">{u.lastName}</h2>
								<p className="card-text">
									{u.firstName} | <small> {u.age}</small>
								</p>
							</div>
						</div>
					</li>
				))}
		</ul>
	);
};

export default Card;
