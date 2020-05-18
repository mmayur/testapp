import React from "react";
import "./style.css";

const Card = ({ data }) => {
	return (
		<ul class="cards">
			{data &&
				data.map((u) => (
					<li className="cards-item" key={u.accountId}>
						<div className="card">
							<div className="card-content">
								<h2 className="card-title">{u.lastName}</h2>
								<p className="card-text">
									{u.firstName} | {u.age}
								</p>
								{/* <p className="card-sub-text">
									<small>Age : {u.age}</small>
								</p> */}
							</div>
						</div>
					</li>
				))}
		</ul>
	);
};

export default Card;
