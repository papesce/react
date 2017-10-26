import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ShoppingList extends React.Component {
  render() {
    return (<div>
      <h1> Shopping List for {this.props.name}</h1>
      <ul>
        <li> Instagram</li>
        </ul>
        </div>
    );
  }
}

function Square(props) {
      return (
        <button className="square" 
        onClick={() => props.onClick()} >
          {/* TODO */props.value}
        </button>
      );
}

  
  class Board extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xisnext: true
      };
    }
    renderSquare(i) {
      return <Square value={this.state.squares[i]}
         onClick={()=>this.handleClick(i)}
      />;
    }
    handleClick(i) {
       const squares = this.state.squares.slice();
       let isNext = this.state.xisnext;
       squares[i] = (isNext) ? "X" : "Y";
       this.setState({squares: squares, xisnext: !isNext});
    }
    render() {
      const win = calculateWinner(this.state.squares);
      let status;
      if (win) { status =  `There is a winner ! and the winner is: ${(this.state.xisnext?"Y":"X")}`}
      else {status = `Next player: ${this.state.xisnext ? "X" : "Y"}`;}
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(9)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(10)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(11)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            <ShoppingList name="Pablo"/>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  function calculateWinner(squares) {
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
    for(let win of lines) {
      if(calculateWinnerLine(squares, win)) {
         return true;
      }
    }
    return false;
  }

  function calculateWinnerLine(squares, win) {
    const [a,b,c] = win;
    return (squares[a] != null && squares[a] ===
    squares[b] && squares[b] ===
    squares[c])
  }