import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ScoreBox({ label, value }: { label: string; value: number }) {
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
