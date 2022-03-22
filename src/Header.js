import './App.css';
import React from "react";
import { NavLink } from 'react-router-dom';



function Header() {
  


  return (
    <nav>
    <div>
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/encouragement'>Encouragement</NavLink>
            <NavLink to='/quiz'>Hungry</NavLink>
        </div>
    </div>
    </nav>
    
  );
}

export default Header;
