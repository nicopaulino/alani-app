import './App.css';
import React, {useState} from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'


function Intro() {
  const [flag, setFlag] = useState(false);

  return (
    <div className="App">
        <div className="App-header">
          <div>Happy Anniversary Nani! As your gift I decided to make you this website, I hope you really like it!</div>
          <div>Are you ready?</div>
        <div>
          {flag ? 
          <div>
            <Button component={Link} to="/encouragement">Need Encouragement?</Button>
            <Button component={Link} to="/quiz">Hungry?</Button>
            <Button component={Link} to="/sloth">Sloths?</Button>
          </div>
          : 
          <Button onClick={() => setFlag(true)}>
            Yes!
          </Button>
          }
        </div>
        </div>
    </div>
    
  );
}

export default Intro;
