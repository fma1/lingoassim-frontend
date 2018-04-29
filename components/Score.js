import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    outerView: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
});

const Score = ({ currentPoints, score, handlePress, navigation }) => (
  <ImageBackground
    source={require('../theme/images/blue-notebook-paper.jpg')}
    style={styles.outerView}
    imageStyle={styles.backgroundImage}
  >
    <View style={styles.container}>
      <Text h4>Points obtained: { currentPoints }</Text>
      <Text h4>Your score is now: { score }</Text>
      <Button onPress={() => navigation.navigate('Home')} title="Return Home" />
    </View>
  </ImageBackground>
);

const mapStateToProps = (state) => ({
  currentPoints: state.currentPoints,
  score: state.score,
});

export default connect(mapStateToProps)(Score);
