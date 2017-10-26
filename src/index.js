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
    //constructor(props){
     // super(props);
      //this.state = {
      //  squares: Array(9).fill(null),
      //  xisnext: true
      //};
    //}
    renderSquare(i) {
      return <Square value={this.props.squares[i]}
         onClick={()=>this.props.onClick(i)}
      />;
    }
    
    render() {
       return (
        <div>
          {/*<div className="status">{this.props.status}</div>*/}
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
    constructor(props){
      super(props);
      this.state = { 
        history : [{squares : Array(9).fill(null)}],
        isxnext : true,
        stepNumber : 0
        };
      }
      handleClick(i) {
        const history = this.state.history;
        const currentHistory = history[history.length-1];
        const squares = currentHistory.squares.slice();
        let isNext = this.state.isxnext;
        squares[i] = (isNext) ? "X" : "Y";
        this.setState({
          history: history.concat([{squares: squares}]),
           isxnext: !isNext,
           stepNumber: history.length});
     }
     computeStatus(win, isxnext) {
      if (win) { 
        let winner = isxnext?"X":"Y";
        return  `There is a winner ! and the winner is: ${(winner)}`}
      else {
        let next = isxnext?"Y":"X";
        return `Next player: ${next}`;}

     }
     jumpToMove(index) {  
      this.setState({stepNumber: index});
     }
     getMove(index) {
      let move = `Move ${index}`; 
      if (this.state.stepNumber === index) {move =  <b>{move}</b>}
      return move;
     }
    render() {
      const histories = this.state.history;
      //console.log(history);
      const current = histories[this.state.stepNumber];
      //console.log(current);
      const win = calculateWinner(current.squares);
      let status = this.computeStatus(win, this.state.isxnext);
      const moves = histories.map( (history, index) => {
        return <li key={index}>
          <button onClick={() => this.jumpToMove(index)}>
            {this.getMove(index)}</button>
        </li>
      })
      
      return (
        <div className="game">
          <div className="game-board" >
            <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
            {/*<ShoppingList name="Pablo"/>*/}
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