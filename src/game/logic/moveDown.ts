import { Tile } from '@game/types';
import { GRID_SIZE } from '@game/layout';
import { reverseRows, tilesToBoard, transpose } from './board';
import { slideAndMergeRow } from './move';
import { getNextId } from "@utils/id";

/**
 * Simulates downward move on board by transposing, reversing, sliding and merging tiles in each column.
 *
 * The board is transposed to treat columns as rows and then reversed. Each rows tiles are shifted and
 * merged to the left. The resulting row is reversed and transposed again to restore vertical orientation.
 * A new set of tiles is generated with the updated position and ID.
 * The total score from merging is also calculated and returned.
 *
 * @param tiles - The current array of Tile objects on the board.
 * @returns An object containing:
 *   - tiles: A new array of Tile objects representing the updated board state after the down move.
 *   - score: The score gained from merging tiles after the down move.
 */
export function moveDown(tiles: Tile[]): { tiles: Tile[], score: number } {
    const board = reverseRows(transpose(tilesToBoard(tiles)));
    const newTiles: Tile[] = [];
    let score = 0;

    for (let row = 0; row < GRID_SIZE; row++) {
        const [merged, rowScore] = slideAndMergeRow(board[row]);
        const reversedBack = [...merged].reverse();
        score += rowScore;

        for (let col = 0; col < GRID_SIZE; col++) {
            const tile = reversedBack[col];
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
