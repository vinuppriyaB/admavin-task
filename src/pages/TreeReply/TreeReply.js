import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./TreeReply.css";

const TreeReply = () => {
  const [msg, setMsg] = useState("");
  const [msgArray, setMsgArray] = useState([]);

  const handleClick = () => {
    if (msg == "") {
      window.alert("\n Empty Message!!! \n\n Please Enter some text...");
    } else {
      const msgcopy = [...msgArray];
      msgcopy.push(msg);
      setMsgArray(msgcopy);
      setMsg("");
    }
  };

  return (
    <div className="Tree_reply">
      <TextField
        id="standard-basic"
        label="Type  Something..."
        variant="standard"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <div className="Hello_content">
        <p>Hello Everyone</p>
        <Button variant="contained" onClick={() => handleClick()}>
          Reply
        </Button>
      </div>
      <div className="Reply_messages">
        {" "}
        {msgArray.map((val, index) => (
          <Reply val={val} key={index} msg={msg} setMsg={setMsg} />
        ))}
      </div>
    </div>
  );
};

const Reply = ({ val, text, msg, setMsg }) => {
  const [replyMsg, setReplyMsg] = useState("");
  const [msgArray, setMsgArray] = useState([]);

  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    if (msg == "") {
      window.alert("\n Empty Message!!! \n\n Please Enter some text...");
    } else {
      setReplyMsg(msg);
      const msgcopy = [...msgArray];
      msgcopy.push(msg);
      setMsgArray(msgcopy);
      setMsg("");
    }
  };

  return (
    <div>
      <div className="Hello_content">
        <p>{val}</p>
        <Button variant="contained" onClick={() => handleClick()}>
          Reply
        </Button>
      </div>
      <div className="Reply_messages">
        {" "}
        {msgArray.map((val, index) => (
          <Reply val={val} key={index} text={text} msg={msg} />
        ))}
      </div>
    </div>
  );
};

export default TreeReply;
