import './App.css';
import React, {useState} from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'


function Intro() {
  

  return (
    <div className="App">
        <div className="App-header">
          <div>Happy Anniversary Nani! As your gift I decided to make you this website, I hope you really like it!</div>
          <div>Are you ready?</div>
          <Button component={Link} to="/quiz">
            Yes!
        </Button>
        </div>
    </div>
    
  );
}

export default Intro;
