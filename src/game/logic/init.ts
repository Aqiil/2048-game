import { Tile } from '@game/types';
import { GRID_SIZE } from '@game/layout';
import { getNextId } from "@utils/id";

/**
 * Creates the initial tiles on the board.
 *
 * Randomly places two tiles (2 or 4 value) on the grid at different positions.
 *
 * @returns An array of two initial tiles with random position and value.
 */
export function createInitialTiles(): Tile[] {
    const tiles: Tile[] = [];

    while (tiles.length < 2) {
        const row = Math.floor(Math.random() * GRID_SIZE);
        const col = Math.floor(Math.random() * GRID_SIZE);
        const taken = tiles.some(t => t.row === row && t.col === col);
        if (!taken) {
            tiles.push({
                id: getNextId(),
                value: Math.random() < 0.9 ? 2 : 4,
                row,
                col,
            });
        }
    }

    return tiles;
}
