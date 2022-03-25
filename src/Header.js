import './App.css';
import React from "react";
import { NavLink } from 'react-router-dom';



function Header() {
  


  return (
    <nav className="header">
    <div>
        <div>
            <NavLink className="header-text" to='/'>Home</NavLink>
            <NavLink className="header-text" to='/encouragement'>Encouragement</NavLink>
            <NavLink className="header-text" to='/quiz'>Hungry</NavLink>
            <NavLink className="header-text" to='/sloth'>Sloth</NavLink>
        </div>
    </div>
    </nav>
    
  );
}

export default Header;
