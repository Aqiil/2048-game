import React from 'react';
import { View, StyleSheet } from 'react-native';
import Grid from '@components/Grid';
import Title from '@components/Title';
import ScoreRow from '@components/ScoreRow';
import NewGameButton from '@components/NewGameButton';

export default function App() {
  return (
      <View style={styles.container}>
        <Title />
        <ScoreRow />
        <NewGameButton />
        <Grid />
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
});
