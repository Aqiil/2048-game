import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Grid from '@components/Grid';
import Tile from '@components/Tile';
import Title from '@components/Title';
import ScoreRow from '@components/ScoreRow';
import NewGameButton from '@components/NewGameButton';
import {createInitialTiles} from '@game/logic';
import {Tile as TileType} from '@game/types';
import {BOARD_HEIGHT, BOARD_WIDTH} from '@game/layout';
import {useSwipe} from "@game/useSwipe";

export default function App() {
    const [tiles, setTiles] = useState<TileType[]>(createInitialTiles());

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

const swipeHandlers = useSwipe((direction) => {
    console.log('Swipe detected:', direction);
});

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
