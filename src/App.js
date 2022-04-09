import logo from './logo.svg';
import './App.css';
import Tictactoe from './pages/tictactoe/Tictactoe';
import SquareSplit from './pages/SqareSplit/SquareSplit';
import TreeReply from './pages/TreeReply/TreeReply';

function App() {
  return (
    <div className="App">
      <TreeReply/>
      <SquareSplit/>
     <Tictactoe/>
    </div>
  );
}

export default App;
