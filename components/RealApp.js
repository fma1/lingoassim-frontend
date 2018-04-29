/* eslint-disable new-cap */
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Game from './Game';
import Score from './Score';

const RootNavigator = StackNavigator({
    Main: { screen: Home },
    Game: { screen: Game },
    Score: { screen: Score }
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
});

export default RootNavigator;
