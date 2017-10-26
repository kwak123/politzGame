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
            boardState: null,
            lastMove: null // move format: "<team><size><sizeIdx (a or b)><originIdx(0 = pieceCorral><destinationIdx>"
                           // R3a25 would be a move of a red's "first" large piece from position 2 to position 5.
        };
    }

    // this is only called once, before the initial render.
    componentWillMount() {
/*explanation of move hashes:
    lastMove: stored as "<team><size><sizeIdx (a or b)><originIdx(0 = pieceCorral)><destinationIdx>"
        by index: 0: team, 1: size, 2: sizeIdx, 3: origin, 4: destination. 
        R3a25 would be a move of a red's "first" large piece from position 2 to position 5.
    hist: stored as "<team><size><sizeIdx (a or b)><originIdx(0 = pieceCorral)><destinationIdx>"
        Each move causes two changes in the history, one in the origin BoardSquare, one in the destinationIdx.
        Therefore, you can determine which pieces are still on the square (thus determining the value of the "owns")
        key by checking to see if the piece has moved (the hist contains a more recent hist hash of the same piece with
        a origin key matching the BoardSquare key but with an destination key that is different.
    canMove: This is an array of all of the pieces that can currently move from the square (this is a filtered array
        of matching pieces from the hist property.
*/

      this.setState({
        //piece format: "<team><size><sizeindex (a or b)<location = 0 if from pieceCorral, number if not.><index of move>"
        remainingPieces: { // these do not have a <index of move> code because they have not been moved.
          red: ["R3a00","R3b00", "R2a00", "R2b00", "R1a00", "R1b00"],
          blue: ["B3a00","B3b00", "B2a00", "B2b00", "B1a00", "B1b00"]
        }, 
        boardState: {
          // each index is a position on the board, read from left to right.
          // the zero and ten index is reserved to denote each team's corral.
          0: this.state.remainingPieces.blue,
          1: {hist : [], owns : null, canMove : []},
          2: {hist : [], owns : null, canMove : []},
          3: {hist : [], owns : null, canMove : []},
          4: {hist : [], owns : null, canMove : []},
          5: {hist : [], owns : null, canMove : []},
          6: {hist : [], owns : null, canMove : []},
          7: {hist : [], owns : null, canMove : []},
          8: {hist : [], owns : null, canMove : []},
          9: {hist : [], owns : null, canMove : []}, 
          10: this.state.remainingPieces.red
          },  
        })
      }
    }

    // TODO: test ownHandler helpers. 
    // test ownHandler on sample data. 
    //

    histHandler = (lastMove, board) => {
      // this takes the lastMove as an argument from this.state and then updates the hist of the
      // appropriate BoardSquares with the move.
      let origin = lastMove[3]; 
      let destination = lastMove[4]; 

      board[origin][hist].push(lastMove)
      board[destination][hist].push(lastMove)
      return board; 
    };

    ownHandler = (board) => {
      // this is a helper method that takes in the board object, reads the history of each square
      // and updates the "owns" property of each.
      for (var i = 1; i <= 9; i++) {
        let square = board[i];
        let ownsProp = square[owns];
        let hist = square[hist]
        // if the square's most recent move was the lastMove, update the ownsProp. 
        if (hist.length > 0 && hist[hist.length - 1] === this.state.lastMove) {
          // pName returns just the piece name without the moves attached. "R3a61" => "R3a"
          const pName = (piece) => piece.split("").reverse().splice(2, 3).reverse().join(""); //tested
          // piecesOn takes in a hist and then returns only the pieces that are actually on the 
          // square still. NEED TO TEST.
          const piecesOn = (hst) => {
            var hst = hst.map((move) => pName(move))
            return hst.reduce((acc, move) => {
              hst.count((el) => move === el) % 2 !== 0 && !a.includes(move) ? a.concat(move) : a
            ,[]})
          }
          let currentPieces = piecesOn(hist);  
          let ownsProp = currentPieces.sort((a, b) => Number(a[1]) - Number(b[1]))[0] // NEED TO TEST. 
        }
      return board; 
    };

    canMoveHandler = (board) => {
      // this takes in the board and returns the board with updated canMove features for the squares that were
      // changed with the last move. 
      for (var i = 1; i <= 9; i++) {
        let square = board[i];
        let ownsProp = square[owns];
        let hist = square[hist]
        // if the square's most recent move was the lastMove, update the ownsProp. 
        if (hist.length > 0 && hist[hist.length - 1] === this.state.lastMove) {
          //

        }

    };

    boardStateHandler = (move, board) => {
       // this takes the moveHandler, the ownHandler and the canMoveHandler and passes them the correct args,
       // ultimately returning the new board. histHandler must go first. 

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
