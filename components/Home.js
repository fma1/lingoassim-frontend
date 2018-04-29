import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getSelectedParts } from '../store/selectedParts';
import { getQuestionIndex } from '../store/questionIndex';
import { getCurrentPoints } from '../store/currentPoints';
import { fetchQuestionList } from '../store/questionList';
import { store } from '../store';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
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
      return <Text>Loading data...</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Button
            onPress={() => navigation.navigate('Game')}
            title="Start Game"
          />
        </View>
      );
    }
  }
}
