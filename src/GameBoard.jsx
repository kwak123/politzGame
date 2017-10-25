import React, { Component } from 'react';

class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(props);
        this.state = {gameBoard: this.gameBoard};
    }

    render() {
        return (
            <div className="GameBoard">


            </div>
        );
    }
}

export default GameBoard;