import { Tile } from '@game/types';
import { GRID_SIZE } from '@game/layout';
import { reverseRows, tilesToBoard } from './board';
import { slideAndMergeRow } from './move';
import { getNextId } from '@utils/id';

/**
 * Simulates right move on board by reversing, sliding and merging tiles in each row.
 *
 * For each row, the row is reversed, tiles are shifted and merged to the left.
 * The resulting row is reversed again to restore rightward orientation.
 * A new set of tiles is generated with the updated position and ID.
 *
 * @param tiles - The current array of Tile objects on the board.
 * @returns A new array of Tile objects representing the updated board state after the right move.
 */
export function moveRight(tiles: Tile[]): Tile[] {
    const board = reverseRows(tilesToBoard(tiles));
    const newTiles: Tile[] = [];

    for (let row = 0; row < GRID_SIZE; row++) {
        const merged = slideAndMergeRow(board[row]);
        const reversedBack = [...merged].reverse();

        for (let col = 0; col < GRID_SIZE; col++) {
            const tile = reversedBack[col];
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
