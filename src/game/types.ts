export type Direction = 'up' | 'down' | 'left' | 'right';

export interface Tile {
    id: number;
    value: number;
    row: number;
    col: number;
}