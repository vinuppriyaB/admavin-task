import React from "react";
import "./Tictactoe.css";
import { useState, useEffect } from "react";
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
  const [click, setClick] = useState(false);
  const { width, height } = useWindowSize();
  const [XPoints, setXPoints] = useState(0);
  const [OPoints, setOPoints] = useState(0);
  let winner = null;
  let draw = null;
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

  let checkboardforinput = (board) => {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i] !== null) {
        count = count + 1;
      }
      if (count >= 5) {
        console.log(count);
        winner = checkWinner(board);
        return true;
      }
      return false;
    }
  };
  let checkBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i] !== null) return false;
    }
    return true;
  };

  let checkDraw = (board) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i] !== "X" && board[i] !== "O") return false;
    }
    return true;
  };

  const handleClick = (index) => {
    console.log("click");
    setClick(true);
    checkboardforinput(board);
    winner = checkWinner(board);
    if (!winner && !board[index]) {
      const boardcopy = [...board];
      boardcopy[index] = isXTurn ? "X" : "O";
      setBoard(boardcopy);
      setIsXTurn(!isXTurn);
    }
  };

  const checkWinner = (board) => {
    console.log("checkwinner");
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

  const restart = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setIsXTurn(true);
  };

  useEffect(() => {
    draw = checkDraw(board);
    if (winner) {
      if (winner === "X") {
        setXPoints(XPoints + 1);
        window.alert("\n The Winner is  'X'");
      } else {
        setOPoints(OPoints + 1);
        window.alert("\n The Winner is  'O'");
      }
    } else {
      if (checkDraw(board) === true) {
        setXPoints(XPoints + 1);
        setOPoints(OPoints + 1);
        window.alert("\n Match Draw");
      }
    }
  }, [winner, draw, setClick, checkboardforinput]);

  return (
    <div className="ttt-game">
      <h2>TIC TAC TOE</h2>
      {/* {winner !== null || checkDraw(board) === true ? (
        <Confetti width={width} height={height} />
      ) : (
        ""
      )} */}
      {checkBoard(board) === true ? (
        <div className="start-player">
          <div>
            <h3>Select Start Player</h3>
          </div>
          <div className="select_startPlayer_btns ">
            <Button variant="contained" onClick={() => setIsXTurn(true)}>
              X
            </Button>

            <Button variant="contained" onClick={() => setIsXTurn(false)}>
              O
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <p className="display_Score">
            {" "}
            <span>Score : </span>
            {` x : O :: ${XPoints} : ${OPoints}`}
          </p>
        </div>
      )}
      <div className="board">
        {board.map((val, index) => (
          <Square val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>

      {checkDraw(board) === false ? (
        <h3 className="Display_turns"> {isXTurn ? "X" : "O"} Turn</h3>
      ) : (
        ""
      )}
      <Button variant="contained" onClick={() => restart()}>
        Restart
      </Button>

      {/* {winner ? (
        <h1>Winner is: {winner}</h1>
      ) : winner === null && checkDraw(board) === true ? (
        <h1>Match Draw</h1>
      ) : (
        ""
      )} */}
    </div>
  );
}

function Square({ val, onPlayerClick }) {
  const styles = { color: val === "X" ? "green" : "red" };
  return (
    <div
      className="square"
      style={styles}
      onClick={() => {
        console.log("call player click");
        onPlayerClick();
      }}
    >
      {val}
    </div>
  );
}
