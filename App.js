import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Constants from 'expo-constants';

import HomeScreen from './screens/HomeScreen';
import Monday from './screens/Monday';
import Tuesday from './screens/Tuesday';
import Wednesday from './screens/Wednesday';
import Thursday from './screens/Thursday';
import Friday from './screens/Friday';
import Announcements from './screens/Announcements';
import Housepoints from './screens/Housepoints';


export default class App extends React.Component {
  render() {
    return (
       <View>
        <AppContainer/>
       </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  Monday: Monday,
  Tuesday: Tuesday,
  Wednesday: Wednesday,
  Thursday: Thursday,
  Friday: Friday,
  Announcements: Announcements,
  Housepoints: Housepoints
});

const AppContainer = createAppContainer(AppNavigator);