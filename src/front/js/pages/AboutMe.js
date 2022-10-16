import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const AboutMe = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="appContainer">
			<Container maxWidth="sm">
        	<Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
				<h1>Hello Word</h1>
			</Box>
     		 </Container>
			
			
		</div>
	);
};
