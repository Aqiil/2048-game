export type Direction = 'up' | 'down' | 'left' | 'right';

export interface Tile {
    id: number;
    value: number;
    row: number;
    col: number;
}

export interface ScoreBoxProps {
    label: string;
    value: number;
}

export interface ScoreRowProps {
    score: number;
    best: number;
}

export interface NewGameButtonProps {
    onPress: () => void;
}
