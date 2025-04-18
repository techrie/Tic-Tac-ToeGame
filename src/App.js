import "./styles.css";

const checkWinner = (board) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6], //Rows, columns, diagonals
  ];

  for (const [a, b, c] of winningCombinations) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; //Return X or O as winner;
    }
  }

  return board.includes(null) ? null : "Draw"; //Return draw if no winner and no empty cells
};

import React, { useState } from "react";

// Tic-Tac-Toe Component
const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); // 9 cells initialized to null
  const [isXTurn, setIsXTurn] = useState(true); // Track whose turn it is

  const winner = checkWinner(board);

  const handleClick = (index) => {
    // TODO: Implement cell click logic

    if (board[index] || winner) return; //Ignore clicks on filled cells or when game is over

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    // TODO: Implement reset logic
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tic-Tac-Toe</h1>
      <p>by KodeKarma</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,100px)",
          gap: "3px",
          justifyContent: "center",
        }}
      >
        {/* TODO: Render the grid and buttons */}
        {board.map((cell, index) => (
          <button
            key={index}
            className="board-cell"
            onClick={() => handleClick(index)}
            data-testid={`cell-${index}`}
            disabled={board[index] || winner} // Disable if already clicked or if there is a winner
          >
            {cell}
          </button>
        ))}
      </div>

      {winner && (
        <h2>{winner === "Draw" ? "It's a draw" : `Winner is ${winner}`}</h2>
      )}
      <button onClick={resetGame} style={{ marginTop: "20px" }}>
        Reset Game
      </button>
    </div>
  );
};

export default function App() {
  return <TicTacToe />;
}
