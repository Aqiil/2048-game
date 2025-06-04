import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScoreBox from './ScoreBox';

export default function ScoreRow() {
    return (
        <View style={styles.row}>
            <ScoreBox label="SCORE" value={184} />
            <ScoreBox label="BEST" value={25492} />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        gap: 10,
    },
});
