import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { View, Platform } from 'react-native';
import { MAIN_COLOR } from './constants';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import NewThoughtScreen from './screens/NewThoughtScreen';
import NextScreen3 from './screens/NextScreen3';

export const ThoughtStack = StackNavigator({
  Home: { screen: HomeScreen },
  NewThought: { screen: NewThoughtScreen },
  NextScreen3: { screen: NextScreen3 }
});

export const TabNavigation = TabNavigator(
  {
    Home: { screen: ThoughtStack },
    About: { screen: AboutScreen }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: MAIN_COLOR,
      inactiveTintColor: 'gray',
      labelStyle: {
        fontSize: 16,
        alignSelf: 'center'
      }
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);
