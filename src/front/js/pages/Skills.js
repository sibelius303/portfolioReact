import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Skills = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Skills</h1>
			
		</div>
	);
};
