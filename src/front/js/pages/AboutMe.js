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
			<Container maxWidth="md">
        	<Box sx={{ bgcolor: '#808080', height: '100%', marginTop: "50px", marginBottom:"50px"}}>
				
			</Box>
     		 </Container>
			
			
		</div>
	);
};
