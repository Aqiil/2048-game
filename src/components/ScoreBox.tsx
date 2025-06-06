import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScoreBoxProps } from "@game/types";

export default function ScoreBox({ label, value }: ScoreBoxProps) {
    return (
        <View style={styles.scoreBox}>
            <Text style={styles.scoreLabel}>{label}</Text>
            <Text style={styles.scoreValue}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    scoreBox: {
        backgroundColor: '#BBADA0',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    scoreLabel: {
        fontSize: 12,
        color: '#EEE4DA',
        fontWeight: 'bold',
    },
    scoreValue: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});
