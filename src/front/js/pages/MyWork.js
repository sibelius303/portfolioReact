import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import MyCard from "../component/Card.jsx";

export const MyWork = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (

		<div className="appContainerMyWork">
			<div className="cardContainer">
				<MyCard/>
				<MyCard/>
				<MyCard/>
				<MyCard/>
				<MyCard/>
				<MyCard/>
				<MyCard/>
				<MyCard/>
				<MyCard/>
			</div>
			
		</div>
	);
};
