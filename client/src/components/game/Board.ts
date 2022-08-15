import { Axis, Move, Square, Piece, PieceType, Color, makePiece } from "./GameUtil";

/**
 * Logical representation of a chess board.
 */
export class Board {
    grid: Square[][]

    constructor() {
        this.grid = []
        for (let i = 0; i < 8; i++) {
            this.grid.push([]);
            for (let j = 0; j < 8; j++) {
                this.grid[i].push({
                    color: (i + j + 1) % 2,
                    occupied: i in [0, 1, 6, 7]
                    // When first set up, the first two (white) and last two (black) rows contain pieces.
                });
            }
        }
        this.resetGrid();
    }

    /**
     * Resets the chess board to its initial state.
     */
    resetGrid() {
        const firstRow = [
            PieceType.Rook,
            PieceType.Knight,
            PieceType.Bishop,
            PieceType.Queen,
            PieceType.King,
            PieceType.Bishop,
            PieceType.Knight,
            PieceType.Rook,
        ];
        for (let j = 0; j < 8; j++) {
            // Set up white pieces.
            this.grid[0][j].piece = makePiece(firstRow[j], Color.White);
            this.grid[1][j].piece = makePiece(PieceType.Pawn, Color.White);
            // Set up black pieces.
            this.grid[6][j].piece = makePiece(firstRow[j], Color.Black);
            this.grid[7][j].piece = makePiece(PieceType.Pawn, Color.Black);
        }
    }
}
