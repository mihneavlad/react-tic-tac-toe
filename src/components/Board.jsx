import React, {Component} from 'react';
import Square from './Square';

class Board extends Component {

  render() {
    return (
        <div className="board">
          {this.props.squares.map((square, i) => {
            return (
              <Square
                square={square}
                key={i}
                onClick={() => this.props.onClick(i)}
              />
            );
          })}
        </div>

    );
  }
}

export default Board;
