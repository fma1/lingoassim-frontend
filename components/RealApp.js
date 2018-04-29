/* eslint-disable new-cap */
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Game from './Game';
import Score from './Score';

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

export default RootNavigator;
