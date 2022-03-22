import './App.css';
import React, {useState} from "react";
import Quiz from './Quiz';
import Results from './Results';

function App() {
  
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answersArray, setAnswersArray] = useState([]);
  const [choicesArray, setChoicesArray] = useState([]);
  const [resultsArray, setResultsArray] = useState([]);
  const [flag, setFlag] = useState(true)


  return (
    resultsArray.length === 0 ? 
    <Quiz
    questionNumber={questionNumber}
    setQuestionNumber={setQuestionNumber}
    answersArray={answersArray}
    choicesArray={choicesArray}
    resultsArray={resultsArray}
    setResultsArray={setResultsArray}
    setFlag={setFlag}
    />
    :
    <Results
    resultsArray={resultsArray}
    setResultsArray={setResultsArray}
    />
    
  );
}

export default App;
