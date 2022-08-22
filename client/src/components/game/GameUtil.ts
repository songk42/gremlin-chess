/**
 * Axis along which pieces are being moved.
 * @enum {number}
 */
export enum Axis {
    Row,
    Col
}

export interface Move {
    axis: Axis
    index: number
    n: number
    time?: number
}

/**
 * Indicates whether a square is occupied by a piece, and the piece itself.
 * @class
 * @property {boolean} occupied
 * @property {Piece} piece
 */
export class PieceContainer {
    occupied: boolean
    piece?: Piece

    constructor(occupied: boolean, piece?: Piece) {
        this.occupied = occupied
        if (typeof piece !== 'undefined') {
            this.piece = piece
        }
    }
}

/**
 * Class of chess pieces.
 * @class
 * @property {PieceType} type
 * @property {Color} color
 */
export class Piece {
    type: PieceType
    color: Color

    constructor(type: PieceType, color: Color) {
        this.type = type
        this.color = color
    }
}

/**
 * Enum of chess piece types.
 * @enum {string}
 */
export enum PieceType {
    Pawn = "P", // ♟
    Knight = "N", // ♞
    Bishop = "B", // ♝
    Rook = "R", // ♜
    Queen = "Q", // ♛
    King = "K" // ♚
}

/**
 * Enum of colors (white and black), used by both squares and pieces.
 * @enum {number}
 */
export enum Color {
    White,
    Black
}