export interface MoveValue {
    // The starting position of the piece.
    from: string;
    // The destination position of the piece.
    to: string;
    // Optional: The type of piece to promote to ('n' for knight, 'b' for bishop, 'r' for rook, 'q' for queen).
    promotion?: 'n' | 'b' | 'r' | 'q';
}
