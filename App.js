import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';
import FeedScreen from './src/screen/Tab/FeedScreen';
import MainScreen from './src/screen/Tab/MainScreen';
import SettingsScreen from './src/screen/Tab/SettingsScreen';
import ProfileScreen from './src/screen/Tab/ProfileScreen';


const RootStack = createStackNavigator( // Stack
  
  {
    Details: DetailsScreen,
    Home: HomeScreen,

    Gate2: createBottomTabNavigator({   // Tab
      Feed: FeedScreen,
      Main: MainScreen,
      Profile: ProfileScreen,
      Settings: SettingsScreen,
    })
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}