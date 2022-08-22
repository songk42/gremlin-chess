import React, { useEffect, useRef, useState } from "react"
import { Board } from "../game/Board"
import { Game } from "../game/Game"

interface GamePageMetadata {
    desktopMode: boolean
    boardSize: number
}

function GameBoard(props:GamePageMetadata) {
    const canvasRef: React.RefObject<HTMLCanvasElement> = useRef(null)
    let ctx: CanvasRenderingContext2D
    const [board, setBoard] = useState(new Board())

    /**
     * Colors in the squares on the chess board.
     * The square (0, 0) (bottom left corner) is black, and all squares thereafter are alternating black and white.
     */
    function colorTiles() {
        const tileWidth = props.boardSize / 8
        console.log(tileWidth)
        const tileColors = ["#f9e5c0", "#592912"]
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                ctx.fillStyle = tileColors[(row + col + 1) % 2]
                ctx.fillRect(
                    Math.floor(tileWidth * col),
                    Math.floor(tileWidth * (7-row)),
                    tileWidth,
                    tileWidth
                )
            }
        }
    }

    useEffect(() => {
        ctx = canvasRef.current.getContext("2d")
        colorTiles()
    }, [props.boardSize])

    return (
        <canvas
            id="chessboard"
            ref={canvasRef}
            width={props.boardSize}
            height={props.boardSize}
            style={{backgroundColor: 'black'}}
        />
    )
}

export default GameBoard
