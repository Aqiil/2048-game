import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Tile as TileType} from '@game/types';
import {CELL_SIZE, CELL_GAP} from '@game/layout';
import {TILE_COLORS} from '@game/colors';

export default function Tile({tile}: { tile: TileType }) {
    const top = CELL_GAP + tile.row * (CELL_SIZE + CELL_GAP);
    const left = CELL_GAP + tile.col * (CELL_SIZE + CELL_GAP);
    const backgroundColor = TILE_COLORS[tile.value] || '#3C3A32';

    return (
        <View style={[styles.tile, {top, left, backgroundColor}]}>
            <Text style={styles.text}>{tile.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    tile: {
        position: 'absolute',
        width: CELL_SIZE,
        height: CELL_SIZE,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#776E65',
    },
});
