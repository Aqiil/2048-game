import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Grid from '@components/Grid';
import Tile from '@components/Tile';
import Title from '@components/Title';
import ScoreRow from '@components/ScoreRow';
import NewGameButton from '@components/NewGameButton';
import { createInitialTiles } from '@game/logic/init';
import { Tile as TileType } from '@game/types';
import { BOARD_HEIGHT, BOARD_WIDTH } from '@game/layout';
import { useSwipe } from "@game/useSwipe";
import { moveDown, moveLeft, moveRight, moveUp } from '@game/logic';

export default function App() {
    const [tiles, setTiles] = useState<TileType[]>(createInitialTiles());

    const swipeHandlers = useSwipe((direction) => {
        let moved: TileType[] = tiles;

        switch (direction) {
            case 'left':
                moved = moveLeft(tiles);
                break;
            case 'right':
                moved = moveRight(tiles);
                break;
            case 'up':
                moved = moveUp(tiles);
                break;
            case 'down':
                moved = moveDown(tiles);
                break;
        }

        setTiles(moved);
    });

    return (
        <View style={styles.container}>
            <Title/>
            <ScoreRow/>
            <NewGameButton/>
            <View style={styles.board} {...swipeHandlers}>
                <Grid/>
                {tiles.map(tile => (
                    <Tile key={tile.id} tile={tile}/>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF8EF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,
        gap: 15,
    },
    board: {
        width: BOARD_WIDTH,
        height: BOARD_HEIGHT,
        position: 'relative',
    },
});
