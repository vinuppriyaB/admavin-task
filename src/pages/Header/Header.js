import React, { useState } from "react";
import "./Header.css";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import Popover from "@mui/material/Popover";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";



const Header = () => {
  const [Select, setSelect] = useState([true, false, false, false]);
  const history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;


  return (
    <div className="Header_container">
      <div className="header_left">
        <h3>AdMAVIN TASK</h3>
      </div>
      <div className="header_right bigscreen">
        <Button
          className={Select[0] ? " selected " : "title "}
          variant="text"
          onClick={() => {
            setSelect([true, false, false, false]);
            history.push("/");
          }}
        >
          home
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setSelect([false, true, false, false]);
            history.push("/treereply");
          }}
          className={Select[1] ? " selected " : "title "}
        >
          Tree Reply
        </Button>
        <Button
          variant="text"
          onClick={() => {
            setSelect([false, false, true, false]);
            history.push("/boxsplitting");
          }}
          className={Select[2] ? " selected " : "title "}
        >
          Box Splitting
        </Button>

        <Button
          variant="text"
          onClick={() => {
            setSelect([false, false, false, true]);
            history.push("/tictactoe");
          }}
          className={Select[3] ? " selected " : "title "}
        >
          Tic Tac Toe
        </Button>
      </div>
      <div className="smallscreen">
        <MoreVertIcon
          className="More_icon"
          variant="contained"
          onClick={handleClick}
        />

        <Popover
          className="popover"
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <List
            className="popover_list"
            sx={{
              width: "500px",
              color: "rgba(234, 180, 30)",
              bgcolor: "rgba(8, 46, 78)",
              fontSize: "10px",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton
              onClick={() => {
                handleClose();
              }}
            >
              <div
                className={Select[0] ? " selected " : "title "}
                onClick={() => {
                  setSelect([true, false, false, false]);
                  history.push("/");
                }}
              >
                Home
              </div>
            </ListItemButton>
            <ListItemButton
              onClick={() => {
                handleClose();
              }}
            >
              <div
                className={Select[1] ? " selected" : "title"}
                onClick={() => {
                  setSelect([false, true, false, false]);

                  history.push("/treereply");
                }}
              >
                Tree Reply
              </div>
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                handleClose();
              }}
            >
              <div
                className={Select[2] ? " selected" : "title"}
                onClick={() => {
                  setSelect([false, false, true, false]);
                  history.push("/boxsplitting");
                }}
              >
                Box Splitting
              </div>
            </ListItemButton>

            <ListItemButton
              onClick={() => {
                handleClose();
              }}
            >
              <div
                className={Select[3] ? " selected" : "title"}
                onClick={() => {
                  setSelect([false, false, false, true]);
                  history.push("/tictactoe");
                }}
              >
                Tic Tac Toe
              </div>
            </ListItemButton>
          </List>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
