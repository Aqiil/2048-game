import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title() {
    return (
        <View>
            <Text style={styles.title}>2048</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#776E65',
        textAlign: 'center',
    },
    message: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#776E65',
        textAlign: 'center',
    }
});
