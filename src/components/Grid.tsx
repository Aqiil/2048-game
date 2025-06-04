import React from 'react';
import { View, StyleSheet } from 'react-native';

const GRID_SIZE = 4;
const CELL_SIZE = 70;
const CELL_GAP = 10;

export default function Grid() {
    return (
        <View style={styles.wrapper}>
            {Array.from({ length: GRID_SIZE }).map((_, row) => (
                <View key={row} style={styles.row}>
                    {Array.from({ length: GRID_SIZE }).map((_, col) => (
                        <View key={col} style={styles.cell} />
                    ))}
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#BBADA0',
        borderRadius: 10,
        padding: CELL_GAP,
        gap: CELL_GAP,
    },
    row: {
        flexDirection: 'row',
        gap: CELL_GAP,
    },
    cell: {
        width: CELL_SIZE,
        height: CELL_SIZE,
        backgroundColor: '#CDC1B4',
        borderRadius: 5,
    },
});
