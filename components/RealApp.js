/* eslint-disable new-cap */
import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Game from './Game';
import Score from './Score';
import store from '../store';

const RootNavigator = StackNavigator({
    Main: {
        screen: Home,
        navigationOptions: {
          headerTitle: 'Home',
        },
    },
    Game: {
      screen: Game,
      navigationOptions: {
        headerTitle: 'LingoAssim',
      }
    },
    Score: {
      screen: Score,
      navigationOptions: {
        headerTitle: 'Score',
      }
    }
});

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);
export default App;
