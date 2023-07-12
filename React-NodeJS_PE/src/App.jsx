import React, { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Square from './components/Square'
import Scoreboard from './components/Scoreboard';
import Indicator from './components/Indicator';

const App = () => {

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

// whos turn, false = X ; true = O
const turnValue = () => {
  if (turn){
    return 'O';
  }else{
    return 'X';
  }
} 

indicator = `${turnValue()}'S TURN`;

  const handleReset = () => {
    const newArr = [];
    for (let i = 0; i < 9; i++) {
      newArr.push('');
    }
    
    setSqValue(newArr);
    setTurn(false);
    setStatus(false);
    setWinner('');
  }

  // const toggle = (i) => {

  //   setSqValue(  (sqArr) => {
  //     const SqArr = [...sqArr];

  //     if(SqArr[i] == 'O'){
  //       SqArr[i] = '';
  //       return SqArr;  
  //     }else if(SqArr[i] == 'X'){
  //       SqArr[i] = 'O';
  //       return SqArr;  
  //     }else{
  //       SqArr[i] = 'X';
  //       return SqArr;  
  //     }

  //   })
  //   // console.log(sqValue);
  // }

  // console.log(sqValue)

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

for (let i = 0; i < lines.length; i++) {
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

useEffect( () => {
    const scoreboard = JSON.parse(sessionStorage.getItem('scoreboard') || '{}');
    setScoreboardVal(scoreboard)
}, [winner])

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

  // switch turns
  setTurn( lastTurn => !lastTurn);
  // console.log(sqValue);
}

// console.log(status);
// console.log(checkWinner(sqValue));

  return (
    <>
      <div className='square-container'>

        {sqValue.map( (val, i) =>
          (<Square key={i} value={val} toggle={toggle} i={i}/>)
        )}

      </div>

      <Indicator status={status} winner={winner} message={indicator}/>

      <div 
        className='reset'
        onClick={handleReset}
      >
        {status ? 'NEW GAME' : 'RESET'}
      </div>

      <Scoreboard 
      X={scoreboardVal.X}
      O={scoreboardVal.O}
      />

    </>
  )
}

export default App