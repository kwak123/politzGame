import React, { Component } from 'react';
import logo from './logo.svg';
import GameBoard from './GameBoard.jsx'
import WinMessage from './WinMessage.jsx'
import PieceCorral from './PieceCorral.jsx'

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winStatus: null,
            remainingPieces: null,
            boardState: null,
            lastMove: null
        };
    }

    // var moveHandler = (move) => {
    // // this takes the move from the state and
    //
    // };

    boardStateHandler() {
        // if the boardState is null, give the board the board skeleton.
        if (!this.state.boardState) {
             this.setState({
                 // hist canMove
                 board: {
                     0: {hist : [], owns : null, canMove : []}, 
                     1: {hist : [], owns : null, canMove : []},
                     2: {hist : [], owns : null, canMove : []},
                     3: {hist : [], owns : null, canMove : []},
                     4: {hist : [], owns : null, canMove : []},
                     5: {hist : [], owns : null, canMove : []},
                     6: {hist : [], owns : null, canMove : []},
                     7: {hist : [], owns : null, canMove : []},
                     8: {hist : [], owns : null, canMove : []}
                 },
             })
        } else {
            // boardState is not null, need to check for new move.




            var ownHandler = (board) => {
                // this is a helper method that takes in the board object, reads the history

            }
        }

    }

  render() {
    return (
      <div className="App">
          <div>
            <GameBoard
                winStatus={this.state.winStatus}
                boardState={this.state.boardState}
                lastMove={this.state.lastMove}
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
                  lastMove={this.state.lastMove}
              />
          </div>

      </div>
    );
  }
}

export default App;
