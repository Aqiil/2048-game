import { Tile } from '@game/types';
import { GRID_SIZE } from '@game/layout';
import { tilesToBoard } from './board';
import { slideAndMergeRow } from './move';
import { getNextId } from '@utils/id';

/**
 * Simulates a leftward move on the board by sliding and merging tiles in each row.
 *
 * For each row, adjacent tiles with the same value are merged, and tiles are shifted to the left.
 * A new set of tiles is generated with updated positions and unique IDs.
 * The total score from merging is also calculated and returned.
 *
 * @param tiles - The current array of Tile objects on the board.
 * @returns An object containing:
 *   - tiles: A new array of Tile objects representing the updated board state after the left move.
 *   - score: The score gained from merging tiles after the left move.
 */
export function moveLeft(tiles: Tile[]): { tiles: Tile[]; score: number } {
    const board = tilesToBoard(tiles);
    const newTiles: Tile[] = [];
    let score = 0;

    for (let row = 0; row < GRID_SIZE; row++) {
        const [newRow, rowScore] = slideAndMergeRow(board[row]);
        score += rowScore;

        for (let col = 0; col < GRID_SIZE; col++) {
            const tile = newRow[col];
            if (tile) {
                newTiles.push({
                    ...tile,
                    row,
                    col,
                    id: getNextId(),
                });
            }
        }
    }

    return { tiles: newTiles, score };
}
