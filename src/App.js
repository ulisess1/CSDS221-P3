import React, { useState } from 'react';
import Board from './Board'

export default function App() {
  const [clear, setClear] = useState(false); //determine if game should be reset
  const [winner, setWinner] = useState(''); //winning player

  const clearBoard = () => {
    setClear(true);
  };

  return (
    <div>
      <div>
        <div>{winner} has WON!</div>
        <button onClick={() => clearBoard()}>Reset Game</button>
      </div>
      {/* <Board/> */}
    </div>
  );
}
