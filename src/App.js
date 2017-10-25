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
            lastMove: null // move format: "<team><size><sizeIdx (a or b)><originIdx(0 = pieceCorral><destinationIdx>"
                           // R3a25 would be a move of a red's "first" large piece from position 2 to position 5.
        };
    }

    // this is only called once, before the initial render.
    componentWillMount() {
/*explanation of move hashes:
    lastMove: stored as "<team><size><sizeIdx (a or b)><originIdx(0 = pieceCorral)><destinationIdx>"
        R3a25 would be a move of a red's "first" large piece from position 2 to position 5.
    hist: stored as "<team><size><sizeIdx (a or b)><originIdx(0 = pieceCorral)><destinationIdx>"
        Each move causes two changes in the history, one in the origin BoardSquare, one in the destinationIdx.
        Therefore, you can determine which pieces are still on the square (thus determining the value of the "owns")
        key by checking to see if the piece has moved (the hist contains a more recent hist hash of the same piece with
        a origin key matching the BoardSquare key but with an destination key that is different.
    canMove: This is an array of all of the pieces that can currently move from the square (this is a filtered array
        of matching pieces from the hist property.
*/

            this.setState({boardState: {
                // each index is a position on the board, read from left to right.
                // the zero index is reserved to denote each team's corral.
                0: this.state.remainingPieces,
                1: {hist : [], owns : null, canMove : []},
                2: {hist : [], owns : null, canMove : []},
                3: {hist : [], owns : null, canMove : []},
                4: {hist : [], owns : null, canMove : []},
                5: {hist : [], owns : null, canMove : []},
                6: {hist : [], owns : null, canMove : []},
                7: {hist : [], owns : null, canMove : []},
                8: {hist : [], owns : null, canMove : []},
                9: {hist : [], owns : null, canMove : []}
                },
            //piece format: "<team><size><sizeindex (a or b)<location = 0 if from pieceCorral, number if not.><index of move>"
                remainingPieces: { // these do not have a <index of move> code because they have not been moved.
                    red: ["R3a0","R3b0", "R2a0", "R2b0", "R1a0", "R1b0"],
                    blue: ["B3a0","B3b0", "B2a0", "B2b0", "B1a0", "B1b0"]
                }
            })
        }
    }

    histHandler = (move, board) => {
        // this takes the lastMove as an argument from this.state and then updates the hist of the
        // appropriate BoardSquare with the move.
        let squareMovedTo = move[]
    };

    ownHandler = (board) => {
        // this is a helper method that takes in the board object, reads the history (which means that it
        // needs to be changed with the move handler), and updates the "owns" property of each

    };

    canMoveHandler = (board) => {
        // this takes in the board and returns the board with updated canMove
    };

    remainingPiecesHandler = (board) => {

    };

    boardStateHandler = (move, board) => {
       // this takes the moveHandler, the ownHandler and the canMoveHandler and passes them the correct args,
       // ultimately returning the new board.

    };


  render() {
    return (
      <div className="App">
          <div>
            <GameBoard
                winStatus={this.state.winStatus}
                boardState={this.state.boardState}
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
