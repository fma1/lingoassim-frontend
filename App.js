/* eslint-disable new-cap */
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import Game from './components/Game';

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

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
        headerTitle: 'LingoAssim'
      }
    }
});

export default RootNavigator;
