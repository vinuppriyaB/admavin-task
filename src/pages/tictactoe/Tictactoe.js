import React from "react";
import "./Tictactoe.css";
import { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Button from "@mui/material/Button";

const Tictactoe = () => {
  return (
    <div>
      <Board />
    </div>
  );
};

export default Tictactoe;

function Board() {
  const { width, height } = useWindowSize();
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [isXTurn, setIsXTurn] = useState(true);

  let checkBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i] !== null) return false;
    }
    return true;
  };

  let checkDraw = (board) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i] !== "x" && board[i] !== "o") return false;
    }
    return true;
  };

  const handleClick = (index) => {
    if (!winner && !board[index]) {
      const boardcopy = [...board];
      boardcopy[index] = isXTurn ? "X" : "O";
      setBoard(boardcopy);
      setIsXTurn(!isXTurn);
    }
  };

  const decideWinner = (board) => {
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
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);

  const restart = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setIsXTurn(true);
  };

  return (
    <div className="ttt-game">
      <h1>TIC TAC TOE</h1>
      {winner !== null || checkDraw(board) === true ? (
        <Confetti width={width} height={height} />
      ) : (
        ""
      )}
      {winner === null && checkBoard(board) === true ? (
        <div className="start-player">
          <div>
            <h1>Select Start Player</h1>
          </div>
          <div>
            <Button
              style={{
                color: "black",
                fontSize: "30px",
                backgroundColor: "rgb(248, 212, 157)",
              }}
              variant="contained"
              onClick={() => setIsXTurn(true)}
            >
              X
            </Button>
          </div>
          <div>
            <Button
              style={{
                color: "black",
                fontSize: "30px",
                backgroundColor: "rgb(248, 212, 157)",
              }}
              variant="contained"
              onClick={() => setIsXTurn(false)}
            >
              O
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="board">
        {board.map((val, index) => (
          <Square val={val} key={index} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>

      {winner === null && checkDraw(board) === false ? (
        <h1> {isXTurn ? "X" : "O"} Turn</h1>
      ) : (
        ""
      )}
      <Button
        style={{
          color: "black",
          fontSize: "30px",
          backgroundColor: "rgb(248, 212, 157)",
        }}
        variant="contained"
        onClick={() => restart()}
      >
        Restart
      </Button>

      {winner ? (
        <h1>Winner is: {winner}</h1>
      ) : winner === null && checkDraw(board) === true ? (
        <h1>Match Draw</h1>
      ) : (
        ""
      )}
    </div>
  );
}

function Square({ val, onPlayerClick }) {
  // const [value,setValue] = useState(val);
  const styles = { color: val === "X" ? "green" : "red" };
  return (
    <div
      className="square"
      style={styles}
      onClick={() => {
        onPlayerClick();
      }}
    >
      {val}
    </div>
  );
}
