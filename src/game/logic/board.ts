import { Tile } from "@game/types";
import { GRID_SIZE } from "@game/layout";

export type Board = (Tile | null)[][];

/**
 * Creates an empty game board.
 *
 * Generates a 2D array of size GRID_SIZE and initializes all cells as null.
 *
 * @returns An empty 2D array representing the board.
 */
export function createEmptyBoard(): Board {
    return Array.from({ length: GRID_SIZE }, () =>
        Array.from({ length: GRID_SIZE }, () => null)
    );
}

/**
 * Converts an array of tiles into a 2D board representation.
 *
 * Each tile has a row and col positioning it on the board.
 *
 * @param tiles - An array of Tile objects with row and col positions
 * @returns A 2D array (Board) with tiles placed at respective coordinates and remaining cells set to null
 */
export function tilesToBoard(tiles: Tile[]): Board {
    const board = createEmptyBoard();
    for (const tile of tiles) {
        board[tile.row][tile.col] = tile;
    }
    return board;
}

/**
 * Transposes the board to convert rows to columns and vice versa.
 *
 * Allows reuse of leftward logic in 'slideAndMergeRow' by adapt vertical movement into horizontal movement.
 *
 * @param board - A 2D array representing the current game board.
 * @returns A new board with rows and columns swapped.
 */
export function transpose(board: Board): Board {
    return board[0].map((_, i) => board.map(row => row[i]));
}

/**
 * Reverses each row in the board.
 *
 * Allows reuse of leftward logic in 'slideAndMergeRow' by reversing each row
 *
 * @param board - A 2D array representing the current game board.
 * @returns A new board with each row reversed.
 */
export function reverseRows(board: Board): Board {
    return board.map(row => [...row].reverse());
}
