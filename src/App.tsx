import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Grid from '@components/Grid';
import Tile from '@components/Tile';
import Title from '@components/Title';
import ScoreRow from '@components/ScoreRow';
import NewGameButton from '@components/NewGameButton';
import GameOverOverlay from "@components/GameOverOverlay";

import { createInitialTiles } from '@game/logic/init';
import { Tile as TileType } from '@game/types';
import { BOARD_HEIGHT, BOARD_WIDTH } from '@game/layout';
import { useSwipe } from '@game/useSwipe';
import { moveDown, moveLeft, moveRight, moveUp } from '@game/logic';
import { spawnRandomTile } from '@game/logic/spawn';
import { tilesEqual } from '@utils/compare';
import { isGameOver } from "@utils/game";

export default function App() {
    const [tiles, setTiles] = useState<TileType[]>(createInitialTiles());
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        AsyncStorage.getItem('bestScore').then((stored) => {
            if (stored) setBestScore(Number(stored));
        });
    }, []);

    const swipeHandlers = useSwipe((direction) => {
        let movedResult = { tiles, score: 0 };

        switch (direction) {
            case 'left':
                movedResult = moveLeft(tiles);
                break;
            case 'right':
                movedResult = moveRight(tiles);
                break;
            case 'up':
                movedResult = moveUp(tiles);
                break;
            case 'down':
                movedResult = moveDown(tiles);
                break;
        }

        if (!tilesEqual(tiles, movedResult.tiles)) {
            const withNewTile = spawnRandomTile(movedResult.tiles);
            setTiles(withNewTile);

            setScore((prev) => {
                const newScore = prev + movedResult.score;

                if (newScore > bestScore) {
                    setBestScore(newScore);
                    AsyncStorage.setItem('bestScore', newScore.toString());
                }

                return newScore;
            });

            if (isGameOver(withNewTile)) {
                setGameOver(true);
            }
        }
    });

    const handleNewGame = () => {
        const freshTiles = createInitialTiles();
        setTiles(freshTiles);
        setScore(0);
        setGameOver(false);
    };

    return (
        <View style={styles.container}>
            <Title/>
            <ScoreRow score={score} best={bestScore}/>
            <NewGameButton onPress={handleNewGame}/>
            <View style={styles.board} {...swipeHandlers}>
                <Grid/>
                {tiles.map((tile) => (
                    <Tile key={tile.id} tile={tile}/>
                ))}
                {gameOver && <GameOverOverlay/>}
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
