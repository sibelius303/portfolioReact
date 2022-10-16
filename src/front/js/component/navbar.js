import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ComputerIcon from '@mui/icons-material/Computer';

export const Navbar = () => {
	const navigate = useNavigate();
	return (
		<Box sx={{ flexGrow: 1, minWidth:"400px" }}>
      <AppBar sx={{backgroundColor:"black"}} position="static">
        <Toolbar>
            <ComputerIcon sx={{marginRight:"30px"}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Frontend Developer
          </Typography>
		  {/* <Link to={"/"}> */}
			  <Button onClick={()=>navigate("/")} color="inherit">About Me</Button>
		  {/* </Link> */}
		  {/* <Link to={"/skills"}> */}
		  		<Button onClick={()=>navigate("/skills")} color="inherit">Skills</Button>
		  {/* </Link> */}
		  {/* <Link to={"/mywork"}> */}
			  <Button onClick={()=>navigate("/mywork")} color="inherit">My Work</Button>
		  {/* </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
	);
};
