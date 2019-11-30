import { createAppContainer } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    User,
  }),
  {
    headerLayoutPreset: 'Center',
    headerBackTitleVisible: false,
    defaultNavigationOptions: {
      headerSytle: {
        backgroundColor: '#7159c1',
      },
      headerTintColor: '#FFF',
    },
  }
);

export default Routes;
