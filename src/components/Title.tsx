import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Title() {
    return <Text style={styles.title}>2048</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#776E65',
    },
});
