import { Tile } from '@game/types';
import { GRID_SIZE } from '@game/layout';
import { tilesToBoard } from '@game/logic/board';

/**
 * Checks if game is over.
 *
 * Game is considered over if:
 *   - No empty cells exist on the board.
 *   - No adjacent tiles can be merged horizontally or vertically.
 *
 * @param tiles - The current array of Tile objects on the board.
 * @returns True if no valid moves remain, otherwise False.
 */
export function isGameOver(tiles: Tile[]): boolean {
    const board = tilesToBoard(tiles);
    
    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            if (!board[row][col]) return false;

            const current = board[row][col];
            if (
                (col < GRID_SIZE - 1 && board[row][col + 1]?.value === current?.value) ||
                (row < GRID_SIZE - 1 && board[row + 1][col]?.value === current?.value)
            ) {
                return false;
            }
        }
    }

    return true;
}
