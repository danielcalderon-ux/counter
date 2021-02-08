import React from "react";
import propTypes from "prop-types";
import "./icons.js";

export function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<i classNamea="far fa-clock "></i>
			<div className="numero">{props.digitFour % 10}</div>
			<div className="numero">{props.digitThree % 10}</div>
			<div className="numero">{props.digitTwo % 10}</div>
			<div className="numero">{props.digitOne % 10}</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number
};
