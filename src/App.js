import React, { useState } from 'react';
import Board from './Board';
import { Grid, Dialog, Button, Typography } from '@mui/material';
import "./app.css";

function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState('');
  const [p1Wins, setP1Wins] = useState(0);
  const [p2Wins, setP2Wins] = useState(0);
  const [turn, setTurn] = useState(0);

  const setOpen = () => {
    return winner !== '';
  }

  const resetBoard = () => {
    setReset(true);
    setOpen(false);
    if (turn === 0) {
      setP2Wins(p2Wins + 1);
    } else {
      setP1Wins(p1Wins + 1);
    }
  }

  return (
    <div className='App'>
      <Typography sx={{ fontSize: '3.0rem', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif', color: '#ffb6c1', textShadow: '2px 2px 0px #f00' }} className='retro-title'>Tic Tac Toe</Typography>
      <Typography sx={{ fontFamily: 'Courier New, Courier, monospace', color: 'black', textShadow: '1px 1px 0px #000' }}>
        <span>Player 1:</span> <span style={{ color: 'black' }}>X</span><br />
        <span>Player 2:</span> <span style={{ color: 'black' }}>O</span><br />
      </Typography>


      <Board reset={reset} setReset={setReset} winner={winner}
        setWinner={setWinner} setOpen={setOpen} p1Wins={p1Wins} turn={turn} setTurn={setTurn} />

      <div class="container">
        <div class="wins">Wins</div>
        <div class="players">
          <div class="player">
            <div class="title">Player 1:</div>
            <div class="count">{p1Wins}</div>
          </div>
          <div class="player">
            <div class="title">Player 2:</div>
            <div class="count">{p2Wins}</div>
          </div>
        </div>
      </div>


      <Dialog sx={{ textAlign: 'center' }} open={setOpen()} maxWidth="xs" fullWidth={true}>
        <h2>Game Over</h2>
        <h3>{winner} <br /></h3>
        <Button onClick={() => resetBoard()}>Play Again!</Button>
      </Dialog>
    </div>

  );
}

export default App;
