import './App.css';//강의는 이걸 추가안해도 css적용되는데 나는 이게 있어야 적용된다.
import Board from './components/Board';
function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        game-info
      </div>
    </div>
  );
}

export default App;
