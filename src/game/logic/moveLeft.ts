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
 *
 * @param tiles - The current array of Tile objects on the board.
 * @returns A new array of Tile objects representing the updated board state after the left move.
 */
export function moveLeft(tiles: Tile[]): Tile[] {
    const board = tilesToBoard(tiles);
    const newTiles: Tile[] = [];

    for (let row = 0; row < GRID_SIZE; row++) {
        const newRow = slideAndMergeRow(board[row]);

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

    return newTiles;
}
