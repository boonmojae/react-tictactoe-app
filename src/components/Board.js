import React, { useState } from 'react'
import Square from './Square'
import "./Board.css";

const Board = ({squares, onClick}) => {//(squares, onClick)로 되어있으면 매개변수 전달로 props를 디스트럭처링 하는게 아니다
  
  const renderSquare = (i) => {
      return <Square value={squares[i]}
        onClick={() => onClick(i)} />
  }

    return (
      <div>
        <div className='board-row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className='board-row'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className='board-row'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
      </div>
    )
  
}

export default Board


