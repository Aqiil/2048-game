import React from 'react';
import { StyleSheet, View } from 'react-native';

import ScoreBox from './ScoreBox';
import { ScoreRowProps } from '@game/types'

export default function ScoreRow({ score, best }: ScoreRowProps) {
    return (
        <View style={styles.row}>
            <ScoreBox label="SCORE" value={score}/>
            <ScoreBox label="BEST" value={best}/>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        gap: 10,
    },
});
