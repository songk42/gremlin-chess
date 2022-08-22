import React, { useRef, useState, useEffect } from "react"
import GameBoard from "../modules/GameBoard"

function GamePage() {
    const [desktopMode, setDesktopMode] = useState(true)
    const [boardSize, setBoardSize] = useState(300)
    
    const bodyRef: React.RefObject<HTMLDivElement> = useRef(null)

    function updateBoardSize() {
        const mobileWidth = bodyRef.current.clientWidth - 32
        const mobileHeight = Math.max(300, innerHeight - 192)
        const desktopWidth = bodyRef.current.clientWidth - 32
        const desktopHeight = innerHeight - 144
        // choose desktop mode if the canvas size is bigger than in mobile mode
        setDesktopMode(
            (Math.min(mobileWidth, mobileHeight) < Math.min(desktopWidth, desktopHeight))
            && desktopHeight > 320 // minimum height of sidebar
        )
        const width = desktopMode ? desktopWidth : mobileWidth
        const height = desktopMode ? desktopHeight : mobileHeight
        const tempSize = Math.min(width, height, 640)
        setBoardSize(tempSize - tempSize % 8)
    }

    useEffect(() => {
        updateBoardSize()
    }, []) // get this to happen when window size changes, too

    return (
        <div className="page-body" ref={bodyRef}>
            <h1>chess with bad UI</h1>
            <GameBoard
                desktopMode={desktopMode}
                boardSize={boardSize} />
        </div>
    )
}

export default GamePage
