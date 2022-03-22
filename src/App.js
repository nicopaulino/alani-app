import './App.css';
import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from './Quiz';
import Results from './Results';
import Intro from './Intro';
import Header from './Header';
import Encouragement from './Encouragement';


function App() {
  
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);
  const [choicesArray, setChoicesArray] = useState([]);
  const [resultsArray, setResultsArray] = useState([]);


  return (
    <BrowserRouter>
      <header>
        <Header></Header>
      </header>
      <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="/encouragement" element={<Encouragement/>} />
        <Route path="quiz" element={<Quiz
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        answersArray={answersArray}
        choicesArray={choicesArray}
        resultsArray={resultsArray}
        setResultsArray={setResultsArray}
        />} />
        <Route path="results" element={<Results
        resultsArray={resultsArray}
        setResultsArray={setResultsArray}
        />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
