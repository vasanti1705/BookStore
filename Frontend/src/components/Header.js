import React, { useState } from "react";
import { AppBar,Tabs,Tab,Toolbar, Typography,  } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import {NavLink} from 'react-router-dom';
export default function Header() {
    const [value, setvalue] = useState();
  return (
    <div>
      <AppBar sx={{backgroundColor:"#232F3D"}} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{color:"white"}}>
          <Typography>
            <LibraryBooksIcon />
          </Typography>
          </NavLink>
          <Tabs
             sx={{ml:'auto'}} 
          textColor="inherit" indicatorColor="secondary" value={value} onChange={(e,val)=>setvalue(val)}>
            <Tab LinkComponent={NavLink} to="/add" label="Add product"/>
            <Tab LinkComponent={NavLink} to="/Books" label="Books"/>
            <Tab LinkComponent={NavLink} to="/about" label="About Us"/>
          </Tabs>
          </Toolbar>
      </AppBar>
    </div>
  );
}
