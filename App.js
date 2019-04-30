import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import FeedScreen from './src/screen/Tab/FeedScreen';
import MainScreen from './src/screen/Tab/MainScreen';
import SettingsScreen from './src/screen/Tab/SettingsScreen';
import ProfileScreen from './src/screen/Tab/ProfileScreen';
import LoginScreen from './src/screen/User/Login';

const RootStack = createStackNavigator( // Stack
  
  {
    Login: LoginScreen,
    Gate: createBottomTabNavigator({   // Tab

      Feed: FeedScreen,
      Main: MainScreen,
      Profile: ProfileScreen,
      Settings: SettingsScreen,
    }
    )
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  static navigationOptions = {
    header: null
}
  render() {
    return <AppContainer />;
  }
}