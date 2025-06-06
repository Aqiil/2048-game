import { Tile } from '@game/types';
import { GRID_SIZE } from '@game/layout';
import { getNextId } from '@utils/id';

/**
 * Spawns a random tile in an empty cell on the board.
 *
 * Finds all unoccupied cells, selects one randomly and places new tile of 2 (90%) or 4 (10%).
 * Returns an array with the added tile.
 * If no empty cells are found, tile array is returned unchanged.
 *
 * @param tiles - The current array of Tile objects on the board.
 * @returns A new array of Tile objects with the new tile spawned or the unchanged original array if board is full.
 */
export function spawnRandomTile(tiles: Tile[]): Tile[] {
    const occupied = new Set(tiles.map(t => `${t.row},${t.col}`));
    const empty: { row: number; col: number }[] = [];

    for (let row = 0; row < GRID_SIZE; row++) {
        for (let col = 0; col < GRID_SIZE; col++) {
            if (!occupied.has(`${row},${col}`)) {
                empty.push({ row, col });
            }
        }
    }

    if (empty.length === 0) return tiles;

    const spot = empty[Math.floor(Math.random() * empty.length)];
    const newTile: Tile = {
        id: getNextId(),
        value: Math.random() < 0.9 ? 2 : 4,
        row: spot.row,
        col: spot.col,
    };

    return [...tiles, newTile];
}
