import React from 'react';
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';



function Header() {
  return (
    <div className='header'>
     
     <IconButton>
      <PersonIcon fontSize="large" className="header_icon" />
    </IconButton>

    <img 
    className="header_logo"
    src="https://www.pngfind.com/pngs/m/13-130341_tinder-logo.png"
    alt=""
    
    />
    <IconButton>
    <ForumIcon fontSize="large" className="header_icon"/>
    </IconButton>

   </div>
  )
}

export default Header
