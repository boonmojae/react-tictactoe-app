import { useState } from 'react';
import './App.css';
import Board from './components/Board';
function App() {

  const [history, setHistory] = useState([ {squares: Array(9).fill(null )}]);
  const [xIsNext , setXIsNext] = useState(true);
  
  const calculateWinner = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,4],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for (let index = 0; index < lines.length; index++) {
      const [a,b,c] = lines[index];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);

  let status;
  if(winner) {
    status = 'Winner: ' + winner;
  }else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    const newSquares = current.squares.slice();//.squares를 하면 현재 squares값을 가질 수 있고 
    // slice는 원본을 바로 직접 수정하는게 아닌 복사본을 만들어서 수정한 다음 넣어주려고 하는것이고 state의 불변성을 지켜줌
    if(calculateWinner(newSquares) || newSquares[i]){//newSquares가 있고 아니면 newSquares가 클릭되어있는곳을 클릭하면
      return;
    }

    //만약 그렇지 않다면
    //아직 승부가 나지 않고 클릭이 안된부분을 클릭했다면
    newSquares[i] = xIsNext? 'X' : 'O';
    setHistory([...history, {squares: newSquares}])//history도 원본을 넣어주는게 아닌 복사해서 하나씩 넣어준다(전개연산자를 사용해서)
    setXIsNext(prev => !prev);//true->false, false->true
  }


  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)}/>
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
      </div>
    </div>
  );
}

export default App;
