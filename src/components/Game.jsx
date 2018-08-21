import React, {Component} from 'react';
import Board from './Board';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
    return;
    }
    squares[i] = this.state.xIsNext ? 'X' : '0';
    this.setState({
      history: history.concat([{
        squares: squares,
        coordinates: {
          col: i % 3,
          row: Math.floor(i / 3)
        }
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const goTo = move ?
      'Go to move #' + move + '  '+ '(' + step.coordinates.col + ', ' + step.coordinates.row + ')':
      'Go to the start of the game';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{goTo}</button>
        </li>
      )
    });

    let status;
    if (winner) {
      status = 'The winner is ' + winner;
    } else {
      status = 'Next player is ' + (this.state.xIsNext ? 'X' : '0');
    }

    return (
      <article className="game container mt-5">
        <section className="row">
          <div className="col-sm-8 game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <div className="col-sm-4 game-info">
            {/* <div>{status}</div> */}
            <p className="h2">{status}</p>
            {/* <ol>{moves}</ol> */}
            <ul className="nav nav-pills flex-column">
              {moves}
            </ul>
          </div>
        </section>
      </article>
    );
  }
}

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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
