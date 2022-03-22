import './App.css';
import React, {useState} from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



function Results({ resultsArray, setResultsArray }) {
  
  const navigate = useNavigate();
  

  return (
    <div className="App">
        <div className="App-header">
            <div>
            {resultsArray.map(result => {
                return <div>{result}</div>
            })}
            </div>
            <Button
              onClick={() => {
                navigate('/');
                window.location.reload();
                }
              }
            >
              Try Again
            </Button>
        </div>
    </div>
    
  );
}

export default Results;
