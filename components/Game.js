import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#AAA',
        justifyContent: 'center',
    },
});

const Game = () => (
  <View style={styles.container}>
    <Text>This is my Game Component!</Text>
  </View>
);

export default Game;
