import './App.css';
import React, {useState} from "react";
import Button from '@mui/material/Button';


function Results({ resultsArray, setResultsArray }) {
  

  return (
    <div className="App">
        <div className="App-header">
            <div>
            {resultsArray.map(result => {
                return <div>{result}</div>
            })}
            </div>
            <Button
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
        </div>
    </div>
    
  );
}

export default Results;
