import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winStatus: null,
            remainingPieces: null,
            boardState: null
        };
    }

    boardStateHandler() {
        // if the board state is not null, then it updates it with an object.
        if (this.state.boardState === null) {
            this.state.boardState = {
                row1 : [],
                row2 : [],
                row3 : [],
            }
        }

    }

  render() {
    return (
      <div className="App">
          <div>
            <GameBoard
                winStatus={this.state.winStatus}
                boardStatus={this.state.boardState}
             />
          </div>
          <div>
              <WinMessage
                  winStatus={this.state.winStatus}
              />
          </div>
          <div>
              <PieceCorral
                  boardStatus={this.state.boardState}
              />
          </div>

      </div>
    );
  }
}

export default App;
