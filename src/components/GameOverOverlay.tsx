import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function GameOverOverlay() {
    return (
        <View style={styles.overlay}>
            <Text style={styles.text}>Game Over</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(238, 228, 218, 0.85)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        zIndex: 10,
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#776e65',
    },
});
