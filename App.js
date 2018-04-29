/* eslint-disable new-cap */
import * as Expo from 'expo';
import React from 'react';
import RealApp from './components/RealApp';
import store from './store';
import { fetchQuestionList } from './store/questionList';

export default class App extends React.Component {
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
    await this.loadData();
  }

  render() {
    if (!this.state.isReady) {
      console.log('Returning load screen...');
      return <Expo.AppLoading />;
    } else {
      console.log('RealApp...');
      return <RealApp />;
    }
  }
}
