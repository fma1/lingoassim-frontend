import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import { getSelectedParts } from '../store/selectedParts';
import { getQuestionIndex } from '../store/questionIndex';
import { getCurrentPoints } from '../store/currentPoints';
import { fetchQuestionList } from '../store/questionList';
import { store } from '../store';

const styles = StyleSheet.create({
    outerView: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText: {
      color: '#ffffff',
    },
    buttonStyle: {
      backgroundColor: '#8B008B'
    }
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async loadData() {
    console.log('Loading data...');
    await store.dispatch(fetchQuestionList());
    this.setState({ isReady: true });
  }

  async componentDidMount() {
    store.dispatch(getSelectedParts([]));
    store.dispatch(getQuestionIndex(0));
    store.dispatch(getCurrentPoints(0));
    await this.loadData();
  }

  render() {
    const { navigation } = this.props;
    if (!this.state.isReady) {
      return <Text h3>Loading data...</Text>;
    } else {
      return (
        <ImageBackground
         source={require('../theme/images/greencards.jpg')}
         style={styles.outerView}
         imageStyle={styles.backgroundImage}
        >
        <View style={styles.outerView}>
          <View style={styles.container}>
            <Text h3 style={styles.whiteText}>Welcome to LingoAssim!</Text>
            <Icon
              name="language"
              type="entypo"
              color="#8B008B"
              size={104} />
          </View>
          <View style={styles.container}>
            <Button
              style={styles.buttonStyle}
              onPress={() => navigation.navigate('Game')}
              title="Start Game"
            />
          </View>
        </View>
        </ImageBackground>
      );
    }
  }
}
