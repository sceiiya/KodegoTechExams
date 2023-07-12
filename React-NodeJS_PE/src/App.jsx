import React, { useState, useEffect } from 'react'
import './App.css'
import Square from './components/Square'
import Scoreboard from './components/Scoreboard';
import Indicator from './components/Indicator';
import Reset from './components/Reset';

const App = () => {

  // initialize squares
  const SqValue = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];

const [sqValue, setSqValue] = useState(SqValue); //value for each square
const [turn, setTurn] = useState(false);  // whos turn, false = X ; true = O
const [status, setStatus] = useState(false); // game status
const [winner, setWinner] = useState('');  // if there is a winner already
let indicator = ''; // initialize indicator message 
const [occupied, setOccupied] = useState(0); // indicator if all boxes are ooccupied
const [draw, setDraw] = useState(false); // draw state

// whos turn, false = X ; true = O
const turnValue = () => {
  if (turn){
    return 'O';
  }else{
    return 'X';
  }
} 

// default message for indicator
indicator = `${turnValue()}'S TURN`;

//reset board
const handleReset = () => {
  const newArr = [];
  for (let i = 0; i < 9; i++) {
    newArr.push('');
  }
  
  setSqValue(newArr);
  setTurn(false);
  setStatus(false);
  setWinner('');
  setOccupied(0);
  setDraw(false);
}

const checkWinner = (sqValue) => {
  
  // rule for winning
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

for (let i = 0; i < lines.length; i++) { //loop to check every possible line of victory
  const [a, b, c] = lines[i];
  if(sqValue[a] === 'X' && sqValue[b] === 'X' && sqValue[c] === 'X'){ //condition for winning X
    setStatus(true );
    setWinner(sqValue[a]);
    indicator = `Winner: ${sqValue[a]}`;
    return sqValue[a];
  }else if(sqValue[a] === 'O' && sqValue[b] === 'O' && sqValue[c] === 'O'){ //condition for winning O
    setStatus(true);
    setWinner(sqValue[a]);
    indicator = `Winner: ${sqValue[a]}`;
    return sqValue[a];
  }
}
  return ;
}

useEffect( () => { //check if there are already a winner
  checkWinner(sqValue);
}, [sqValue]);

useEffect(()=>{
  if (occupied === 9 && !status) {
    setStatus(true);
    setDraw(true);
    indicator = 'DRAW';
  }
}, [occupied])

const [scoreboardVal, setScoreboardVal] = useState({}); //state for scoreboard

useEffect(() => {
  // get score from the session storage
  const scoreboard = JSON.parse(sessionStorage.getItem('scoreboard') || '{}');

  // set score for the winner
  if (winner === 'X') {
    const updatedScoreboard = { // set X score
      ...scoreboard,
      X: (scoreboard.X || 0) + 1
    };
    sessionStorage.setItem('scoreboard', JSON.stringify(updatedScoreboard));
  } else if (winner === 'O') { // set O score
    const updatedScoreboard = {
      ...scoreboard,
      O: (scoreboard.O || 0) + 1
    };
    sessionStorage.setItem('scoreboard', JSON.stringify(updatedScoreboard));
  }
  
}, [winner]);

// will get the value form session storage intto state
useEffect( () => {
  const scoreboard = JSON.parse(sessionStorage.getItem('scoreboard') || '{}');
  setScoreboardVal(scoreboard)
}, [winner])

// will reset the scoreboard from the session storage
const resetScoreboard = () => {
    const newScoreboard = {'X': 0, 'O': 0};
    sessionStorage.setItem('scoreboard', JSON.stringify(newScoreboard));

    const scoreboard = JSON.parse(sessionStorage.getItem('scoreboard') || '{}');
    setScoreboardVal(scoreboard)
}

const toggle = (i) => {
  // do nothing if the game is over
  if(status){
    return;
  }

  // do nothing if the square already used
  if(sqValue[i] != ''){
    return;
  }

  //change state of the clicked square 
  setSqValue(  (sqArr) => {
    const SqArr = [...sqArr];
      SqArr[i] = turnValue();
      return SqArr;  
  })

  setOccupied( occ => occ + 1 );

  // switch turns
  setTurn( lastTurn => !lastTurn);
}

  return (
    <>
      <div className='square-container'>
        {sqValue.map( (val, i) =>
          (<Square key={i} value={val} toggle={toggle} i={i}/>)
        )}
      </div>

      <Indicator status={status} winner={winner} message={indicator} draw={draw} />

      <Reset status={status} handleReset={handleReset} />

      <Scoreboard X={scoreboardVal.X} O={scoreboardVal.O} resetScoreboard={resetScoreboard} />

    </>
  )
}

export default App