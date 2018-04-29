import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#AAA',
        justifyContent: 'center',
    },
});

const Game = ({ question, answer, jumbledParts }) => (
  <View style={styles.container}>
    <Text>{`Write this in ...:\n`}</Text>
    <Text>{question}</Text>
    {jumbledParts.map(jumbledPart => <Button key={jumbledPart} title={jumbledPart} />)}
  </View>
);

const mapStateToProps = (state) => ({
  question: state.questionList[state.questionIndex].question,
  answer: state.questionList[state.questionIndex].answer,
  jumbledParts: state.questionList[state.questionIndex].jumbledParts,
});

export default connect(mapStateToProps)(Game);
