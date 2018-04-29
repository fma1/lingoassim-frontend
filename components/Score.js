import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const Home = ({ currentPoints }) => (
  <View style={styles.container}>
    <Text>Points obtained: { currentPoints }</Text>
  </View>
);

const mapStateToProps = (state) => ({ currentPoints: state.currentPoints });

export default connect(mapStateToProps)(Home);
