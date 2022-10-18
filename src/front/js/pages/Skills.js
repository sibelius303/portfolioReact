import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Skills = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="appContainerSkills">
			<div className="skillsContainer">
				<div className="skillWhiteBanner"></div>
				<div className="skillBlackBanner"></div>
				<div className="skillWhiteBanner"></div>
				<div className="skillBlackBanner"></div>
				<div className="skillWhiteBanner"></div>
				<div className="skillBlackBanner"></div>
			</div>
		</div>
	);
};
