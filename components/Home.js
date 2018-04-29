import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Button
      onPress={() => navigation.navigate('Game')}
      title="Start Game"
    />
  </View>
);

export default Home;
