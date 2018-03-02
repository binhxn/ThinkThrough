import React from 'react';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import { View, Platform } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import NextPage from './screens/NextPage';
import AboutScreen from './screens/AboutScreen';
import NextScreen2 from './screens/NextScreen2';
import NextScreen3 from './screens/NextScreen3';

export const ThoughtStack = StackNavigator({
  Home: { screen: HomeScreen },
  NextScreen2: { screen: NextScreen2 },
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
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    },
    animationEnabled: false,
    swipeEnabled: false
  }
);
