import { Tile } from '@game/types';
import { GRID_SIZE } from '@game/layout';
import { tilesToBoard, transpose } from './board';
import { slideAndMergeRow } from './move';
import { getNextId } from "@utils/id";

/**
 * Simulates upward move on board by transposing, sliding and merging tiles in each column.
 *
 * The board is transposed to treat columns as rows. Each rows tiles are shifted and merged to the left.
 * The resulting row is transposed again to restore vertical orientation.
 * A new set of tiles is generated with the updated position and ID.
 * The total score from merging is also calculated and returned.
 *
 * @param tiles - The current array of Tile objects on the board.
 * @returns An object containing:
 *   - tiles: A new array of Tile objects representing the updated board state after the up move.
 *   - score: The score gained from merging tiles after the up move.
 */
export function moveUp(tiles: Tile[]): { tiles: Tile[], score: number } {
    const board = transpose(tilesToBoard(tiles));
    const newTiles: Tile[] = [];
    let score = 0;

    for (let row = 0; row < GRID_SIZE; row++) {
        const [merged, rowScore] = slideAndMergeRow(board[row]);
        score += rowScore;

        for (let col = 0; col < GRID_SIZE; col++) {
            const tile = merged[col];
            if (tile) {
                newTiles.push({
                    ...tile,
                    row: col,
                    col: row,
                    id: getNextId(),
                });
            }
        }
    }

    return { tiles: newTiles, score: score };
}
