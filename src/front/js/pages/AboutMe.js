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
        	<Box sx={{ bgcolor: 'black', height: '100%', marginTop: "50px", marginBottom:"50px"}}>
				<div className="container">
					<div className="picture">
						div1
					</div>
					<div className="text">
						div 2
					</div>
				</div>
			</Box>
     		 </Container>
			
			
		</div>
	);
};
