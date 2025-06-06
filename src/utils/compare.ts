import { Tile } from '@game/types';

/**
 * Compares two tile arrays for equality based on position and value.
 *
 * Each tile array represents a board and are equal if they match the number of tiles
 *
 * @param a - The first array of Tile objects.
 * @param b - The second array of Tile objects.
 * @returns True if both arrays have equal values and position, otherwise False.
 */
export function tilesEqual(a: Tile[], b: Tile[]): boolean {
    if (a.length !== b.length) return false;

    const sortKey = (t: Tile) => `${t.row}-${t.col}-${t.value}`;
    const sortedA = [...a].sort((x, y) => sortKey(x).localeCompare(sortKey(y)));
    const sortedB = [...b].sort((x, y) => sortKey(x).localeCompare(sortKey(y)));

    return sortedA.every((tile, i) => {
        const other = sortedB[i];
        return tile.row === other.row && tile.col === other.col && tile.value === other.value;
    });
}
