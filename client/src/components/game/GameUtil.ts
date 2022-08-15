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

export interface Square {
    color: Color
    occupied: boolean
    piece?: Piece
}

export interface Piece {
    type: PieceType
    color: Color
}

export function makePiece(type: PieceType, color: Color):Piece {
    return {type: type, color: color};
}

export enum PieceType {
    Pawn,
    Knight,
    Bishop,
    Rook,
    Queen,
    King
}

export enum Color {
    White,
    Black
}