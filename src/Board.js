import { useState, useEffect, useRef } from 'react';

const Board = () => {
  const [turn, setTurn] = useState(0); //track player turn, either 0 or 1
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']); //keep track of board

  return (
    <div>
      <div onClick={alert('test')}></div>
      <div onClick={alert('test')}></div>
      <div onClick={alert('test')}></div>
      <div onClick={alert('test')}></div>
      <div onClick={alert('test')}></div>
      <div onClick={alert('test')}></div>
      <div onClick={alert('test')}></div>
      <div onClick={alert('test')}></div>
      <div onClick={alert('test')}></div>
    </div>
  );
};

export default Board;
