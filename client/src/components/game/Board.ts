import { Axis, Move, PieceContainer, Piece, PieceType, Color } from "./GameUtil"

/**
 * Logical representation of a chess board.
 * @class
 * @property {PieceContainer} grid
 */
export class Board {
    grid: PieceContainer[][]

    constructor() {
        this.grid = []
        // Fill grid with empty PieceContainers.
        for (let row = 0; row < 8; row++) {
            this.grid.push([])
            for (let col = 0; col < 8; col++) {
                // When first set up, the first two (white) and last two (black) rows contain pieces.
                this.grid[row].push(new PieceContainer(row in [0, 1, 6, 7]))
            }
        }
        this.resetGrid()
    }

    /**
     * Resets the chess board to its initial state.
     */
    resetGrid() {
        // Layout of the first row; this is the same for both players.
        const firstRow = [
            PieceType.Rook,
            PieceType.Knight,
            PieceType.Bishop,
            PieceType.Queen,
            PieceType.King,
            PieceType.Bishop,
            PieceType.Knight,
            PieceType.Rook,
        ]
        for (let col = 0; col < 8; col++) {
            // Set up white pieces.
            this.grid[0][col].piece = new Piece(firstRow[col], Color.White)
            this.grid[1][col].piece = new Piece(PieceType.Pawn, Color.White)
            // Set up black pieces.
            this.grid[6][col].piece = new Piece(firstRow[col], Color.Black)
            this.grid[7][col].piece = new Piece(PieceType.Pawn, Color.Black)
        }
    }
}
