import './App.css';
import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';


function Encouragement() {

  const phraseArray = [
    '\"You can do it Nani!\" \n - Nicholas', 
    "\"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.\" \n Isaish 41:10 (NIV)",
    "\"Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.\" \n Philippians 4:6-7 (NIV)",
    "\"And we know that for those who love God all things work together for good, for those who are called according to His purpose.\" \n Romans 8:28",
    "\"I just try to be really really honest with people, when I think, that they suck. \n - Santana Lopez\"",
    "\"I can't wait to make you my wife some day! \n - Nicholas\"",
    "\"You are the most amazing, thoughtful, caring woman I know. :) \n - Nicholas\"",
    "\"Don't ever doubt how funny you are! \n - Nicholas\"",
    "\"God is using you in so many amazing ways. \n - Nicholas\"",
    "\"God is always with you baby, even if you don't always realize it. \n - Nicholas\"",
    "\"Sometimes I Think I'm Just A Riddle That I Can't Even Solve.\" \n - Schmidt",
    "\"It's Perfectly Fine To Watch TV All Day.\" \n - Nick Miller",
    "\"For I, the LORD your God, hold your right hand; it is I who say to you, 'Fear not, I am the one who helps you.\" \n Isaiah 41:13",
    "\"When I thought, 'My foot slips,' Your steadfast love, O LORD, helped me up. When the cares of my heart are many, Your consolations cheer my soul.\" \n Psalm 94:18–19",
    "\"God is in the midst of her; she shall not be moved; God will help her when morning dawns.\" \n Psalm 46:5",
    "\"I love you so much!!!!!\" \n - Nicholas",
    "\"You are going to make such an amazing mother one day.\" \n - Nicholas",
    "\"Baby you light up my world like nobody else\" \n - One Direction",
    "\"Spending time with you is the best part of my day\" \n - Nicholas",
    "\"She is more precious than jewels, and nothing you desire can compare with her.\" \n Proverbs 3:15"
]

const [index, setIndex] = useState(Math.floor(Math.random() * phraseArray.length));

  return (
    <div className="App">
      <header className="App-header">
        <div>{phraseArray[index]}</div>
        <Button
        onClick={() => {setIndex(Math.floor(Math.random() * phraseArray.length))}}
        >Reload</Button>
      </header>
    </div>
  );
}

export default Encouragement;
