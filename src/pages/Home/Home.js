import React from 'react';
import "./Home.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';


const Problem=[
    {
        title:"1. Tree Reply Infinite",
        statement:["Problem Statement: Design an initial page with an input box, a label : “Hello Everyone” and a button “reply” as shown below.",
        "Upon entering text and replying to it, we need to add the new text indented further from the previous one, also, add a new “Reply” button which enables the user to reply to the message newly created.",
        "Further additions of text should be added appropriately indented and placed at last of where the reply is made.",
        "Moreover the user can make infinite additions at any point of time and the additions of text should be appropriate. ",
        "Also restrict the user from commenting empty text."
    ],
    route:"treereply"
    },
    {
        title:"2. Box split",
        statement:[" Initially design a square in a page.","Upon clicking on the square, the square divides itself into four smaller squares of equal ",
    "Further clicking on any smaller squares divides it equally into 4 more squares.",
"Note : At any given point the length and breadth of the largest square should be the same as the initial square size."],
route:"boxsplitting",
    },{
        title:"3. Tic tac toe ",
        statement:["Design a tic tac toe (X - O) game on a web page. Also the web page alerts the user when the game ends with an alert box whose text will be “Winner X” or “WInner O” or “Draw” depending on who wins the game."],
        route:"tictactoe",
    }
]
const Home = () => {

   
  return (
    <div className='Home_container'><h2>Problem Description</h2>
    {
        Problem.map((v,index)=> <ProblemBox title={v.title} statement={v.statement} route={v.route}/> )
    }
    </div>
  )
}


const ProblemBox=({title,statement,route})=>{
    const history=useHistory();
    console.log(route)
    const routes=`"${route}"`;
    console.log(routes);
    return(
        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h3>{title}</h3>
      <div>
        {statement.map((s,index)=><div><p><span>{index+1} .</span> {s}</p></div>)}
        </div>
      </CardContent>
      <CardActions>
        <Button size="small" 
        onClick={()=>history.push(`/${route}`)}
        >view solution</Button>
      </CardActions>
    </Card>
    )
}
export default Home