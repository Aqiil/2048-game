import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NewGameButtonProps } from "@game/types";

export default function NewGameButton({ onPress }: NewGameButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>New Game</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#8F7A66',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 5,
    },
    text: {
        color: '#F9F6F2',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
