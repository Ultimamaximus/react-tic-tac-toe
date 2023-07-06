import React, { useState, useEffect, useRef } from 'react';
import "../css/board.css";

// Board component
const Board = React.memo(({ reset, setReset, winner, setWinner }) => {

  // State for current turn
  const [turn, setTurn] = useState(0);

  // State for board data
  const [data, setData] = useState(['', '', '', '', '', '', '', '', '']);

  // Reference for the board
  const boardRef = useRef(null);

  // Function to handle drawing on the board
  const draw = (index) => {
    if (data[index] === '' && winner === '') {
      // Determine current player symbol (X or O)
      const current = turn === 0 ? "X" : "O";
      
      // Create a new copy of the data array
      const newData = [...data];
      
      // Update the data with the current player's symbol
      newData[index] = current;
      
      // Set the updated data state
      setData(newData);
      
      // Switch the turn to the next player
      setTurn(turn === 0 ? 1 : 0);
    }
  };

  // Reset the board when the reset dependency changes
  useEffect(() => {
    setData(['', '', '', '', '', '', '', '', '']);
    setTurn(0);
    setWinner('');
    setReset(false);
  }, [reset, setReset, setWinner]);

  // Check for a winner or tie when the data or turn changes
  useEffect(() => {
    // Define the winning combinations
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    // Check if there is a winning combination
    const checkWin = () => {
      return winningCombinations.some(([a, b, c]) => {
        return data[a] && data[a] === data[b] && data[a] === data[c];
      });
    };

    // Check if there is a tie
    const checkTie = () => {
      return data.every((cell) => cell !== '');
    };

    // Set the winner or tie based on the game status
    if (checkWin()) {
      setWinner(turn === 0 ? "Player 2 Wins!" : "Player 1 Wins!");
    } else if (checkTie()) {
      setWinner("It's a Tie!");
    }
  }, [data, turn, setWinner]);

  return (
    <div ref={boardRef} className="board">
      {data.map((cell, index) => (
        <div
          key={index}
          className={`input input-${index + 1}`}
          onClick={() => draw(index)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
});

export default Board;
