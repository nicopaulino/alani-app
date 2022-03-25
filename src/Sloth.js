import './App.css';
import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
// require('dotenv').config();
import axios from 'axios';


function Sloth() {

  const [images, setImages] = useState([])
  const [index, setIndex] = useState(Math.floor(Math.random() * 19))

  useEffect(() => {
    axios.get(`https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=sloth&image_type=photo`)
      .then(res => {
        let results = res.data.hits;
        results.pop()
        setImages(results)
        console.log("Results", results)
      })
  }, [])

  return (
    <div className="App">
        <div className="App-header">
          {images.length ? 
          <img src={images[Math.floor(Math.random() * 19)].webformatURL} width="375" />
          : null}
        <Button
        onClick={() => {setIndex(Math.floor(Math.random() * 19))}}
        >Reload</Button>
        </div>
    </div>
  );
}

export default Sloth;
