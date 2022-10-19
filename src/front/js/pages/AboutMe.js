import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

export const AboutMe = () => {
	const { store, actions } = useContext(Context);
	const navigate= useNavigate();

	return (
		<div className="appContainer">
			<Container maxWidth="md">
        	<Box sx={{ bgcolor: 'black', height: '100%', marginTop: "50px", marginBottom:"50px"}}>
				<div className="container">
					<div className="picture">
						<div className="foto"></div>
					</div>
					<div className="text">
						<h1 className="nombre">Cesar Eduardo Vallenilla Torrealba</h1>
						<h1 data-text="Frontend" className="title">Frontend Developer</h1>
						<p>Soy un entusiasta de las tecnologías aplicadas al desarrollo web, confío en la colaboración entre equipos para lograr un mejor ecosistema de desarrollo y productos tecnologicos de alta calidad</p>
						<p>Siempre con la vision de ofrecer soluciones agiles y rapidas a las nececidades del cliente</p>
						<button className="botonSkills" onClick={()=>navigate("/skills")} color="inherit">Skills</button>
					</div>
				</div>
			</Box>
     		 </Container>
			
			
		</div>
	);
};
