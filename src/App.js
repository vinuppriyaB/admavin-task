import logo from './logo.svg';
import './App.css';

import { Switch, Route,  Redirect } from "react-router-dom";
import Tictactoe from './pages/tictactoe/Tictactoe';
import SquareSplit from './pages/SqareSplit/SquareSplit';
import TreeReply from './pages/TreeReply/TreeReply';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
 import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Mode } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TheatersIcon from '@mui/icons-material/Theaters';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
function App() {
  const history = useHistory();
  return (
    <div className="App">
      
      <Header/>

       <Switch>
        <Route path="/treereply">
        <TreeReply/>
        </Route>

        <Route path="/boxsplitting">
        <SquareSplit/>
        </Route>
        <Route exact path="/tictactoe">
        <Tictactoe/>
        </Route>
       
        <Route path="/">
        <Home/>
        </Route>
        </Switch>
      
     
    
    </div>
  );
}

export default App;
