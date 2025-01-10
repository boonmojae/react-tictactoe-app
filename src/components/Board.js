import React, { Component } from 'react'
import Square from './Square'
import "./Board.css";

export default class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  handleClick(i) {//i로 인덱스 값을 받아옴
    const squares = this.state.squares.slice();//하나를 새로 복사해줄 때 사용하는게 slice메서드_메소드에 아무것도 안넣으면 모든 square의 배열을 새롭게 복사
    squares[i] = 'X';
    this.setState({squares: squares})//state을 변경할땐 항상 setState를 사용
  }

  renderSquare(i) {
      return <Square value={this.state.squares[i]}//square 자식 컴포넌트에 props로 내려준것
        onClick={() => this.handleClick(i)} />
  }

  render() {
    return (
      <div>
        <div className="status">Next Player : X ,O</div>
        <div className='board-row'>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
        </div>
        <div className='board-row'>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
        </div>
        <div className='board-row'>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}