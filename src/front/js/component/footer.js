import React, { Component } from "react";
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () =>{
    return(
	<footer style={{backgroundColor:"black"}} className="footer mt-auto py-3 text-center">
		<Button href="https://www.linkedin.com/in/c%C3%A9sar-eduardo-vallenilla-torrealba-a09892168/" color="inherit"><LinkedInIcon sx={{ fontSize: 40, color:"white"  }}/></Button>
		<Button href="https://github.com/sibelius303" color="inherit"><GitHubIcon sx={{ fontSize: 40, color:"white" }}/></Button>
	</footer>
);
	}
