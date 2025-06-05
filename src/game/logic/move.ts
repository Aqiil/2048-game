import { Tile } from '@game/types';
import { GRID_SIZE } from '@game/layout';

/**
 * Slides and merges a row of tiles to the LEFT.
 *
 * Removes nulls to compact row and merge adjacent equal values.
 * Fills remaining cells with null to match row length.
 *
 * @param row - A single row of tiles of length GRID_SIZE containing Tile or null.
 * @returns A new row of same length with merged and shifted tiles to the left.
 */
export function slideAndMergeRow(row: (Tile | null)[]): (Tile | null)[] {
    const compact = row.filter(Boolean) as Tile[];
    const result: (Tile | null)[] = [];
    let i = 0;

    while (i < compact.length) {
        if (i + 1 < compact.length && compact[i].value === compact[i + 1].value) {
            result.push({ ...compact[i], value: compact[i].value * 2 });
            i += 2;
        } else {
            result.push({ ...compact[i] });
            i += 1;
        }
    }

    while (result.length < GRID_SIZE) {
        result.push(null);
    }

    return result;
}
