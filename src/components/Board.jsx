import React, {Component, Fragment} from 'react';
import Square from './Square';

class Board extends Component {

  renderSquare(i) {
    return(
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {

    let newSquares = this.props.squares.map((square, i) => {
      return (
        <Square
          square={square}
          key={i}
          onClick={() => this.props.onClick(i)}
        />
      );
    });

    return (

      <Fragment>
        {/* <div className="status h2 text-center">{status}</div> */}
        <div className="board">
          {newSquares}
        </div>
      </Fragment>
    );
  }
}

export default Board;


// {this.renderSquare(0)}
// {this.renderSquare(1)}
// {this.renderSquare(2)}
// {this.renderSquare(3)}
// {this.renderSquare(4)}
// {this.renderSquare(5)}
// {this.renderSquare(6)}
// {this.renderSquare(7)}
// {this.renderSquare(8)}
