import React, { useEffect, useState } from "react";
import { Game } from "../game/Game";

function GameBoard(props) {
    const canvasRef = React.createRef();
    const [game, setGame] = useState({});

    useEffect(() => {
        setGame(new Game(canvasRef.current));
    }, [])

    return (
        <canvas id="chessboard" ref={canvasRef} />
    );
}

export default GameBoard;
