import React from "react";
import GameBoard from "../modules/GameBoard";

function GamePage(props) {
    return (
        <div className="page-body">
            <h1>chess with bad UI</h1>
            <GameBoard />
        </div>
    );
}

export default GamePage;
