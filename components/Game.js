import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, ImageBackground, Alert } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { getSelectedParts, getSelectedPart, takeSelectedPart } from '../store/selectedParts';
import { getJumbledPartThunker, takeJumbledPartThunker } from '../store/jumbledPartsList';
import { incrementQuestionIndex } from '../store/questionIndex';
import { incrementCurrentPoints } from '../store/currentPoints';

let keyIdx = 0;

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    container0: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    container1: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000000'
    },
    container2: {
        flex: 2,
        alignSelf: 'stretch',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container3: {
        flex: 1,
        alignSelf: 'stretch',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderBottomWidth: 2,
        borderBottomColor: '#FFFFFF',
    },
    button: {
      backgroundColor: '#006dcc',
      marginTop: 10,
      marginLeft: -15,
      marginRight: 0,
      paddingLeft: 0,
    },
    submitButton: {
      backgroundColor: '#218838',
    },
    question: {
      fontSize: 18
    }
});

const Game = ({ questionIndex, question, answer, jumbledParts, selectedParts, handlePress, handleSubmit, navigation }) => (
  <ImageBackground
    source={require('./background-design-marble-850796.jpg')}
    style={styles.container0}
    imageStyle={styles.backgroundImage}
  >
    <View style={styles.container1}>
      <Text h4>{`Write this in ...:\n`}</Text>
      <Text style={styles.question}>{question}</Text>
    </View>
    <View style={styles.container3}>
      {selectedParts.map(selectedPart => <Button buttonStyle={styles.button} key={keyIdx++} title={selectedPart} onPress={() => handlePress({ selectedPart })} />)}
    </View>
    <View style={styles.container2}>
      {jumbledParts.map(jumbledPart => <Button buttonStyle={styles.button} key={keyIdx++} title={jumbledPart} onPress={() => handlePress({ jumbledPart })} />)}
    </View>
    <View style={styles.container1}>
      <Button buttonStyle={styles.submitButton} onPress={() => handleSubmit({ selectedParts, answer, questionIndex, navigation })} title='Submit my answer' />
    </View>
  </ImageBackground>
);

const mapStateToProps = (state) => ({
  questionIndex: state.questionIndex,
  question: state.questionsList[state.questionIndex],
  answer: state.answersList[state.questionIndex],
  jumbledParts: state.jumbledPartsList[state.questionIndex],
  selectedParts: state.selectedParts
});

const mapDispatchToProps = (dispatch) => ({
  handlePress(part) {
    if (part.hasOwnProperty('jumbledPart')) {
      dispatch(takeJumbledPartThunker(part.jumbledPart));
      dispatch(getSelectedPart(part.jumbledPart));
    } else {
      dispatch(takeSelectedPart(part.selectedPart));
      dispatch(getJumbledPartThunker(part.selectedPart));
    }
  },
  handleSubmit(obj) {
    console.log('answer: ', obj.selectedParts.join('').replace(/\s+/g, ''));
    console.log('correct answer: ', obj.answer);
    if (obj.selectedParts.join('').replace(/\s+/g, '') === obj.answer.replace(/\s+/g, '')) {
      Alert.alert('Success', 'You got the answer right!', [{text: 'OK'}], { cancelable: false });
      dispatch(incrementCurrentPoints());
    } else {
      Alert.alert('Failure', 'You got the answer wrong.', [{text: 'OK'}], { cancelable: false });
    }

    dispatch(getSelectedParts([]));
    if (obj.questionIndex < 9) {
      dispatch(incrementQuestionIndex());
    } else {
      obj.navigation.navigate('Score');
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
