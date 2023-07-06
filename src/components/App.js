import React, { useState, useCallback } from 'react';
import Board from './Board';
import Info from './Info';
import '../css/app.css';

const App = () => {
  // State for reset and winner
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState('');

  // Callback function to reset the board
  const resetBoard = useCallback(() => {
    setReset(true);
  }, []);

  return (
    <div className="App">
      {/* Popup for displaying the winner */}
      <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
        <div className="winner-text">{winner}</div>
        {/* Button to reset the board */}
        <button onClick={resetBoard}>Reset Board</button>
      </div>
      {/* Board component */}
      <Board reset={reset} setReset={setReset} winner={winner} setWinner={setWinner} />
      {/* Info component */}
      <Info />
    </div>
  );
};

export default App;

