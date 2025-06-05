import {Tile} from './types';
import {GRID_SIZE} from './layout';

export function createInitialTiles(): Tile[] {
    const tiles: Tile[] = [];

    while (tiles.length < 2) {
        const row = Math.floor(Math.random() * GRID_SIZE);
        const col = Math.floor(Math.random() * GRID_SIZE);
        const taken = tiles.some(t => t.row === row && t.col === col);
        if (!taken) {
            tiles.push({
                id: Date.now() + tiles.length,
                value: Math.random() < 0.9 ? 2 : 4,
                row,
                col,
            });
        }
    }

    return tiles;
}
