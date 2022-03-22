import './App.css';
import React, {useState} from "react";
import Button from '@mui/material/Button';

function Quiz({  questionNumber, setQuestionNumber, answersArray, choicesArray, resultsArray, setResultsArray, setFlag  }) {
  

  const questionContainer = [
    {
      question:
      "What meal is this?",
      options: ["Breakfast", "Lunch", "Dinner", "Dessert"],
      answer: [],
      questionId: 0
    },
    {
      question:
      "Is it late?",
      options: ["Yes", "No"],
      answer: [],
      questionId: 1
    },
    {
      question:
      "Is Nico with you?",
      options: ["Yes", "No"],
      answer: [],
      questionId: 2
    },
    {
      question:
      "Are you balling?",
      options: ["Yes", "No"],
      answer: [],
      questionId: 3
    },
    {
      question:
      "Do you have a lot of time?",
      options: ["Yes", "No"],
      answer: [],
      questionId: 4
    },
    {
      question:
      "Pick one",
      options: ["Veterans", "Airline", "Clearview"],
      answer: [],
      questionId: 5
    },
    {
      question:
      "Rate your happiness",
      options: ["1 - 3", "3 - 6", "6 - 10"],
      answer: [],
      questionId: 6
    }
    
    ];

  const restaurantsContainer = [
    {
      0: {
        "Breakfast": ["Chick-Fil-A", "McDonalds", "Dunkin Donuts"],
        "Lunch": ["Chick-Fil-A", "Canes", "Popeyes", "Five Guys", "Shake Shack", "New Orleans Hamburger and Seafood", "We Dats", "Wing Stop", "McDonalds", "Sonic", "Chipotle", "Izzos", "Byblos", "Mandarin Express", "Pho Nola", "Pho Orchid Express", "Taco Tico"],
        "Dinner": ["Chick-Fil-A", "Canes", "Popeyes", "Five Guys", "Shake Shack", "New Orleans Hamburger and Seafood", "We Dats", "Hooters", "Wing Stop", "McDonalds", "Sonic", "Chipotle", "Izzos", "Byblos", "PF Changs", "Mandarin Express", "Pho Nola", "Pho Orchid Express", "Taco Tico"],
        "Dessert": ["Sonic", "Tutti Frutti", "Cold Stone Creamery"]
      },
      1: {
        "Yes": ["Canes", "We Dats", "Hooters", "Wing Stop", "McDonalds", "Sonic", "Dunkin Donuts", "Chipotle", "Izzos"],
        "No": ["Chick-Fil-A", "Canes", "Popeyes", "Five Guys", "Shake Shack", "New Orleans Hamburger and Seafood", "We Dats", "Hooters", "Wing Stop", "McDonalds", "Sonic", "Dunkin Donuts", "Chipotle", "Izzos", "Byblos", "PF Changs", "Mandarin Express", "Pho Nola", "Pho Orchid Express", "Taco Tico", "Tutti Frutti", "Cold Stone Creamery"]
      },
      2: {
        "Yes": ["Chick-Fil-A", "Canes", "Popeyes", "Five Guys", "Shake Shack", "New Orleans Hamburger and Seafood", "We Dats", "Hooters", "Wing Stop", "McDonalds", "Sonic", "Dunkin Donuts", "Chipotle", "Izzos", "Byblos", "PF Changs", "Mandarin Express", "Pho Nola", "Pho Orchid Express", "Tutti Frutti", "Cold Stone Creamery"],
        "No": ["Chick-Fil-A", "Canes", "Popeyes", "We Dats", "McDonalds", "Dunkin Donuts", "Chipotle", "Byblos", "PF Changs", "Mandarin Express", "Pho Nola", "Pho Orchid Express", "Taco Tico", "Tutti Frutti", "Cold Stone Creamery"]
      },
      3: {
        "Yes": ["Five Guys", "Shake Shack", "New Orleans Hamburger and Seafood", "We Dats", "Hooters", "Wing Stop", "Chipotle", "Izzos", "Byblos", "PF Changs", "Pho Nola", "Pho Orchid Express"],
        "No": ["Chick-Fil-A", "Canes", "Popeyes", "McDonalds", "Sonic", "Dunkin Donuts", "Mandarin Express", "Taco Tico", "Tutti Frutti", "Cold Stone Creamery"]
      },
      4: {
        "Yes": ["Popeyes", "Five Guys", "Shake Shack", "New Orleans Hamburger and Seafood", "We Dats", "Hooters", "Wing Stop", "Chipotle", "Izzos", "Byblos", "PF Changs", "Mandarin Express", "Pho Nola", "Tutti Frutti"],
        "No": ["Chick-Fil-A", "Canes", "Popeyes", "McDonalds", "Sonic", "Dunkin Donuts", "Chipotle", "Pho Orchid Express", "Taco Tico", "Tutti Frutti", "Cold Stone Creamery"]
      },
      5: {
        "Veterans": ["Chick-Fil-A", "Canes", "Popeyes", "Five Guys", "Shake Shack", "New Orleans Hamburger and Seafood", "We Dats", "Hooters", "Wing Stop", "McDonalds", "Sonic", "Dunkin Donuts", "Chipotle", "Izzos", "Byblos", "PF Changs", "Mandarin Express", "Pho Nola", "Taco Tico", "Tutti Frutti"],
        "Airline": ["Canes", "Popeyes","We Dats","McDonalds", "Sonic", "Pho Orchid Express"],
        "Clearview": ["Chick-Fil-A", "Canes", "Five Guys", "New Orleans Hamburger and Seafood", "We Dats", "McDonalds", "Chipotle", "Cold Stone Creamery"]
      },
      6: {
        "1 - 3": ["Popeyes", "McDonalds", "Dunkin Donuts", "Chipotle", "Byblos", "PF Changs", "Mandarin Express", "Pho Nola", "Pho Orchid Express"],
        "3 - 6": ["Canes", "Popeyes", "Five Guys", "New Orleans Hamburger and Seafood", "We Dats", "Hooters", "McDonalds", "Sonic", "Dunkin Donuts", "Chipotle", "Izzos", "Byblos", "PF Changs", "Mandarin Express", "Pho Nola", "Pho Orchid Express", "Tutti Frutti", "Cold Stone Creamery"],
        "6 - 10": ["Chick-Fil-A", "Popeyes", "Shake Shack", "New Orleans Hamburger and Seafood", "We Dats", "Hooters", "Wing Stop", "McDonalds", "Dunkin Donuts", "Chipotle", "Byblos", "PF Changs", "Mandarin Express", "Pho Nola", "Pho Orchid Express", "Taco Tico", "Tutti Frutti", "Cold Stone Creamery"]
      }

    }
  ]

  const resultsCalculator = (restaurants) => {
    restaurants = restaurants.flat()
    let result = [];

    let count = 0;
    while (count < 3) {
      result.push(restaurants.sort((a,b) =>
            restaurants.filter(v => v===a).length
          - restaurants.filter(v => v===b).length
        ).pop()
      )
      restaurants = restaurants.filter(e => e !== result[count]);
      count++
    }
    console.log("Results: ", result)
    setResultsArray(result);
    }
    
  const answerSelection = (number, selection) => {
    if (number < 6 && answersArray.length <= 7) {
      console.log(restaurantsContainer[0][number][selection])
      choicesArray.push(restaurantsContainer[0][number][selection]);
      setQuestionNumber(number + 1)
      answersArray.push(selection)
    } else if (number = 6 && answersArray.length < 7) {
      choicesArray.push(restaurantsContainer[0][6][selection]);
      answersArray.push(selection)
      console.log("SUBMITTING")
      resultsCalculator(choicesArray);
      // setFlag(false);
    }
  }
    

  return (
    <div className="App">
      <header className="App-header">
        <div>{questionContainer[questionNumber].question}</div>
        <Button
          onClick={() => answerSelection(questionNumber, questionContainer[questionNumber].options[0])}
        >
          {questionContainer[questionNumber].options[0]}
        </Button>
        <Button
          onClick={() => answerSelection(questionNumber, questionContainer[questionNumber].options[1])}
        >
          {questionContainer[questionNumber].options[1]}
        </Button>
        {questionContainer[questionNumber].options[2] ?

        <Button
          onClick={() => answerSelection(questionNumber, questionContainer[questionNumber].options[2])}
        >
          {questionContainer[questionNumber].options[2]}
        </Button>
        : null
        }
        {questionContainer[questionNumber].options[3] ?

        <Button
          onClick={() => answerSelection(questionNumber, questionContainer[questionNumber].options[3])}
        >
          {questionContainer[questionNumber].options[3]}
        </Button>
        : null
        }

      </header>
    </div>
  );
}

export default Quiz;

