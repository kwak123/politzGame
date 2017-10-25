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

    // this is only called once, before the initial render.
    componentWillMount() {
            this.setState({boardState: {
                0: {hist : [], owns : null, canMove : []},
                1: {hist : [], owns : null, canMove : []},
                2: {hist : [], owns : null, canMove : []},
                3: {hist : [], owns : null, canMove : []},
                4: {hist : [], owns : null, canMove : []},
                5: {hist : [], owns : null, canMove : []},
                6: {hist : [], owns : null, canMove : []},
                7: {hist : [], owns : null, canMove : []},
                8: {hist : [], owns : null, canMove : []}
            }})
        }
    }

    moveHandler = (move) => {
    // this takes the lastMove as an arguement from this.state and then updates the hist of the
    // appropriate piece with the move.

    };

    ownHandler = (board) => {
        // this is a helper method that takes in the board object, reads the history (which means that it
        // needs to be changed with the move handler), and updates the own

    };

    boardStateHandler = () => {
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
