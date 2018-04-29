/* eslint-disable new-cap */
import * as Expo from 'expo';
import React from 'react';
import RealApp from './components/RealApp';
import configureStore from './store';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    if (this.state.isLoading) {
      console.log('Returning load screen...');
      return <Expo.AppLoading />;
    } else {
      console.log('RealApp...');
      return (
        <Provider store={this.state.store}>
          <RealApp />
        </Provider>
      );
    }
  }
}
